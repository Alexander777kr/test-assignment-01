import { ChangeEvent } from 'react';
import styles from './SelectInput.module.css';

interface SelectInputProps {
  defaultValue?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
  id?: string;
}

export const selectData = [
  { id: 1, value: '', label: 'Все категории' },
  { id: 2, value: 'Одежда', label: 'Одежда' },
  { id: 3, value: 'Обувь', label: 'Обувь' },
  { id: 4, value: 'Аксессуары', label: 'Аксессуары' },
];

export default function SelectInput({
  defaultValue,
  value,
  onChange,
  id,
}: SelectInputProps) {
  return (
    <select
      className={styles.select}
      defaultValue={defaultValue}
      value={value}
      onChange={onChange}
      id={id}
    >
      {selectData.map((item) => (
        <option key={item.id} value={item.value}>
          {item.label}
        </option>
      ))}
    </select>
  );
}
