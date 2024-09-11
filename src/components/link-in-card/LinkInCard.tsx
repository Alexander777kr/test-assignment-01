import { Link } from 'react-router-dom';
import styles from './LinkInCard.module.css';

interface LinkInCardProps {
  id: number;
  path: string;
  name: string;
}

export default function LinkInCardComponent({
  id,
  path,
  name,
}: LinkInCardProps) {
  return (
    <div
      className={
        id < 4
          ? `${styles.linkContainer} ${styles.borderBottom}`
          : styles.linkContainer
      }
    >
      <Link className={styles.link} to={path}>
        {name}
      </Link>
    </div>
  );
}
