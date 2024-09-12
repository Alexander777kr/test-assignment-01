import TableBody from './table-body/TableBody';
import TableHeading from './table-heading/TableHeading';
import styles from './Table.module.css';
import { useState } from 'react';
import { saveAs } from 'file-saver';
import Papa from 'papaparse';
import { type Column } from '../../utils/types';
import SpinnerLayout from '../spinner-layout/SpinnerLayout';
import toast from 'react-hot-toast';

export default function Table() {
  const [dataSource, setDataSource] = useState<Column[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filterFields, setFilterFields] = useState({
    barcode: '',
    articleNumber: '',
    size: '',
    category: '',
  });

  let filteredDataSource = dataSource;

  if (filterFields.barcode !== '' && filteredDataSource.length > 0) {
    filteredDataSource = filteredDataSource.filter((entry) =>
      entry.barcode.includes(filterFields.barcode)
    );
  }

  if (filterFields.articleNumber !== '' && filteredDataSource.length > 0) {
    filteredDataSource = filteredDataSource.filter((entry) =>
      entry.supplierCode
        .toLowerCase()
        .trim()
        .includes(filterFields.articleNumber.toLowerCase().trim())
    );
  }

  if (filterFields.size !== '' && filteredDataSource.length > 0) {
    filteredDataSource = filteredDataSource.filter((entry) =>
      entry.size.includes(filterFields.size)
    );
  }

  if (filterFields.category !== '' && filteredDataSource.length > 0) {
    filteredDataSource = filteredDataSource.filter(
      (entry) =>
        entry.item.toLowerCase().trim() ===
        filterFields.category.toLowerCase().trim()
    );
  }

  // Function to load data from data.json
  const loadDataFromJSON = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/data.json');
      const data = await response.json();
      setDataSource(data as Column[]);
      toast.success('Данные успешно загружены в таблицу');
    } catch (error) {
      console.error('Failed to load data:', error);
      toast.error('Ошибка при загрузке данных. Обратитесь к администратору');
    } finally {
      setIsLoading(false);
    }
  };

  // Function to export data to CSV
  const exportToCSV = () => {
    if (dataSource.length !== 0) {
      const csv = Papa.unparse(filteredDataSource);
      const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
      saveAs(blob, 'data.csv');
      toast.loading(
        'Подождите, данные с таблицы сохраняются как csv файл на диск...',
        {
          duration: 7000,
        }
      );
      setTimeout(() => {
        toast.success('Данные успешно загружены на диск как файл data.csv', {
          duration: 4000,
        });
      }, 7000);
    } else {
      toast.error(
        "Нет данных для сохранения. Нажмите на кнопку 'Загрузить данные из csv'"
      );
    }
  };

  return (
    <div className={styles.table}>
      <TableHeading
        dataSource={dataSource}
        loadDataFromJSON={loadDataFromJSON}
        exportToCSV={exportToCSV}
        setFilterFields={setFilterFields}
        setDataSource={setDataSource}
      />
      {isLoading ? (
        <SpinnerLayout />
      ) : (
        <TableBody
          dataSource={filteredDataSource}
          setDataSource={setDataSource}
        />
      )}
    </div>
  );
}
