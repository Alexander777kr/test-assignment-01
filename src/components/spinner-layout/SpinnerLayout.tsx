import Spinner from '../spinner/Spinner';
import styles from './SpinnerLayout.module.css';

export default function SpinnerLayout() {
  return (
    <div className={styles.spinnerLayout}>
      <Spinner />
    </div>
  );
}
