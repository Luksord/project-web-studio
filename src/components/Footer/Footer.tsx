import css from './Footer.module.css';
import InstagramIcon from '../../assets/images/icons.svg#icon-social-instagram.svg';
import TwitterIcon from '../../assets/images/icons.svg#icon-social-twitter.svg';
import FacebookIcon from '../../assets/images/icons.svg#icon-social-facebook.svg';
import LinkedinIcon from '../../assets/images/icons.svg#icon-social-linkedin.svg';
import SubscribeIcon from '../../assets/images/icons.svg#icon-subscribe.svg';

export const Footer = () => {
  return (
    <footer className={css.footer}>
      <div className={`${css.container} ${css.footerFlex}`}>
        <div className={css.footerFirstSubcontainer}>
          <a href='./index.html' className={`${css.logo} ${css.link} ${css.logoContainer}`}>
            Web<span className={css.logoFooterSpan}>Studio</span>
          </a>
          <p className={css.footerParagraph}>
            Increase the flow of customers and sales for your business with digital marketing & growth solutions.
          </p>
        </div>

        <div className={css.footerSecondSubcontainer}>
          <p className={css.socialMediaParagraph}>Social media</p>
          <ul className={`${css.list} ${css.footerSocialList}`}>
            <li className={`${css.link} ${css.socialMediaContainer}`}>
              <a href='' className={css.footerSocialLink}>
                <svg className={css.socialIcon} width='24' height='24'>
                  <use href={InstagramIcon}></use>
                </svg>
              </a>
            </li>
            <li className={`${css.link} ${css.socialMediaContainer}`}>
              <a href='' className={css.footerSocialLink}>
                <svg className={css.socialIcon} width='24' height='24'>
                  <use href={TwitterIcon}></use>
                </svg>
              </a>
            </li>
            <li className={`${css.link} ${css.socialMediaContainer}`}>
              <a href='' className={css.footerSocialLink}>
                <svg className={css.socialIcon} width='24' height='24'>
                  <use href={FacebookIcon}></use>
                </svg>
              </a>
            </li>
            <li className={`${css.link} ${css.socialMediaContainer}`}>
              <a href='' className={css.footerSocialLink}>
                <svg className={css.socialIcon} width='24' height='24'>
                  <use href={LinkedinIcon}></use>
                </svg>
              </a>
            </li>
          </ul>
        </div>
        <div className={css.subscribeContainer}>
          <p className={css.subscribeParagraph}>Subscribe</p>
          <form className={css.footerForm}>
            <label className={css.footerLabel}>
              <input className={css.footerInput} name='user-email' type='email' placeholder='E-mail' required />
            </label>
            <button className={css.subscribeButton} type='submit'>
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
