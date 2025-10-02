import { Dispatch, SetStateAction } from 'react';
import { Link, useLocation } from 'react-router-dom';
import MenuToggle from '../../assets/icons/menu-toggle.svg?react';
import { menu } from '../Menu/Menu';
import { useTheme } from '../../contexts/ThemeContext';
import { AiFillSun, AiFillMoon } from 'react-icons/ai';
import css from './Header.module.css';

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
        <button type='button' className={css.menuToggle} onClick={() => setIsMobileMenuOpen(true)}>
          <MenuToggle className={css.menuIcon} />
        </button>
      </div>
    </header>
  );
};
