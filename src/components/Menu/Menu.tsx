import { Link, useLocation } from 'react-router-dom';
import css from './Menu.module.css';

interface MenuProps {
  pageName: string;
  pageLink: string;
}

export const menu: MenuProps[] = [
  { pageName: 'Studio', pageLink: '/' },
  { pageName: 'Portfolio', pageLink: '/portfolio' },
  {
    pageName: 'Learn More',
    pageLink: '/learn-more',
  },
  { pageName: 'Contact Us', pageLink: '/contact-us' },
];

export const Menu = () => {
  const location = useLocation();

  return (
    <ul className={css.navList}>
      {menu.map(({ pageName, pageLink }) => (
        <li key={pageLink} className={css.navItem}>
          <Link
            to={pageLink}
            className={`${css.navLink} ${location.pathname.startsWith(pageLink) ? css.homeUnderline : ''}`}
          >
            {pageName}
          </Link>
        </li>
      ))}
    </ul>
  );
};
