import { Dispatch, SetStateAction } from 'react';
import { Link, useLocation } from 'react-router-dom';
import MenuToggle from '../../assets/images/icons.svg#menu-toggle.svg';
import { menu } from '../Menu/Menu';
import css from './Header.module.css';
import { useTheme } from '../../contexts/ThemeContext';
import { AiFillSun, AiFillMoon } from 'react-icons/ai';

interface HeaderProps {
  setIsMobileMenuOpen: Dispatch<SetStateAction<boolean>>;
}

export const Header = ({ setIsMobileMenuOpen }: HeaderProps) => {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  return (
    <header className={css.header}>
      <div className={css.container}>
        <nav className={css.menu}>
          <Link to='/' className={css.logo}>
            Web<span className={css.logoSpan}>Studio</span>
          </Link>
          <ul className={css.navList}>
            {menu.map(({ pageName, pageLink }, index) => (
              <li key={index} className={css.navItem}>
                <Link
                  to={pageLink}
                  className={`${css.navLink} ${location.pathname.startsWith(pageLink) ? css.underline : ''}`}
                >
                  {pageName}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className={css.theme}>
          <button onClick={toggleTheme}>{theme === 'dark' ? <AiFillSun size={24} /> : <AiFillMoon size={24} />}</button>
        </div>
        {/* <address className={css.address}>
          <ul className={css.addressList}>
            <li className={css.addressItem}>
              <a href='mailto:info@devstudio.com' className={css.addressLink}>
                info@devstudio.com
              </a>
            </li>
            <li className={css.addressItem}>
              <a href='tel:+110001111111' className={css.addressLink}>
                +11 (000) 111-11-11
              </a>
            </li>
          </ul>
        </address> */}
        <button
          className={css.menuToggle}
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          aria-expanded='false'
          aria-controls='mobile-menu'
        >
          <svg className={css.menuIcon} width='32' height='22'>
            <use href={MenuToggle} />
          </svg>
        </button>
      </div>
    </header>
  );
};
