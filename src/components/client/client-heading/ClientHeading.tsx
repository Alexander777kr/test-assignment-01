import Card from '../../card/Card';
import { CgProfile } from 'react-icons/cg';
import styles from './ClientHeading.module.css';
import Heading from '../../heading/Heading';
import Button from '../../button/Button';
import { ButtonStyle, ButtonSize } from '../../button/types';
import { NumberEnum } from '../../../utils/types';
import { FaCalendarAlt } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';

export default function ClientHeading() {
  return (
    <div>
      <Card mainLayout={true} className={styles.clientHeading}>
        <div className={styles.profileInfo}>
          <div>
            <CgProfile className={styles.profileAvatar} />
          </div>
          {'\u00A0'}
          <div>
            <Heading
              className={styles.headingClientName}
              level={NumberEnum.Three}
            >
              Иванов И. И.
            </Heading>
          </div>
          <div className={styles.btnMargin}>
            <Button size={ButtonSize.Large} styleType={ButtonStyle.Info}>
              <FaCalendarAlt className={styles.calendar} />
              <span>Тариф до 15.04.2024</span>
            </Button>
          </div>
        </div>
        <div className={styles.logout}>
          <Button size={ButtonSize.Medium} styleType={ButtonStyle.Outline}>
            <span>Выйти</span>
          </Button>
          <Button
            rightIcon={<FaArrowRight className={styles.rightArrow} />}
            size={ButtonSize.Medium}
            styleType={ButtonStyle.Warning}
          >
            <span>О нас</span>
          </Button>
        </div>
      </Card>
    </div>
  );
}
