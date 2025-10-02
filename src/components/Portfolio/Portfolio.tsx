import css from './Portfolio.module.css';
import img2_1 from '../../assets/images/img2-1.jpg';
import img2_2 from '../../assets/images/img2-2.jpg';
import img2_3 from '../../assets/images/img2-3.jpg';
import img2_4 from '../../assets/images/img2-4.jpg';
import img2_5 from '../../assets/images/img2-5.jpg';
import img2_6 from '../../assets/images/img2-6.jpg';
import img2_7 from '../../assets/images/img2-7.jpg';
import img2_8 from '../../assets/images/img2-8.jpg';
import img2_9 from '../../assets/images/img2-9.jpg';
import { useState } from 'react';

const filterButtons = ['All', 'Web Site', 'App', 'Design', 'Marketing'];

interface portfolioProps {
  title: string;
  category: string;
  description: string;
  img: string;
  href: string;
}

const portfolioItems: portfolioProps[] = [
  {
    title: 'Banking App Interface Concept',
    category: 'App',
    description: `14 Stylish and User-Friendly App Design Concepts · Task Manager App · Calorie Tracker App · Exotic
                  Fruit Ecommerce App · Cloud Storage App`,
    img: img2_1,
    href: '',
  },
  {
    title: 'Cashless Payment',
    category: 'Marketing',
    description: `14 Stylish and User-Friendly App Design Concepts · Task Manager App · Calorie Tracker App · Exotic
                  Fruit Ecommerce App · Cloud Storage App`,
    img: img2_2,
    href: '',
  },
  {
    title: 'Meditation App',
    category: 'App',
    description: `14 Stylish and User-Friendly App Design Concepts · Task Manager App · Calorie Tracker App · Exotic
                  Fruit Ecommerce App · Cloud Storage App`,
    img: img2_3,
    href: '',
  },
  {
    title: 'Taxi Service',
    category: 'Marketing',
    description: `14 Stylish and User-Friendly App Design Concepts · Task Manager App · Calorie Tracker App · Exotic
                  Fruit Ecommerce App · Cloud Storage App`,
    img: img2_4,
    href: '',
  },
  {
    title: 'Screen Illustrations',
    category: 'Design',
    description: `14 Stylish and User-Friendly App Design Concepts · Task Manager App · Calorie Tracker App · Exotic
                  Fruit Ecommerce App · Cloud Storage App`,
    img: img2_5,
    href: '',
  },
  {
    title: 'Online Courses',
    category: 'Marketing',
    description: `14 Stylish and User-Friendly App Design Concepts · Task Manager App · Calorie Tracker App · Exotic
                  Fruit Ecommerce App · Cloud Storage App`,
    img: img2_6,
    href: '',
  },
  {
    title: 'Instagram Stories Concept',
    category: 'Design',
    description: `14 Stylish and User-Friendly App Design Concepts · Task Manager App · Calorie Tracker App · Exotic
                  Fruit Ecommerce App · Cloud Storage App`,
    img: img2_7,
    href: '',
  },
  {
    title: 'Organic Food',
    category: 'Web Site',
    description: `14 Stylish and User-Friendly App Design Concepts · Task Manager App · Calorie Tracker App · Exotic
                  Fruit Ecommerce App · Cloud Storage App`,
    img: img2_8,
    href: '',
  },
  {
    title: 'Fresh Coffee',
    category: 'Web Site',
    description: `14 Stylish and User-Friendly App Design Concepts · Task Manager App · Calorie Tracker App · Exotic
                  Fruit Ecommerce App · Cloud Storage App`,
    img: img2_9,
    href: '',
  },
];

export const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems =
    activeCategory === 'All' ? portfolioItems : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <section className={css.section}>
      <div className={css.container}>
        <h1 className={css.visuallyHidden}>.</h1>
        <ul className={css.buttonsList}>
          {filterButtons.map((label) => (
            <li key={label}>
              <button
                type='button'
                className={`${css.button} ${activeCategory === label ? css.active : ''}`}
                onClick={() => setActiveCategory(label)}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
        <ul className={css.portfolioList}>
          {filteredItems.map(({ img, description, title, category, href }, index) => (
            <li key={index} className={css.listItem}>
              <a href={href} className={css.link}>
                <div className={css.imageContainer}>
                  <img src={img} alt={title} className={css.image} loading='lazy' />
                  <p className={css.overlay}>{description}</p>
                </div>
                <div className={css.infoContainer}>
                  <h2 className={css.title}>{title}</h2>
                  <p className={css.text}>{category}</p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
