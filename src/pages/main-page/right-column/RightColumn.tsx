import ClientHeading from '../../../components/client/client-heading/ClientHeading';
import Table from '../../../components/table/Table';
import styles from './RightColumn.module.css';

export default function RightColumn() {
  return (
    <div className={styles.rightColumn}>
      <ClientHeading />
      <Table />
    </div>
  );
}
