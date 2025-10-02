import css from './HomeSection5.module.css';
import Logo1 from '../../assets/icons/icon-logo1.svg?react';
import Logo2 from '../../assets/icons/icon-logo2.svg?react';
import Logo3 from '../../assets/icons/icon-logo3.svg?react';
import Logo4 from '../../assets/icons/icon-logo4.svg?react';
import Logo5 from '../../assets/icons/icon-logo5.svg?react';
import Logo6 from '../../assets/icons/icon-logo6.svg?react';

export interface companiesProps {
  href: string;
  logo: React.FC<React.SVGProps<SVGSVGElement>>;
}

const Companies: companiesProps[] = [
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
          {Companies.map(({ href, logo: Logo }, index) => (
            <li key={index} className={css.listItem}>
              <a href={href} className={css.companyLink}>
                <Logo className={css.companyIcon} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
