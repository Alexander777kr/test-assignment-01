import LinkInCardComponent from '../link-in-card/LinkInCard';
import styles from './LinksInCard.module.css';

const linksData = [
  {
    id: 1,
    path: '/legal/agreement',
    name: 'пользовательское соглашение',
  },
  {
    id: 2,
    path: '/legal/privacy-policy',
    name: 'политика конфиденциальности',
  },
  {
    id: 3,
    path: '/legal',
    name: 'юридическая информация',
  },
  {
    id: 4,
    path: '/offer',
    name: 'публичная оферта',
  },
];

export default function LinksInCard() {
  return (
    <div className={styles.links}>
      {linksData.map((link) => (
        <LinkInCardComponent
          key={link.id}
          id={link.id}
          path={link.path}
          name={`${link.name[0].toUpperCase()}${link.name.slice(1)}`}
        />
      ))}
    </div>
  );
}
