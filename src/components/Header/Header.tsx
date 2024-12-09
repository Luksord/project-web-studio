import css from './Header.module.css';
import MenuToggle from '../../assets/images/icons.svg#menu-toggle.svg';

export const Header = () => {
  return (
    <header className={css.header}>
      <div className={`${css.container} ${css.headerWrap}`}>
        <nav className={css.menu}>
          <a href='./index.html' className={`${css.link} ${css.logo}`}>
            Web<span className={css.logoSpan}>Studio</span>
          </a>
          <ul className={`${css.list} ${css.listHeader}`}>
            <li className={css.itemMenu}>
              <a href='./index.html' className={`${css.link} ${css.menuLink} ${css.studioUnderline}`}>
                Studio
              </a>
            </li>
            <li className={css.itemMenu}>
              <a href='./portfolio.html' className={`${css.link} ${css.menuLink}`}>
                Portfolio
              </a>
            </li>
            <li className={css.itemMenu}>
              <a href='' className={`${css.link} ${css.menuLink}`}>
                Contacts
              </a>
            </li>
          </ul>
        </nav>
        <address className={css.address}>
          <ul className={`${css.list} ${css.addressList}`}>
            <li className={css.itemAddress}>
              <a href='mailto:info@devstudio.com' className={`${css.link} ${css.addressLink}`}>
                info@devstudio.com
              </a>
            </li>
            <li className={css.itemAddress}>
              <a href='tel:+110001111111' className={`${css.link} ${css.addressLink}`}>
                +11 (000) 111-11-11
              </a>
            </li>
          </ul>
        </address>
        <button className={`${css.menuToggle} ${css.jsOpenMenu}`} aria-expanded='false' aria-controls='mobile-menu'>
          <svg width='32' height='22'>
            <use href={MenuToggle} />
          </svg>
        </button>
      </div>
    </header>
  );
};
