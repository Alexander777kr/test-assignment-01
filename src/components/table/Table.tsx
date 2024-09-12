import TableBody from './table-body/TableBody';
import TableHeading from './table-heading/TableHeading';
import styles from './Table.module.css';
import { useState } from 'react';
import { saveAs } from 'file-saver';
import Papa from 'papaparse';
import { type Column } from '../../utils/types';
import SpinnerLayout from '../spinner-layout/SpinnerLayout';

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
    } catch (error) {
      console.error('Failed to load data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Function to export data to CSV
  const exportToCSV = () => {
    const csv = Papa.unparse(filteredDataSource);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    saveAs(blob, 'data.csv');
  };

  return (
    <div className={styles.table}>
      <TableHeading
        loadDataFromJSON={loadDataFromJSON}
        exportToCSV={exportToCSV}
        setFilterFields={setFilterFields}
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
