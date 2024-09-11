import TableBody from './table-body/TableBody';
import TableHeading from './table-heading/TableHeading';
import styles from './Table.module.css';

export default function Table() {
  return (
    <div className={styles.table}>
      <TableHeading />
      <TableBody />
    </div>
  );
}
