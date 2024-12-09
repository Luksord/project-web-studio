import css from './HomeSection3.module.css';
import img1 from '../../assets/images/img1.jpg';
import img1x2 from '../../assets/images/img1@2x.jpg';
import img2 from '../../assets/images/img2.jpg';
import img2x2 from '../../assets/images/img2@2x.jpg';
import img3 from '../../assets/images/img3.jpg';
import img3x2 from '../../assets/images/img3@2x.jpg';

export const HomeSection3 = () => {
  return (
    <section className={`${css.section} ${css.sectionThree}`}>
      <div className={css.container}>
        <h2 className={css.secondaryTitle}>What are we doing</h2>
        <ul className={`${css.list} ${css.sectionThreeList}`}>
          <li className={css.sectionThreeLink}>
            <img src={img1} srcSet={`${img1} 1x, ${img1x2} 2x`} alt='Computer' width='360' height='300' />
          </li>
          <li className={css.sectionThreeLink}>
            <img src={img2} srcSet={`${img2} 1x, ${img2x2} 2x`} alt='Phone App' width='360' height='300' />
          </li>
          <li className={css.sectionThreeLink}>
            <img src={img3} srcSet={`${img3} 1x, ${img3x2} 2x`} alt='Phone on hand' width='360' height='300' />
          </li>
        </ul>
      </div>
    </section>
  );
};
