import { Link } from 'react-router-dom';
import css from './SignUp.module.css';

export const SignUp = () => {
  return (
    <Link to='signup'>
      <button className={css.signUpBtn}>Sign Up</button>
    </Link>
  );
};
