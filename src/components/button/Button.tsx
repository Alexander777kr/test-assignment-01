import styles from './Button.module.css';
import { ButtonStyle, ButtonSize } from './types';

interface ButtonProps {
  onClick?: () => void;
  styleType: ButtonStyle;
  size: ButtonSize;
  className?: string;
  children: React.ReactNode;
  leftIcon?: React.ReactElement;
  rightIcon?: React.ReactElement;
}

export default function StyledButton({
  onClick,
  styleType,
  size,
  className,
  children,
  leftIcon,
  rightIcon,
}: ButtonProps) {
  const getButtonClass = () => {
    switch (styleType) {
      case ButtonStyle.Primary:
        return styles.primary;
      case ButtonStyle.Warning:
        return styles.warning;
      case ButtonStyle.Outline:
        return styles.outline;
      case ButtonStyle.Ghost:
        return styles.ghost;
      case ButtonStyle.Dark:
        return styles.dark;
      case ButtonStyle.Info:
        return styles.info;
      case ButtonStyle.Badge:
        return styles.badge;
      default:
        return styles.primary;
    }
  };

  const getButtonSizeClass = () => {
    switch (size) {
      case ButtonSize.ExtraLarge:
        return styles.extraLarge;
      case ButtonSize.Large:
        return styles.btnLarge;
      case ButtonSize.MediumLarge:
        return styles.btnMediumLarge;
      case ButtonSize.Medium:
        return styles.btnMedium;
      case ButtonSize.Small:
        return styles.btnSmall;
      default:
        return styles.btnMedium;
    }
  };

  return (
    <button
      onClick={onClick}
      className={`${className} ${
        styles.btn
      } ${getButtonClass()} ${getButtonSizeClass()}`}
    >
      {leftIcon} {children}
      {rightIcon}{' '}
    </button>
  );
}
