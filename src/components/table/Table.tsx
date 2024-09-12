import TableBody from './table-body/TableBody';
import TableHeading from './table-heading/TableHeading';
import styles from './Table.module.css';
import { useState } from 'react';
import { saveAs } from 'file-saver';
import Papa from 'papaparse';

interface Column {
  key: string;
  barcode: string;
  item: string;
  supplierCode: string;
  size: string;
  available: number;
  inTransit: number;
  total: number;
}

export default function Table() {
  const [dataSource, setDataSource] = useState<Column[]>([]);
  console.log('dataSource', dataSource);
  // Function to load data from data.json
  const loadDataFromJSON = async () => {
    try {
      const response = await fetch('/data.json');
      const data = await response.json();
      setDataSource(data as Column[]);
    } catch (error) {
      console.error('Failed to load data:', error);
    }
  };

  // Function to export data to CSV
  const exportToCSV = () => {
    const csv = Papa.unparse(dataSource);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    saveAs(blob, 'data.csv');
  };

  return (
    <div className={styles.table}>
      <TableHeading
        loadDataFromJSON={loadDataFromJSON}
        exportToCSV={exportToCSV}
      />
      <TableBody dataSource={dataSource} setDataSource={setDataSource} />
    </div>
  );
}
