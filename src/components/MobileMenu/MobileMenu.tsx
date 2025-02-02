// import { Dispatch, SetStateAction } from 'react';
// import InstagramIcon from '../../assets/images/icons.svg#icon-social-instagram.svg';
// import TwitterIcon from '../../assets/images/icons.svg#icon-social-twitter.svg';
// import FacebookIcon from '../../assets/images/icons.svg#icon-social-facebook.svg';
// import LinkedinIcon from '../../assets/images/icons.svg#icon-social-linkedin.svg';
// import CloseIcon from '../../assets/images/icons.svg#icon-close.svg';
// import { SocialLinkProps } from '../HomeSection4/HomeSection4';
// import css from './MobileMenu.module.css';

// interface MobileMenuProps {
//   setIsMobileMenuOpen: Dispatch<SetStateAction<boolean>>;
// }

// const socialLinks: SocialLinkProps[] = [
//   { href: 'https://instagram.com', icon: InstagramIcon, alt: 'Instagram' },
//   { href: 'https://twitter.com', icon: TwitterIcon, alt: 'Twitter' },
//   { href: 'https://facebook.com', icon: FacebookIcon, alt: 'Facebook' },
//   { href: 'https://linkedin.com', icon: LinkedinIcon, alt: 'LinkedIn' },
// ];

// const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, alt }) => (
//   <li className={css.linkContainer}>
//     <a href={href} className={css.socialLink} aria-label={alt}>
//       <svg className={css.socialIcon}>
//         <use href={icon}></use>
//       </svg>
//     </a>
//   </li>
// );

// export const MobileMenu = ({ setIsMobileMenuOpen }: MobileMenuProps) => {
//   return (
//     <div className={css.menuContainer}>
//       <div>
//         <button
//           type='button'
//           className={`${css.menuToggle} ${css.modalCloseBtn}`}
//           onClick={() => setIsMobileMenuOpen(false)}
//         >
//           <svg className={css.closeIcon} width='8' height='8'>
//             <use href={CloseIcon} />
//           </svg>
//         </button>
//         <nav>
//           <ul className={css.mobileMenu}>
//             <li>
//               <a href='/' className={css.navLink}>
//                 Studio
//               </a>
//             </li>
//             <li>
//               <a href='/portfolio' className={css.navLink}>
//                 Portfolio
//               </a>
//             </li>
//             <li>
//               <a href='/contacts' className={css.navLink}>
//                 Contacts
//               </a>
//             </li>
//           </ul>
//         </nav>
//         <address>
//           <ul className='mobileAddressList'>
//             <li>
//               <a href='tel:+110001111111' className='link'>
//                 +11 (000) 111-11-11
//               </a>
//             </li>
//             <li>
//               <a href='mailto:info@devstudio.com' className='link'>
//                 info@devstudio.com
//               </a>
//             </li>
//           </ul>
//         </address>
//         <div>
//           <ul className={css.moblieSocialLinks}>
//             {socialLinks.map((link, index) => (
//               <SocialLink key={index} {...link} />
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

import { Dispatch, SetStateAction } from 'react';
import InstagramIcon from '../../assets/images/icons.svg#icon-social-instagram.svg';
import TwitterIcon from '../../assets/images/icons.svg#icon-social-twitter.svg';
import FacebookIcon from '../../assets/images/icons.svg#icon-social-facebook.svg';
import LinkedinIcon from '../../assets/images/icons.svg#icon-social-linkedin.svg';
import CloseIcon from '../../assets/images/icons.svg#icon-close.svg';
import { SocialLinkProps } from '../HomeSection4/HomeSection4';
import css from './MobileMenu.module.css';

interface MobileMenuProps {
  setIsMobileMenuOpen: Dispatch<SetStateAction<boolean>>;
}

export const MobileMenu = ({ setIsMobileMenuOpen }: MobileMenuProps) => {
  return (
    <div className='menu-container'>
      <div>
        <button type='button' className='menu-toggle modal-close-button' onClick={() => setIsMobileMenuOpen(false)}>
          <svg className='close-icon' width='8' height='8'>
            <use href='/images/icons.svg#icon-close' />
          </svg>
        </button>
        <nav>
          <ul className='mobile-menu'>
            <li>
              <a href='/' className='link'>
                Studio
              </a>
            </li>
            <li>
              <a href='/portfolio' className='link'>
                Portfolio
              </a>
            </li>
            <li>
              <a href='/contacts' className='link'>
                Contacts
              </a>
            </li>
          </ul>
        </nav>
        <address>
          <ul className='mobile-address'>
            <li>
              <a href='tel:+110001111111' className='link'>
                +11 (000) 111-11-11
              </a>
            </li>
            <li>
              <a href='mailto:info@devstudio.com' className='link'>
                info@devstudio.com
              </a>
            </li>
          </ul>
        </address>
      </div>
    </div>
  );
};
