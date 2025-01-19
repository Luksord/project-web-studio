import css from './Footer.module.css';
import InstagramIcon from '../../assets/images/icons.svg#icon-social-instagram.svg';
import TwitterIcon from '../../assets/images/icons.svg#icon-social-twitter.svg';
import FacebookIcon from '../../assets/images/icons.svg#icon-social-facebook.svg';
import LinkedinIcon from '../../assets/images/icons.svg#icon-social-linkedin.svg';
import SubscribeIcon from '../../assets/images/icons.svg#icon-subscribe.svg';

const socialLinks = [
  { href: 'https://instagram.com', icon: InstagramIcon, alt: 'Instagram' },
  { href: 'https://twitter.com', icon: TwitterIcon, alt: 'Twitter' },
  { href: 'https://facebook.com', icon: FacebookIcon, alt: 'Facebook' },
  { href: 'https://linkedin.com', icon: LinkedinIcon, alt: 'LinkedIn' },
];

export const Footer = () => {
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
              {socialLinks.map(({ href, icon, alt }, index) => (
                <li key={index} className={css.linkContainer}>
                  <a href={href} className={css.socialLink} aria-label={alt}>
                    <svg className={css.socialIcon} width='24' height='24'>
                      <use href={icon}></use>
                    </svg>
                  </a>
                </li>
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
              <svg className={css.subscribeIcon} width='24' height='24'>
                <use href={SubscribeIcon}></use>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};
