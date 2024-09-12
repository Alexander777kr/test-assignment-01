import Heading from '../../heading/Heading';
import Button from '../../button/Button';
import styles from './TableHeading.module.css';
import { FaBook } from 'react-icons/fa';
import Card from '../../card/Card';
import Input from '../../input/Input';
import SelectInput from '../../select-input/SelectInput';
import { CgExport } from 'react-icons/cg';
import { RiFileUploadFill } from 'react-icons/ri';
import { MdAssignmentAdd } from 'react-icons/md';
import { RxCross2 } from 'react-icons/rx';
import { useState } from 'react';

type FilterFields = {
  barcode: string;
  articleNumber: string;
  size: string;
  category: string;
};

interface TableHeading {
  loadDataFromJSON: () => void;
  exportToCSV: () => void;
  setFilterFields: React.Dispatch<React.SetStateAction<FilterFields>>;
}

export default function TableHeading({
  loadDataFromJSON,
  exportToCSV,
  setFilterFields,
}: TableHeading) {
  const [barcode, setBarcode] = useState('');
  const [articleNumber, setArticleNumber] = useState('');
  const [size, setSize] = useState('');
  const [category, setCategory] = useState('');

  function formTable() {
    setFilterFields({
      barcode,
      articleNumber,
      size,
      category,
    });
  }

  return (
    <header>
      <div className={styles.header}>
        <Heading level={'1'} className={styles.headingOne}>
          Остатки сформированы на 01.04.2023 г.
        </Heading>
        <Button
          leftIcon={<FaBook className={styles.faBook} />}
          styleType={'dark'}
          size={'medium'}
          className={styles.instructions}
        >
          Инструкции
        </Button>
      </div>
      <div className={styles.options}>
        <Card
          className={`${styles.card} ${styles.cardWithInput}`}
          mainLayout={true}
        >
          <label className={styles.spacing} htmlFor="barcode">
            Баркод
          </label>
          <span>
            <Input
              id="barcode"
              placeholder="5643242134323099"
              value={barcode}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setBarcode(e.target.value)
              }
            />
          </span>
        </Card>
        <Card
          className={`${styles.card} ${styles.cardWithInput}`}
          mainLayout={true}
        >
          <label className={styles.spacing} htmlFor="articleNumber">
            Артикул
          </label>
          <span>
            <Input
              id="articleNumber"
              placeholder="Кроссовки"
              value={articleNumber}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setArticleNumber(e.target.value)
              }
            />
          </span>
        </Card>
        <Card
          className={`${styles.card} ${styles.cardWithInput}`}
          mainLayout={true}
        >
          <label className={styles.spacing} htmlFor="size">
            Размер
          </label>
          <span>
            <Input
              id="size"
              placeholder="44"
              value={size}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setSize(e.target.value)
              }
            />
          </span>
        </Card>
        <Card className={`${styles.cardCategory}`} mainLayout={true}>
          <label className={styles.categoryLabel} htmlFor="category">
            Категория
          </label>
          <span>
            <SelectInput
              id="category"
              value={category}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                setCategory(e.target.value)
              }
            />
          </span>
        </Card>
      </div>
      <div className={styles.header}>
        <Button onClick={formTable} styleType={'primary'} size={'mediumLarge'}>
          Сформировать
        </Button>
        <Button
          leftIcon={<CgExport className={styles.exportIcon} />}
          styleType={'dark'}
          size={'mediumLarge'}
          onClick={exportToCSV}
        >
          Экспорт
        </Button>
      </div>
      <div className={`${styles.header} ${styles.controlForm}`}>
        <div className={styles.options}>
          <Button
            leftIcon={<RiFileUploadFill className={styles.uploadIcons} />}
            styleType={'ghost'}
            size={'medium'}
            onClick={loadDataFromJSON}
          >
            Загрузить данные из csv
          </Button>
          <Button
            leftIcon={<MdAssignmentAdd className={styles.uploadIcons} />}
            styleType={'ghost'}
            size={'medium'}
          >
            Изменить данные
          </Button>
        </div>
        <div className={styles.options}>
          <Button
            rightIcon={<RxCross2 className={styles.uploadIcons} />}
            styleType={'ghost'}
            size={'medium'}
          >
            Очистить
          </Button>
        </div>
      </div>
    </header>
  );
}
