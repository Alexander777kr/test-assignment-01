import {ReactNode} from 'react';

export interface ButtonProps {
  onClick?: () => void;
  styleType: ButtonStyle;
  size: ButtonSize;
  className?: string;
  children: ReactNode;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

export type ButtonStyle = 'primary' | 'warning' | 
'outline' | 'ghost' | 'dark' | 'info' | 'badge';

export type ButtonSize = 'extraLarge' | 'large' | 'mediumLarge' | 'medium' | 'small';