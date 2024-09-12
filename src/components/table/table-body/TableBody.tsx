import {
  LegacyRef,
  useContext,
  useEffect,
  useRef,
  useState,
  ReactNode,
  createContext,
} from 'react';
import { Form, FormInstance, Input, InputRef, Table } from 'antd';
import styles from './TableBody.module.css';
import { Rule } from 'antd/es/form';
import { type Column } from '../../../utils/types';
import {
  type FormValues,
  type EditableCellProps,
  type TableBodyProps,
} from './types';
import toast from 'react-hot-toast';

function isIntegerWithoutDotAtEnd(value: string) {
  return /^-?\d+$/.test(value);
}

const EditableContext = createContext<FormInstance<FormValues> | null>(null);

const EditableRow = ({ ...props }) => {
  const [form] = Form.useForm();
  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  );
};

const EditableCell = ({
  title,
  editable,
  children,
  dataIndex,
  record,
  handleSave,
  setToggleFiltering,
  ...restProps
}: EditableCellProps) => {
  const [editing, setEditing] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const form = useContext(EditableContext);

  useEffect(() => {
    if (editing) {
      inputRef.current?.focus();
    }
  }, [editing]);

  const toggleEdit = () => {
    setEditing(!editing);
    if (record) {
      form?.setFieldsValue({
        [dataIndex]: record[dataIndex],
      });
    }
  };

  const save = async () => {
    try {
      const values = await form?.validateFields();
      toggleEdit();
      handleSave({
        ...record,
        ...values,
      });
      setToggleFiltering(false);
      toast.success('Ячейка изменена', {
        duration: 4000,
      });
      toast.error("Для фильтрации результатов нажмите на 'Изменить данные'.", {
        duration: 25000,
      });
    } catch (errInfo) {
      console.log('Save failed:', errInfo);
    }
  };

  let childNode = children;

  if (editable) {
    const validationRules =
      dataIndex === 'barcode' ||
      dataIndex === 'available' ||
      dataIndex === 'inTransit'
        ? ([
            {
              required: true,
              message: `Поле "${title}" обязательно.`,
            },
            {
              validator: (_, value) => {
                if (!value) {
                  return Promise.reject('Это поле обязательно');
                }
                const numberValue = Number(value);
                if (
                  Number.isInteger(numberValue) &&
                  numberValue > 0 &&
                  isIntegerWithoutDotAtEnd(value)
                ) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  `Поле "${title}" должно быть положительным целым числом.`
                );
              },
            },
          ] as Rule[])
        : ([
            {
              required: true,
              message: `Поле "${title}" обязательно.`,
            },
          ] as Rule[]);

    childNode = editing ? (
      <Form.Item
        style={{
          margin: 0,
        }}
        name={dataIndex}
        rules={validationRules as any}
      >
        <Input
          ref={inputRef as unknown as LegacyRef<InputRef> | undefined}
          onPressEnter={() => save()}
          onBlur={() => save()}
        />
      </Form.Item>
    ) : (
      <div
        className="editable-cell-value-wrap"
        style={{
          paddingInlineEnd: 24,
        }}
        onDoubleClick={toggleEdit}
      >
        {children}
      </div>
    );
  }

  return <td {...restProps}>{childNode}</td>;
};

const TableBody = ({
  dataSource,
  setDataSource,
  setToggleFiltering,
}: TableBodyProps) => {
  const defaultColumns = [
    {
      title: 'Баркод',
      dataIndex: 'barcode',
      editable: true,
      sorter: (a: Column, b: Column) => a.barcode.localeCompare(b.barcode),
    },
    {
      title: 'Предмет',
      dataIndex: 'item',
      sorter: (a: Column, b: Column) => a.item.localeCompare(b.item),
    },
    {
      title: 'Артикул поставщика',
      dataIndex: 'supplierCode',
      sorter: (a: Column, b: Column) =>
        a.supplierCode.localeCompare(b.supplierCode),
    },
    {
      title: 'Размер',
      dataIndex: 'size',
      sorter: (a: Column, b: Column) => a.size.localeCompare(b.size),
    },
    {
      title: 'Доступно к заказу',
      dataIndex: 'available',
      editable: true,
      sorter: (a: Column, b: Column) => a.available - b.available,
    },
    {
      title: 'Товары в пути (заказы и возвраты)',
      dataIndex: 'inTransit',
      editable: true,
      sorter: (a: Column, b: Column) => a.inTransit - b.inTransit,
    },
    {
      title: 'Итого кол-во товаров',
      dataIndex: 'total',
      sorter: (a: Column, b: Column) => a.total - b.total,
      render: (_: any, record: Column) =>
        Number(record.available) + Number(record.inTransit),
    },
  ];

  const handleSave = (row: Column) => {
    const newData = dataSource.map((item) => {
      if (item.key === row.key) {
        // Если ключи совпадают, обновляем элемент
        return {
          ...item,
          ...row,
          total: Number(row.available) + Number(row.inTransit),
        };
      }
      return item;
    });
    setDataSource(newData);
  };

  const components = {
    header: {
      cell: (props: { children: ReactNode }) => (
        <th {...props} style={{ textAlign: 'center' }}>
          {props.children}
        </th>
      ),
    },
    body: {
      row: EditableRow,
      cell: (props: EditableCellProps) => (
        <EditableCell {...props} setToggleFiltering={setToggleFiltering} />
      ),
    },
  };

  const columns = defaultColumns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record: unknown) => ({
        record,
        editable: col.editable,
        dataIndex: col.dataIndex,
        title: col.title,
        handleSave,
      }),
    };
  });

  const getTotal = (field: keyof Column) => {
    return dataSource.reduce((acc, curr) => acc + Number(curr[field]), 0);
  };

  return (
    <div className={`${styles.table}`}>
      <Table
        components={components}
        rowClassName={() => 'editable-row'}
        bordered
        dataSource={dataSource}
        columns={columns as any}
        pagination={false}
        locale={{
          emptyText:
            'Нет данных для отображения. Нажмите "Загрузить данные из csv"',
          triggerAsc: 'Сортировать по возрастанию',
          triggerDesc: 'Сортировать по убыванию',
          cancelSort: 'Отмена сортировки',
        }}
        summary={() => (
          <Table.Summary.Row>
            <Table.Summary.Cell colSpan={5} index={1}>
              Итого:
            </Table.Summary.Cell>
            <Table.Summary.Cell index={2}>
              {getTotal('inTransit')}
            </Table.Summary.Cell>
            <Table.Summary.Cell index={3}>
              {getTotal('total')}
            </Table.Summary.Cell>
          </Table.Summary.Row>
        )}
      />
    </div>
  );
};

export default TableBody;
