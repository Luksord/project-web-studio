// import { useEffect, useState } from 'react';
// import { AiFillSun } from 'react-icons/ai';
// import { AiFillMoon } from 'react-icons/ai';
// import css from './Theme.module.css';

// export const Theme = () => {
//   //   const [theme, setTheme] = useState<'light' | 'dark'>('light');

//   //   useEffect(() => {
//   //     document.documentElement.setAttribute('data-theme', theme);
//   //   }, [theme]);

//   //   const toggleTheme = () => {
//   //     setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
//   //   };

//   const setDarkMode = () => {
//     document.querySelector('body').setAttribute('data-theme', 'dark');
//   };

//   const setLightMode = () => {
//     document.querySelector('body').setAttribute('data-theme', 'light');
//   };

//   const toggleTheme = (event) => {
//     if (event.target.checked) setDarkMode();
//     else setLightMode();
//   };

//   return (
//     <div className={css.theme}>
//       <button onClick={toggleTheme}>
//         <AiFillMoon />
//       </button>
//     </div>
//   );
// };
