import { Dispatch, SetStateAction } from 'react';
import { Link } from 'react-router-dom';
import InstagramIcon from '../../assets/icons/icon-social-instagram.svg?react';
import TwitterIcon from '../../assets/icons/icon-social-twitter.svg?react';
import FacebookIcon from '../../assets/icons/icon-social-facebook.svg?react';
import LinkedinIcon from '../../assets/icons/icon-social-linkedin.svg?react';
import CloseIcon from '../../assets/icons/icon-close.svg?react';
import { SocialLinkProps } from '../HomeSection4/HomeSection4';
import { menu } from '../Menu/Menu';
import css from './MobileMenu.module.css';

interface MobileMenuProps {
  setIsMobileMenuOpen: Dispatch<SetStateAction<boolean>>;
}

const socialLinks: SocialLinkProps[] = [
  { href: 'https://instagram.com/webstudio', icon: InstagramIcon, alt: 'Instagram' },
  { href: 'https://twitter.com/webstudio', icon: TwitterIcon, alt: 'Twitter' },
  { href: 'https://facebook.com/webstudio', icon: FacebookIcon, alt: 'Facebook' },
  { href: 'https://linkedin.com/in/webstudio', icon: LinkedinIcon, alt: 'LinkedIn' },
];

const SocialLink = ({ href, icon: Icon, alt }: SocialLinkProps) => (
  <li className={css.linkContainer}>
    <a href={href} className={css.socialLink} aria-label={alt}>
      <Icon className={css.socialIcon} />
    </a>
  </li>
);

export const MobileMenu = ({ setIsMobileMenuOpen }: MobileMenuProps) => {
  return (
    <div className={`${css.menuContainer} ${css['isOpen']}`}>
      <div>
        <button
          type='button'
          className={`${css.menuToggle} ${css.modalCloseBtn}`}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <CloseIcon className={css.closeIcon} />
        </button>
        <nav>
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
        <address>
          <ul className={css.mobileAddressList}>
            <li>
              <a href='tel:+110001111111' className={css.mobileAddressTel}>
                +11 (000) 111-11-11
              </a>
            </li>
            <li>
              <a href='mailto:info@devstudio.com' className={css.mobileAddressMail}>
                info@devstudio.com
              </a>
            </li>
          </ul>
        </address>
        <div>
          <ul className={css.mobileSocialLinks}>
            {socialLinks.map((link, index) => (
              <SocialLink key={index} {...link} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
