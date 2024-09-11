import React from 'react';
import { useState } from 'react';
import Heading from '../heading/Heading';
import Button from '../button/Button';
import { ButtonStyle, ButtonSize } from '../button/types';
import { CiCircleRemove } from 'react-icons/ci';
import styles from './Card.module.css';
import { NumberEnum } from '../../utils/types';

interface CardProps extends React.HTMLProps<HTMLElement> {
  level?: NumberEnum;
  classNameHeading?: string;
  headingText?: React.ReactElement | string;
  children: React.ReactNode;
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
    setShowMenu((prev) => !prev);
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
              styleType={ButtonStyle.Badge}
              size={ButtonSize.Small}
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
