import styles from './Button.module.css';
import { ButtonProps } from './types';

export default function StyledButton({
  onClick,
  styleType,
  size,
  className,
  children,
  leftIcon,
  rightIcon,
  disabled,
  title,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`${className} ${styles.btn} ${styles[styleType]} ${styles[size]}`}
      disabled={disabled}
      title={title}
    >
      {leftIcon} {children}
      {rightIcon}{' '}
    </button>
  );
}
