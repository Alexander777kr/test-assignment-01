import { useState, ReactNode } from 'react';
import styles from './Accordion.module.css';

interface AccordionProps {
  icon: ReactNode;
  title: string;
  content: ReactNode;
}

const Accordion = ({ icon, title, content }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.accordion}>
      <div className={styles.header} onClick={toggleAccordion}>
        <span className={styles.icon}>{icon}</span>
        <span className={styles.title}>{title}</span>
        <button className={styles.toggle}>{isOpen ? '▲' : '▼'}</button>
      </div>
      {isOpen && <div className={styles.content}>{content}</div>}
    </div>
  );
};

export default Accordion;
