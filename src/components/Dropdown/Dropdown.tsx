import { useState } from 'react';
import { Link } from 'react-router-dom';
import { serviceDropdown } from '@components/NavItems';
import css from './Dropdown.module.css';

export const Dropdown = () => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <>
      <ul className={dropdown ? `${css.submenu} clicked` : css.submenu} onClick={() => setDropdown(!dropdown)}>
        {serviceDropdown.map(({ id, title, path }) => {
          return (
            <li key={id} className={css.submenuItem}>
              <Link to={path} onClick={() => setDropdown(false)}>
                {title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};
