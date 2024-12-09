import css from './HomeSection5.module.css';
import Logo1 from '../../assets/images/icons.svg#icon-logo1.svg';
import Logo2 from '../../assets/images/icons.svg#icon-logo2.svg';
import Logo3 from '../../assets/images/icons.svg#icon-logo3.svg';
import Logo4 from '../../assets/images/icons.svg#icon-logo4.svg';
import Logo5 from '../../assets/images/icons.svg#icon-logo5.svg';
import Logo6 from '../../assets/images/icons.svg#icon-logo6.svg';

export const HomeSection5 = () => {
  return (
    <section className={`${css.section} ${css.sectionFive}`}>
      <div className={css.container}>
        <h2 className={css.secondaryTitle}>Customers</h2>
        <ul className={`${css.list} ${css.sectionFiveList}`}>
          <li className={`${css.link} ${css.logoList}`}>
            <a href='' className={css.logoLink}>
              <svg className={css.logoIcon} width='104' height='56'>
                <use href={Logo1}></use>
              </svg>
            </a>
          </li>
          <li className={`${css.link} ${css.logoList}`}>
            <a href='' className={css.logoLink}>
              <svg className={css.logoIcon} width='104' height='56'>
                <use href={Logo2}></use>
              </svg>
            </a>
          </li>
          <li className={`${css.link} ${css.logoList}`}>
            <a href='' className={css.logoLink}>
              <svg className={css.logoIcon} width='104' height='56'>
                <use href={Logo3}></use>
              </svg>
            </a>
          </li>
          <li className={`${css.link} ${css.logoList}`}>
            <a href='' className={css.logoLink}>
              <svg className={css.logoIcon} width='104' height='56'>
                <use href={Logo4}></use>
              </svg>
            </a>
          </li>
          <li className={`${css.link} ${css.logoList}`}>
            <a href='' className={css.logoLink}>
              <svg className={css.logoIcon} width='104' height='56'>
                <use href={Logo5}></use>
              </svg>
            </a>
          </li>
          <li className={`${css.link} ${css.logoList}`}>
            <a href='' className={css.logoLink}>
              <svg className={css.logoIcon} width='104' height='56'>
                <use href={Logo6}></use>
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};
