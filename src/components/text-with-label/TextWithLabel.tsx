import styles from './TextWithLabel.module.css';

interface TextWithLabelProps {
  label: string;
  text: string;
}

export default function TextWithLabel({ label, text }: TextWithLabelProps) {
  return (
    <div>
      <div className={styles.label}>{label}:</div>
      <div className={styles.text}>{text}</div>
    </div>
  );
}
