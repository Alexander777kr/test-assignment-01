import Heading from '../../heading/Heading';
import Button from '../../button/Button';
import { ButtonStyle, ButtonSize } from '../../button/types';
import { NumberEnum } from '../../../utils/types';
import styles from './TableHeading.module.css';
import { FaBook } from 'react-icons/fa';
import Card from '../../card/Card';
import Input from '../../input/Input';
import SelectInput from '../../select-input/SelectInput';
import { CgExport } from 'react-icons/cg';
import { RiFileUploadFill } from 'react-icons/ri';
import { MdAssignmentAdd } from 'react-icons/md';
import { RxCross2 } from 'react-icons/rx';

interface TableHeading {
  loadDataFromJSON: () => void;
  exportToCSV: () => void;
}

export default function TableHeading({
  loadDataFromJSON,
  exportToCSV,
}: TableHeading) {
  return (
    <header>
      <div className={styles.header}>
        <Heading level={NumberEnum.One} className={styles.headingOne}>
          Остатки сформированы на 01.04.2023 г.
        </Heading>
        <Button
          leftIcon={<FaBook className={styles.faBook} />}
          styleType={ButtonStyle.Dark}
          size={ButtonSize.Medium}
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
            <Input id="barcode" placeholder="5643242134323099" />
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
            <Input id="articleNumber" placeholder="ДжЖСинМом0823" />
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
            <Input id="size" placeholder="44" />
          </span>
        </Card>
        <Card className={`${styles.cardCategory}`} mainLayout={true}>
          <label className={styles.categoryLabel} htmlFor="size">
            Категория
          </label>
          <span>
            <SelectInput defaultValue="Джинсы" />
          </span>
        </Card>
      </div>
      <div className={styles.header}>
        <Button styleType={ButtonStyle.Primary} size={ButtonSize.MediumLarge}>
          Сформировать
        </Button>
        <Button
          leftIcon={<CgExport className={styles.exportIcon} />}
          styleType={ButtonStyle.Dark}
          size={ButtonSize.MediumLarge}
          onClick={exportToCSV}
        >
          Экспорт
        </Button>
      </div>
      <div className={`${styles.header} ${styles.controlForm}`}>
        <div className={styles.options}>
          <Button
            leftIcon={<RiFileUploadFill className={styles.uploadIcons} />}
            styleType={ButtonStyle.Ghost}
            size={ButtonSize.Medium}
            onClick={loadDataFromJSON}
          >
            Загрузить данные из csv
          </Button>
          <Button
            leftIcon={<MdAssignmentAdd className={styles.uploadIcons} />}
            styleType={ButtonStyle.Ghost}
            size={ButtonSize.Medium}
          >
            Изменить данные
          </Button>
        </div>
        <div className={styles.options}>
          <Button
            rightIcon={<RxCross2 className={styles.uploadIcons} />}
            styleType={ButtonStyle.Ghost}
            size={ButtonSize.Medium}
          >
            Изменить данные
          </Button>
        </div>
      </div>
    </header>
  );
}
