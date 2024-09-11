import LeftColumn from './left-column/LeftColumn';
import RightColumn from './right-column/RightColumn';
import styles from './MainPage.module.css';

export default function MainPage() {
  return (
    <div className={styles.container}>
      <LeftColumn />
      <RightColumn />
    </div>
  );
}
