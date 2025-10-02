import css from './Footer.module.css';
import InstagramIcon from '../../assets/icons/icon-social-instagram.svg?react';
import TwitterIcon from '../../assets/icons/icon-social-twitter.svg?react';
import FacebookIcon from '../../assets/icons/icon-social-facebook.svg?react';
import LinkedinIcon from '../../assets/icons/icon-social-linkedin.svg?react';
import SubscribeIcon from '../../assets/icons/icon-subscribe.svg?react';
import { SocialLinkProps } from '../HomeSection4/HomeSection4';

const socialLinks: SocialLinkProps[] = [
  { href: 'https://instagram.com', icon: InstagramIcon, alt: 'Instagram' },
  { href: 'https://twitter.com', icon: TwitterIcon, alt: 'Twitter' },
  { href: 'https://facebook.com', icon: FacebookIcon, alt: 'Facebook' },
  { href: 'https://linkedin.com', icon: LinkedinIcon, alt: 'LinkedIn' },
];

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon: Icon, alt }) => (
  <li className={css.linkContainer}>
    <a href={href} className={css.socialLink} aria-label={alt}>
      <Icon className={css.socialIcon} />
    </a>
  </li>
);

export const Footer: React.FC = () => {
  return (
    <footer className={css.footer}>
      <div className={css.container}>
        <div className={css.flex}>
          <div className={css.logoContainer}>
            <a href='./index.html' className={css.logo}>
              Web<span className={css.logoSpan}>Studio</span>
            </a>
            <p className={css.text}>
              Increase the flow of customers and sales for your business with digital marketing & growth solutions.
            </p>
          </div>
          <div className={css.mediaContainer}>
            <p className={css.title}>Social media</p>
            <ul className={css.socialLinks}>
              {socialLinks.map((link, index) => (
                <SocialLink key={index} {...link} />
              ))}
            </ul>
          </div>
        </div>
        <div className={css.subscribeContainer}>
          <p className={css.title}>Subscribe</p>
          <form className={css.form}>
            <label>
              <input className={css.input} name='user-email' type='email' placeholder='E-mail' required />
            </label>
            <button className={css.subscribeBtn} type='submit'>
              Subscribe
              <SubscribeIcon className={css.subscribeIcon} />
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};
