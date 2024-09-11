import Accordion from '../../../components/accordion/Accordion';
import Card from '../../../components/card/Card';
import { IoMdSettings } from 'react-icons/io';
import { TiInputChecked } from 'react-icons/ti';
import { TbReportSearch } from 'react-icons/tb';
import { FaBook } from 'react-icons/fa';
import styles from './LeftColumn.module.css';
import TextWithLabel from '../../../components/text-with-label/TextWithLabel';
import LinksInCard from '../../../components/links-in-card/LinksInCard';
import { NumberEnum } from '../../../utils/types';

const accordionData = [
  {
    id: 1,
    icon: <IoMdSettings />,
    title: 'Настройки',
    content: 'Настройки',
  },
  {
    id: 2,
    icon: <TiInputChecked />,
    title: 'Внесение данных',
    content: 'Внесение данных',
  },
  {
    id: 3,
    icon: <TbReportSearch />,
    title: 'Отчеты',
    content: 'Отчеты',
  },
  {
    id: 4,
    icon: <FaBook />,
    title: 'База знаний',
    content: 'База знаний',
  },
];

export default function LeftColumn() {
  return (
    <div className={styles.leftColumn}>
      <Card
        level={NumberEnum.One}
        headingText={
          <div>
            <span className={styles.highlight}>ФИН</span> Контроль
          </div>
        }
        classNameHeading={styles.headingOne}
        badge={true}
      >
        <div className={styles.accordions}>
          {accordionData.map((item) => (
            <Accordion
              key={item.id}
              icon={item.icon}
              title={item.title}
              content={item.content}
            />
          ))}
        </div>
      </Card>
      <Card
        level={NumberEnum.Two}
        headingText="Техническая поддержка"
        classNameHeading={styles.headingTwo}
      >
        <>
          <div className={styles.gridContainer}>
            <div className={styles.gridItem}>
              <TextWithLabel label="Номер поддержки" text="8 (999) 999 99 99" />
            </div>
            <div className={styles.gridItem}>
              <TextWithLabel label="Почта поддержки" text="pf1@werthesest.ru" />
            </div>
            <div className={`${styles.gridItem} ${styles.fullWidth}`}>
              <TextWithLabel
                label="Часы работы"
                text="Пн - Пт  с 9:00 до 19:00 мск"
              />
            </div>
          </div>
          <LinksInCard />
        </>
      </Card>
    </div>
  );
}
