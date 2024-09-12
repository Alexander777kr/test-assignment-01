import { useState, ReactNode, HTMLProps } from 'react';
import Heading from '../heading/Heading';
import Button from '../button/Button';
import { CiCircleRemove } from 'react-icons/ci';
import styles from './Card.module.css';
import { NumberOfHeadings } from '../../utils/types';
import toast from 'react-hot-toast';

interface CardProps extends HTMLProps<HTMLElement> {
  level?: NumberOfHeadings;
  classNameHeading?: string;
  headingText?: ReactNode | string;
  children: ReactNode;
  badge?: boolean;
  mainLayout?: boolean;
  className?: string | undefined;
}

export default function Card({
  level,
  classNameHeading,
  headingText,
  children,
  badge,
  mainLayout,
  className,
}: CardProps) {
  const [showMenu, setShowMenu] = useState(true);

  function handleClick() {
    setShowMenu((prev) => {
      const result = !prev;
      if (result === true) {
        toast.success('Меню ФИН Контроля открыто!');
      } else {
        toast.success('Меню ФИН Контроля скрыто!');
      }
      return result;
    });
  }
  return (
    <div
      className={`
        ${styles.card}
        ${mainLayout ? styles.cardMainLayoutContainer : styles.cardContainer}
        ${className}
      `}
    >
      {Boolean(headingText) && (
        <Heading
          level={level}
          className={`${classNameHeading} ${styles.classNameHeadingAlignment}`}
        >
          {headingText}
          {badge && (
            <Button
              styleType={'badge'}
              size={'small'}
              rightIcon={<CiCircleRemove />}
              onClick={handleClick}
            >
              Меню
            </Button>
          )}
        </Heading>
      )}
      {(badge && showMenu && children) || (!badge && children)}
    </div>
  );
}
