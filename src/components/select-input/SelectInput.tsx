import styles from './SelectInput.module.css';

interface SelectInputProps {
  defaultValue?: string;
  value?: string;
  onChange?: () => void;
}

export default function SelectInput({
  defaultValue,
  value,
  onChange,
}: SelectInputProps) {
  return (
    <select
      className={styles.select}
      defaultValue={defaultValue}
      value={value}
      onChange={onChange}
    >
      <option value="someOption">Джинсы</option>
      <option value="otherOption">Кардиган</option>
      <option value="otherOption">Брюки</option>
      <option value="otherOption">Брюки1</option>
    </select>
  );
}
