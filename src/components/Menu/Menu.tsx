import { Link, useLocation } from 'react-router-dom';
import css from './Menu.module.css';

interface menuProps {
  pageName: string;
  pageLink: string;
}

export const menu: menuProps[] = [
  { pageName: 'Studio', pageLink: '/' },
  { pageName: 'Portfolio', pageLink: '/portfolio' },
  { pageName: 'Contacts', pageLink: '/contacts' },
];

export const Menu = () => {
  const location = useLocation();

  return (
    <ul className={css.navList}>
      {menu.map(({ pageName, pageLink }) => (
        <li key={pageLink} className={css.navItem}>
          <Link
            to={pageLink}
            className={`${css.navLink} ${location.pathname.startsWith(pageLink) ? css.underline : ''}`}
          >
            {pageName}
          </Link>
        </li>
      ))}
    </ul>
  );
};
