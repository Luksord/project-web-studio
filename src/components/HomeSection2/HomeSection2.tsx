import css from './HomeSection2.module.css';
import iconAntenna from '../../assets/images/icons.svg#icon-antenna.svg';
import iconClock from '../../assets/images/icons.svg#icon-clock.svg';
import iconDiagram from '../../assets/images/icons.svg#icon-diagram.svg';
import iconAstronaut from '../../assets/images/icons.svg#icon-astronaut.svg';

export interface itemProps {
  icon: string;
  title: string;
  text: string;
}

const items: itemProps[] = [
  {
    icon: iconAntenna,
    title: 'Strategy',
    text: 'Our goal is to identify the business problem to walk away with the perfect and creative solution.',
  },
  {
    icon: iconClock,
    title: 'Punctuality',
    text: "Bring the key message to the brand's audience for the best price within the shortest possible time.",
  },
  {
    icon: iconDiagram,
    title: 'Diligence',
    text: 'Research and confirm brands that present the strongest digital growth opportunities and minimize risk.',
  },
  {
    icon: iconAstronaut,
    title: 'Technologies',
    text: 'Design practice focused on digital experiences. We bring forth a deep passion for problem-solving.',
  },
];

export const HomeSection2 = () => {
  return (
    <section className={css.section}>
      <div className={css.container}>
        <h2 className={css.visuallyHidden}>Our Values</h2>
        <ul className={css.list}>
          {items.map(({ icon, title, text }, index) => (
            <li key={index} className={css.listItem}>
              <div className={css.iconContainer}>
                <svg width='64' height='64'>
                  <use href={icon}></use>
                </svg>
              </div>
              <h3 className={css.title}>{title}</h3>
              <p className={css.text}>{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
