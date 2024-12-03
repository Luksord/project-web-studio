import css from './Header.module.css';

export const Header = () => {
  return (
    <header className={css.header}>
      <div className='header-wrap container'>
        <nav className='menu'>
          <a href='./index.html' className='link logo'>
            Web<span className='logo-span'>Studio</span>
          </a>
          <ul className='list list-header'>
            <li className='item-menu'>
              <a href='./index.html' className='link menu-link studio-underline'>
                Studio
              </a>
            </li>
            <li className='item-menu'>
              <a href='./portfolio.html' className='link menu-link'>
                Portfolio
              </a>
            </li>
            <li className='item-menu'>
              <a href='' className='link menu-link'>
                Contacts
              </a>
            </li>
          </ul>
        </nav>
        <address className='address'>
          <ul className='list address-list'>
            <li className='item-address'>
              <a href='mailto:info@devstudio.com' className='link address-link'>
                info@devstudio.com
              </a>
            </li>
            <li className='item-address'>
              <a href='tel:+110001111111' className='link address-link'>
                +11 (000) 111-11-11
              </a>
            </li>
          </ul>
        </address>
        <button className='menu-toggle js-open-menu' aria-expanded='false' aria-controls='mobile-menu'>
          <svg width='32' height='22'>
            <use href='./images/icons.svg#menu-toggle' />
          </svg>
        </button>
      </div>
    </header>
  );
};
