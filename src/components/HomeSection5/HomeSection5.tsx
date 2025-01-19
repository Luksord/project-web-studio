import css from './HomeSection5.module.css';
import Logo1 from '../../assets/images/icons.svg#icon-logo1.svg';
import Logo2 from '../../assets/images/icons.svg#icon-logo2.svg';
import Logo3 from '../../assets/images/icons.svg#icon-logo3.svg';
import Logo4 from '../../assets/images/icons.svg#icon-logo4.svg';
import Logo5 from '../../assets/images/icons.svg#icon-logo5.svg';
import Logo6 from '../../assets/images/icons.svg#icon-logo6.svg';

const Companies = [
  { href: '', logo: Logo1 },
  { href: '', logo: Logo2 },
  { href: '', logo: Logo3 },
  { href: '', logo: Logo4 },
  { href: '', logo: Logo5 },
  { href: '', logo: Logo6 },
];

export const HomeSection5 = () => {
  return (
    <section className={css.section}>
      <div className={css.container}>
        <h2 className={css.header}>Customers</h2>
        <ul className={css.list}>
          {Companies.map(({ href, logo }, index) => (
            <li key={index} className={css.listItem}>
              <a href={href} className={css.companyLink}>
                <svg className={css.companyIcon} width='104' height='56'>
                  <use href={logo}></use>
                </svg>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
