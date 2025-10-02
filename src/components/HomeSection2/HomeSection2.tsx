import css from './HomeSection2.module.css';
import AntennaIcon from '../../assets/icons/icon-antenna.svg?react';
import ClockIcon from '../../assets/icons/icon-clock.svg?react';
import DiagramIcon from '../../assets/icons/icon-diagram.svg?react';
import AstronautIcon from '../../assets/icons/icon-astronaut.svg?react';

export interface itemProps {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  title: string;
  text: string;
}

const items: itemProps[] = [
  {
    icon: AntennaIcon,
    title: 'Strategy',
    text: 'Our goal is to identify the business problem to walk away with the perfect and creative solution.',
  },
  {
    icon: ClockIcon,
    title: 'Punctuality',
    text: "Bring the key message to the brand's audience for the best price within the shortest possible time.",
  },
  {
    icon: DiagramIcon,
    title: 'Diligence',
    text: 'Research and confirm brands that present the strongest digital growth opportunities and minimize risk.',
  },
  {
    icon: AstronautIcon,
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
          {items.map(({ icon: Icon, title, text }, index) => (
            <li key={index} className={css.listItem}>
              <div className={css.iconContainer}>
                <Icon className={css.icon} />
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
