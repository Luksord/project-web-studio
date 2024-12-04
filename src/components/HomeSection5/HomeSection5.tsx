import css from './HomeSection5.module.css';

export const HomeSection5 = () => {
  return (
    <section className='section section-five'>
      <div className='container'>
        <h2 className='secondary-title'>Customers</h2>
        <ul className='list section-five-list'>
          <li className='link logo-list'>
            <a href='' className='logo-link'>
              <svg className='logo-icon' width='104' height='56'>
                <use href='./images/icons.svg#icon-logo1'></use>
              </svg>
            </a>
          </li>
          <li className='link logo-list'>
            <a href='' className='logo-link'>
              <svg className='logo-icon' width='104' height='56'>
                <use href='./images/icons.svg#icon-logo2'></use>
              </svg>
            </a>
          </li>
          <li className='link logo-list'>
            <a href='' className='logo-link'>
              <svg className='logo-icon' width='104' height='56'>
                <use href='./images/icons.svg#icon-logo3'></use>
              </svg>
            </a>
          </li>
          <li className='link logo-list'>
            <a href='' className='logo-link'>
              <svg className='logo-icon' width='104' height='56'>
                <use href='./images/icons.svg#icon-logo4'></use>
              </svg>
            </a>
          </li>
          <li className='link logo-list'>
            <a href='' className='logo-link'>
              <svg className='logo-icon' width='104' height='56'>
                <use href='./images/icons.svg#icon-logo5'></use>
              </svg>
            </a>
          </li>
          <li className='link logo-list'>
            <a href='' className='logo-link'>
              <svg className='logo-icon' width='104' height='56'>
                <use href='./images/icons.svg#icon-logo6'></use>
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};
