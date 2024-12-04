import css from './HomeSection2.module.css';

export const HomeSection2 = () => {
  return (
    <section className='section section-two'>
      <div className='container'>
        <h2 className='visually-hidden'>Our Values</h2>
        <ul className='list section-two-list'>
          <li className='section-two-item'>
            <div className='section-two-container'>
              <svg width='64' height='64'>
                <use href='./images/icons.svg#icon-antenna'></use>
              </svg>
            </div>
            <h3 className='tertiary-title'>Strategy</h3>
            <p className='paragraph'>
              Our goal is to identify the business problem to walk away with the perfect and creative solution.
            </p>
          </li>
          <li className='section-two-item'>
            <div className='section-two-container'>
              <svg width='64' height='64'>
                <use href='./images/icons.svg#icon-clock'></use>
              </svg>
            </div>
            <h3 className='tertiary-title'>Punctuality</h3>
            <p className='paragraph'>
              Bring the key message to the brand's audience for the best price within the shortest possible time.
            </p>
          </li>
          <li className='section-two-item'>
            <div className='section-two-container'>
              <svg width='64' height='64'>
                <use href='./images/icons.svg#icon-diagram'></use>
              </svg>
            </div>
            <h3 className='tertiary-title'>Diligence</h3>
            <p className='paragraph'>
              Research and confirm brands that present the strongest digital growth opportunities and minimize risk.
            </p>
          </li>
          <li className='section-two-item'>
            <div className='section-two-container'>
              <svg width='64' height='64'>
                <use href='./images/icons.svg#icon-astronaut'></use>
              </svg>
            </div>
            <h3 className='tertiary-title'>Technologies</h3>
            <p className='paragraph'>
              Design practice focused on digital experiences. We bring forth a deep passion for problem-solving.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};
