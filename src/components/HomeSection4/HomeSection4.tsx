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

const teamMembers = [
  {
    img: img4,
    img2x: img4x2,
    alt: 'man with dark hair and facial hair wearing a blue shirt',
    name: 'Mark Guerrero',
    role: 'Product Designer',
    socialLinks: [
      { href: 'https://instagram.com/markguerrero', icon: InstagramIcon, alt: 'Instagram' },
      { href: 'https://twitter.com/markguerrero', icon: TwitterIcon, alt: 'Twitter' },
      { href: 'https://facebook.com/markguerrero', icon: FacebookIcon, alt: 'Facebook' },
      { href: 'https://linkedin.com/in/markguerrero', icon: LinkedinIcon, alt: 'LinkedIn' },
    ],
  },
  {
    img: img5,
    img2x: img5x2,
    alt: 'smiling man with brown hair wearing a blue shirt',
    name: 'Tom Ford',
    role: 'Frontend Developer',
    socialLinks: [
      { href: 'https://instagram.com/tomford', icon: InstagramIcon, alt: 'Instagram' },
      { href: 'https://twitter.com/tomford', icon: TwitterIcon, alt: 'Twitter' },
      { href: 'https://facebook.com/tomford', icon: FacebookIcon, alt: 'Facebook' },
      { href: 'https://linkedin.com/in/tomford', icon: LinkedinIcon, alt: 'LinkedIn' },
    ],
  },
  {
    img: img6,
    img2x: img6x2,
    alt: 'woman with dark hair wearing a pink pullover',
    name: 'Camila Garcia',
    role: 'Marketing',
    socialLinks: [
      { href: 'https://instagram.com/camilagarcia', icon: InstagramIcon, alt: 'Instagram' },
      { href: 'https://twitter.com/camilagarcia', icon: TwitterIcon, alt: 'Twitter' },
      { href: 'https://facebook.com/camilagarcia', icon: FacebookIcon, alt: 'Facebook' },
      { href: 'https://linkedin.com/in/camilagarcia', icon: LinkedinIcon, alt: 'LinkedIn' },
    ],
  },
  {
    img: img7,
    img2x: img7x2,
    alt: 'smiling man with dark hair wearing a gray t-shirt',
    name: 'Daniel Wilson',
    role: 'UI Designer',
    socialLinks: [
      { href: 'https://instagram.com/danielwilson', icon: InstagramIcon, alt: 'Instagram' },
      { href: 'https://twitter.com/danielwilson', icon: TwitterIcon, alt: 'Twitter' },
      { href: 'https://facebook.com/danielwilson', icon: FacebookIcon, alt: 'Facebook' },
      { href: 'https://linkedin.com/in/danielwilson', icon: LinkedinIcon, alt: 'LinkedIn' },
    ],
  },
];

export const HomeSection4 = () => {
  return (
    <section className={css.section}>
      <div className={css.container}>
        <h2 className={css.header}>Our Team</h2>
        <ul className={css.teamList}>
          {teamMembers.map(({ img, img2x, alt, name, role, socialLinks }, index) => (
            <li key={index} className={css.employeeCard}>
              <img src={img} srcSet={`${img} 1x, ${img2x} 2x`} alt={alt} width='264' height='260' />
              <div className={css.employeeInfo}>
                <h3 className={css.name}>{name}</h3>
                <p className={css.role}>{role}</p>
                <ul className={css.socialLinks}>
                  {socialLinks.map(({ href, icon, alt }, i) => (
                    <li key={i} className={css.linkContainer}>
                      <a href={href} className={css.socialLink} aria-label={alt}>
                        <svg className={css.socialIcon} width='16' height='16'>
                          <use href={icon}></use>
                        </svg>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
