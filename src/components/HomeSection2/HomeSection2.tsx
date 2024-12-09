import css from './HomeSection2.module.css';
import iconAntenna from '../../assets/images/icons.svg#icon-antenna.svg';
import iconClock from '../../assets/images/icons.svg#icon-clock.svg';
import iconDiagram from '../../assets/images/icons.svg#icon-diagram.svg';
import iconAstronaut from '../../assets/images/icons.svg#icon-astronaut.svg';

export const HomeSection2 = () => {
  return (
    <section className={`${css.section} ${css.sectionTwo}`}>
      <div className={css.container}>
        <h2 className={css.visuallyHidden}>Our Values</h2>
        <ul className={`${css.list} ${css.sectionTwoList}`}>
          <li className={css.sectionTwoItem}>
            <div className={css.sectionTwoContainer}>
              <svg width='64' height='64'>
                <use href={iconAntenna}></use>
              </svg>
            </div>
            <h3 className={css.tertiaryTitle}>Strategy</h3>
            <p className={css.paragraph}>
              Our goal is to identify the business problem to walk away with the perfect and creative solution.
            </p>
          </li>
          <li className={css.sectionTwoItem}>
            <div className={css.sectionTwoContainer}>
              <svg width='64' height='64'>
                <use href={iconClock}></use>
              </svg>
            </div>
            <h3 className={css.tertiaryTitle}>Punctuality</h3>
            <p className={css.paragraph}>
              Bring the key message to the brand's audience for the best price within the shortest possible time.
            </p>
          </li>
          <li className={css.sectionTwoItem}>
            <div className={css.sectionTwoContainer}>
              <svg width='64' height='64'>
                <use href={iconDiagram}></use>
              </svg>
            </div>
            <h3 className={css.tertiaryTitle}>Diligence</h3>
            <p className={css.paragraph}>
              Research and confirm brands that present the strongest digital growth opportunities and minimize risk.
            </p>
          </li>
          <li className={css.sectionTwoItem}>
            <div className={css.sectionTwoContainer}>
              <svg width='64' height='64'>
                <use href={iconAstronaut}></use>
              </svg>
            </div>
            <h3 className={css.tertiaryTitle}>Technologies</h3>
            <p className={css.paragraph}>
              Design practice focused on digital experiences. We bring forth a deep passion for problem-solving.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};
