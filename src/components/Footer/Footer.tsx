import css from './Footer.module.css';
import InstagramIcon from '../../assets/images/icons.svg#icon-social-instagram.svg';
import TwitterIcon from '../../assets/images/icons.svg#icon-social-twitter.svg';
import FacebookIcon from '../../assets/images/icons.svg#icon-social-facebook.svg';
import LinkedinIcon from '../../assets/images/icons.svg#icon-social-linkedin.svg';
import SubscribeIcon from '../../assets/images/icons.svg#icon-subscribe.svg';
import { SocialLinkProps } from '../HomeSection4/HomeSection4';

const socialLinks: SocialLinkProps[] = [
  { href: 'https://instagram.com', icon: InstagramIcon, alt: 'Instagram' },
  { href: 'https://twitter.com', icon: TwitterIcon, alt: 'Twitter' },
  { href: 'https://facebook.com', icon: FacebookIcon, alt: 'Facebook' },
  { href: 'https://linkedin.com', icon: LinkedinIcon, alt: 'LinkedIn' },
];

//alt: const SocialLinks = ({ href, icon, alt }: SocialLinkProps) => (
const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, alt }) => (
  <li className={css.linkContainer}>
    <a href={href} className={css.socialLink} aria-label={alt}>
      <svg className={css.socialIcon}>
        <use href={icon}></use>
      </svg>
    </a>
  </li>
);

export const Footer: React.FC = () => {
  return (
    <footer className={css.footer}>
      <div className={css.container}>
        <div className={css.flex}>
          <div className={css.logoContainer}>
            <a href='./index.html' className={css.logo}>
              Web<span className={css.logoSpan}>Studio</span>
            </a>
            <p className={css.text}>
              Increase the flow of customers and sales for your business with digital marketing & growth solutions.
            </p>
          </div>
          <div className={css.mediaContainer}>
            <p className={css.title}>Social media</p>
            <ul className={css.socialLinks}>
              {/* {socialLinks.map(({ href, icon, alt }, index) => (
                <li key={index} className={css.linkContainer}>
                  <a href={href} className={css.socialLink} aria-label={alt}>
                    <svg className={css.socialIcon} width='24' height='24'>
                      <use href={icon}></use>
                    </svg>
                  </a>
                </li>
              ))} */}
              {socialLinks.map((link, index) => (
                <SocialLink key={index} {...link} />
              ))}
            </ul>
          </div>
        </div>
        <div className={css.subscribeContainer}>
          <p className={css.title}>Subscribe</p>
          <form className={css.form}>
            <label>
              <input className={css.input} name='user-email' type='email' placeholder='E-mail' required />
            </label>
            <button className={css.subscribeBtn} type='submit'>
              Subscribe
              <svg className={css.subscribeIcon} width='24' height='24'>
                <use href={SubscribeIcon}></use>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

// const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, alt }: SocialLinkProps) => (
//   <li className='h-10 w-10'>
//     <a
//       href={href}
//       className='flex h-full w-full items-center justify-center rounded-full bg-blue-600 transition-colors hover:bg-green-500'
//       aria-label={alt}
//     >
//       <svg className='h-6 w-6'>
//         <use href={icon}></use>
//       </svg>
//     </a>
//   </li>
// );

// export const Footer: React.FC = () => {
//   return (
//     <footer className='bg-navy-blue flex justify-center py-24'>
//       <div className='flex flex-col items-center md:flex-row md:justify-start md:gap-6 xl:gap-20'>
//         {/* Logo Section */}
//         <div className='mb-18 text-center md:mb-0 md:text-left'>
//           <a href='./index.html' className='text-iris mb-4 block text-lg font-bold uppercase tracking-wide'>
//             Web<span className='text-cloud'>Studio</span>
//           </a>
//           <p className='text-cloud w-64'>
//             Increase the flow of customers and sales for your business with digital marketing & growth solutions.
//           </p>
//         </div>

//         {/* Social Media Section */}
//         <div className='mb-18 md:mb-0'>
//           <p className='mb-4 text-center font-medium text-white md:text-left'>Social media</p>
//           <ul className='flex justify-center gap-4'>
//             {socialLinks.map((link, index) => (
//               <SocialLink key={index} {...link} />
//             ))}
//           </ul>
//         </div>

//         {/* Subscribe Section */}
//         <div className='xl:ml-20'>
//           <p className='mb-4 text-center font-medium text-white md:text-left'>Subscribe</p>
//           <form className='flex flex-wrap justify-center gap-4 md:flex-nowrap md:justify-start'>
//             <label>
//               <input
//                 className='h-10 w-64 rounded border border-white bg-transparent px-4 text-sm text-white placeholder-white shadow focus:outline-none md:w-52 xl:w-96'
//                 name='user-email'
//                 type='email'
//                 placeholder='E-mail'
//                 required
//               />
//             </label>
//             <button
//               className='flex h-10 min-w-[165px] items-center justify-center rounded bg-blue-600 font-medium text-white transition-colors hover:bg-green-500'
//               type='submit'
//             >
//               Subscribe
//               <svg className='ml-4 h-6 w-6'>
//                 <use href={SubscribeIcon}></use>
//               </svg>
//             </button>
//           </form>
//         </div>
//       </div>
//     </footer>
//   );
// };
