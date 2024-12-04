import css from './HomeSection3.module.css';

export const HomeSection3 = () => {
  return (
    <section className='section section-three'>
      <div className='container'>
        <h2 className='secondary-title'>What are we doing</h2>
        <ul className='list section-three-list'>
          <li className='section-three-link'>
            <img
              src='./images/img1.jpg'
              srcset='./images/img1.jpg 1x, ./images/img1@2x.jpg 2x'
              alt='Computer'
              width='360'
              height='300'
            />
          </li>
          <li className='section-three-link'>
            <img
              src='./images/img2.jpg'
              className='./images/img2.jpg 1x, ./images/img2@2x.jpg 2x'
              alt='Phone App'
              width='360'
              height='300'
            />
          </li>
          <li className='section-three-link'>
            <img
              src='./images/img3.jpg'
              srcset='./images/img3.jpg 1x, ./images/img3@2x.jpg 2x'
              alt='Phone on hand'
              width='360'
              height='300'
            />
          </li>
        </ul>
      </div>
    </section>
  );
};
