import css from './Footer.module.css';

export const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-flex container'>
        <div className='footer-first-subcontainer'>
          <a href='./index.html' className='logo link logo-container'>
            Web<span className='logo-footer-span'>Studio</span>
          </a>
          <p className='footer-paragraph'>
            Increase the flow of customers and sales for your business with digital marketing & growth solutions.
          </p>
        </div>

        <div className='footer-second-subcontainer'>
          <p className='social-media-paragraph'>Social media</p>
          <ul className='list footer-social-list'>
            <li className='link social-media-container'>
              <a href='' className='footer-social-link'>
                <svg className='social-icon' width='24' height='24'>
                  <use href='./images/icons.svg#icon-social-instagram'></use>
                </svg>
              </a>
            </li>
            <li className='link social-media-container'>
              <a href='' className='footer-social-link'>
                <svg className='social-icon' width='24' height='24'>
                  <use href='./images/icons.svg#icon-social-twitter'></use>
                </svg>
              </a>
            </li>
            <li className='link social-media-container'>
              <a href='' className='footer-social-link'>
                <svg className='social-icon' width='24' height='24'>
                  <use href='./images/icons.svg#icon-social-facebook'></use>
                </svg>
              </a>
            </li>
            <li className='link social-media-container'>
              <a href='' className='footer-social-link'>
                <svg className='social-icon' width='24' height='24'>
                  <use href='./images/icons.svg#icon-social-linkedin'></use>
                </svg>
              </a>
            </li>
          </ul>
        </div>
        <div className='subscribe-container'>
          <p className='subscribe-paragraph'>Subscribe</p>
          <form className='footer-form'>
            <label className='footer-label'>
              <input className='footer-input' name='user-email' type='email' placeholder='E-mail' required />
            </label>
            <button className='subscribe-button' type='submit'>
              Subscribe
              <svg className='subscribe-icon' width='24' height='24'>
                <use href='./images/icons.svg#icon-subscribe'></use>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};
