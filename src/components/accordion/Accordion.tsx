import React, { useState } from 'react';
import styles from './Accordion.module.css';

interface AccordionProps {
  icon: React.ReactNode;
  title: string;
  content: React.ReactNode;
}

const Accordion = ({ icon, title, content }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.accordion}>
      <div className={styles.accordionHeader} onClick={toggleAccordion}>
        <span className={styles.accordionIcon}>{icon}</span>
        <span className={styles.accordionTitle}>{title}</span>
        <button className={styles.accordionToggle}>{isOpen ? '▲' : '▼'}</button>
      </div>
      {isOpen && <div className={styles.accordionContent}>{content}</div>}
    </div>
  );
};

export default Accordion;
