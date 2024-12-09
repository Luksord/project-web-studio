import css from './HomeSection4.module.css';
import img4 from '../../assets/images/img4.jpg';
import img4x2 from '../../assets/images/img4@2x.jpg';
import img5 from '../../assets/images/img5.jpg';
import img5x2 from '../../assets/images/img5@2x.jpg';
import img6 from '../../assets/images/img6.jpg';
import img6x2 from '../../assets/images/img6@2x.jpg';
import img7 from '../../assets/images/img7.jpg';
import img7x2 from '../../assets/images/img7@2x.jpg';
import InstagramIcon from '../../assets/images/icons.svg#icon-social-instagram.svg';
import TwitterIcon from '../../assets/images/icons.svg#icon-social-twitter.svg';
import FacebookIcon from '../../assets/images/icons.svg#icon-social-facebook.svg';
import LinkedinIcon from '../../assets/images/icons.svg#icon-social-linkedin.svg';

export const HomeSection4 = () => {
  return (
    <section className={`${css.section} ${css.sectionFour}`}>
      <div className={css.container}>
        <h2 className={css.secondaryTitle}>Our Team</h2>
        <ul className={`${css.list} ${css.sectionFourList}`}>
          <li className={css.sectionFourItem}>
            <img
              src={img4}
              srcSet={`${img4} 1x, ${img4x2} 2x`}
              alt='man with dark hair and facial hair wearing a blue shirt'
              width='264'
              height='260'
            />
            <div className={css.teamMember}>
              <h3 className={css.tertiaryTitle}>Mark Guerrero</h3>
              <p className={css.paragraph}>Product Designer</p>
              <ul className={`${css.list} ${css.socialList}`}>
                <li className={`${css.link} ${css.socialMediaContainer}`}>
                  <a href='' className={css.socialLink}>
                    <svg className={css.socialIcon} width='16' height='16'>
                      <use href={InstagramIcon}></use>
                    </svg>
                  </a>
                </li>
                <li className={`${css.link} ${css.socialMediaContainer}`}>
                  <a href='' className={css.socialLink}>
                    <svg className={css.socialIcon} width='16' height='16'>
                      <use href={TwitterIcon}></use>
                    </svg>
                  </a>
                </li>
                <li className={`${css.link} ${css.socialMediaContainer}`}>
                  <a href='' className={css.socialLink}>
                    <svg className={css.socialIcon} width='16' height='16'>
                      <use href={FacebookIcon}></use>
                    </svg>
                  </a>
                </li>
                <li className={`${css.link} ${css.socialMediaContainer}`}>
                  <a href='' className={css.socialLink}>
                    <svg className={css.socialIcon} width='16' height='16'>
                      <use href={LinkedinIcon}></use>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className={css.sectionFourItem}>
            <img
              src={img5}
              srcSet={`${img5} 1x, ${img5x2} 2x`}
              alt='smiling man with brown hair wearing a blue shirt'
              width='264'
              height='260'
            />
            <div className={css.teamMember}>
              <h3 className={css.tertiaryTitle}>Tom Ford</h3>
              <p className={css.paragraph}>Frontend Developer</p>
              <ul className={`${css.list} ${css.socialList}`}>
                <li className={`${css.link} ${css.socialMediaContainer}`}>
                  <a href='' className={css.socialLink}>
                    <svg className={css.socialIcon} width='16' height='16'>
                      <use href={InstagramIcon}></use>
                    </svg>
                  </a>
                </li>
                <li className={`${css.link} ${css.socialMediaContainer}`}>
                  <a href='' className={css.socialLink}>
                    <svg className={css.socialIcon} width='16' height='16'>
                      <use href={TwitterIcon}></use>
                    </svg>
                  </a>
                </li>
                <li className={`${css.link} ${css.socialMediaContainer}`}>
                  <a href='' className={css.socialLink}>
                    <svg className={css.socialIcon} width='16' height='16'>
                      <use href={FacebookIcon}></use>
                    </svg>
                  </a>
                </li>
                <li className={`${css.link} ${css.socialMediaContainer}`}>
                  <a href='' className={css.socialLink}>
                    <svg className={css.socialIcon} width='16' height='16'>
                      <use href={LinkedinIcon}></use>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className={css.sectionFourItem}>
            <img
              src={img6}
              srcSet={`${img6} 1x, ${img6x2} 2x`}
              alt='woman with dark hair wearing a pink pullover'
              width='264'
              height='260'
            />
            <div className={css.teamMember}>
              <h3 className={css.tertiaryTitle}>Camila Garcia</h3>
              <p className={css.paragraph}>Marketing</p>
              <ul className={`${css.list} ${css.socialList}`}>
                <li className={`${css.link} ${css.socialMediaContainer}`}>
                  <a href='' className={css.socialLink}>
                    <svg className={css.socialIcon} width='16' height='16'>
                      <use href={InstagramIcon}></use>
                    </svg>
                  </a>
                </li>
                <li className={`${css.link} ${css.socialMediaContainer}`}>
                  <a href='' className={css.socialLink}>
                    <svg className={css.socialIcon} width='16' height='16'>
                      <use href={TwitterIcon}></use>
                    </svg>
                  </a>
                </li>
                <li className={`${css.link} ${css.socialMediaContainer}`}>
                  <a href='' className={css.socialLink}>
                    <svg className={css.socialIcon} width='16' height='16'>
                      <use href={FacebookIcon}></use>
                    </svg>
                  </a>
                </li>
                <li className={`${css.link} ${css.socialMediaContainer}`}>
                  <a href='' className={css.socialLink}>
                    <svg className={css.socialIcon} width='16' height='16'>
                      <use href={LinkedinIcon}></use>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className={css.sectionFourItem}>
            <img
              src={img7}
              srcSet={`${img7} 1x, ${img7x2} 2x`}
              alt='smiling man with dark hair wearing a gray t-shirt'
              width='264'
              height='260'
            />
            <div className={css.teamMember}>
              <h3 className={css.tertiaryTitle}>Daniel Wilson</h3>
              <p className={css.paragraph}>UI Designer</p>
              <ul className={`${css.list} ${css.socialList}`}>
                <li className={`${css.link} ${css.socialMediaContainer}`}>
                  <a href='' className={css.socialLink}>
                    <svg className={css.socialIcon} width='16' height='16'>
                      <use href={InstagramIcon}></use>
                    </svg>
                  </a>
                </li>
                <li className={`${css.link} ${css.socialMediaContainer}`}>
                  <a href='' className={css.socialLink}>
                    <svg className={css.socialIcon} width='16' height='16'>
                      <use href={TwitterIcon}></use>
                    </svg>
                  </a>
                </li>
                <li className={`${css.link} ${css.socialMediaContainer}`}>
                  <a href='' className={css.socialLink}>
                    <svg className={css.socialIcon} width='16' height='16'>
                      <use href={FacebookIcon}></use>
                    </svg>
                  </a>
                </li>
                <li className={`${css.link} ${css.socialMediaContainer}`}>
                  <a href='' className={css.socialLink}>
                    <svg className={css.socialIcon} width='16' height='16'>
                      <use href={LinkedinIcon}></use>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
