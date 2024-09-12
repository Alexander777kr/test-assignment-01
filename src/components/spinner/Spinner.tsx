import styles from './Spinner.module.css';

const numberArray = Array.from({ length: 9 }, (_, index) => index + 1);

export default function Spinner() {
  return (
    <div className={styles.ldsGrid}>
      {numberArray.map((num) => (
        <div key={num}></div>
      ))}
    </div>
  );
}
