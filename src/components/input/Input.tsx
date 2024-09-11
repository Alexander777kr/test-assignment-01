import { useRef, useEffect } from 'react';
import styles from './Input.module.css';

interface InputProps {
  placeholder: string;
  value?: string;
  onChange?: () => void;
  id?: string;
}

export default function Input({
  placeholder = 'Введите текст',
  value,
  onChange,
  id,
}: InputProps) {
  const inputRef = useRef<HTMLInputElement>(
    null
  ) as React.MutableRefObject<HTMLInputElement>;

  useEffect(() => {
    const el = inputRef.current;
    if (el !== null) {
      inputRef.current.setAttribute(
        'size',
        String(el.getAttribute('placeholder')?.length)
      );
    }
  }, []);

  return (
    <input
      ref={inputRef}
      type="text"
      className={styles.inputRounded}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      id={id}
    />
  );
}
