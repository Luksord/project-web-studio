import { Dispatch, SetStateAction } from 'react';
import css from './Modal.module.css';

interface ModalProps {
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}

export const Modal = ({ setIsModalOpen }: ModalProps) => {
  return (
    <div className={css.modalBackdrop}>
      <div className={css.modalContainer}>
        <button type='button' className={css.modalCloseBtn} onClick={() => setIsModalOpen(false)}>
          <svg className={css.modalIcon} width='8' height='8'>
            <use href='/images/icons.svg#icon-close'></use>
          </svg>
        </button>
        <p className={css.formParagraph}>Leave your contacts and we will call you back</p>
        <form>
          <div className={css.labelContainer}>
            <label htmlFor='user-name'>Name</label>
            <div className={css.inputContainer}>
              <input id='user-name' name='user-name' type='text' required />
              <svg className={css.inputIcon} width='18' height='24'>
                <use href='/images/icons.svg#icon-name'></use>
              </svg>
            </div>
          </div>
          <div className={css.labelContainer}>
            <label htmlFor='phone-number'>Phone</label>
            <div className={css.inputContainer}>
              <input id='phone-number' name='phone-number' type='tel' required />
              <svg className={css.inputIcon} width='18' height='24'>
                <use href='/images/icons.svg#icon-phone'></use>
              </svg>
            </div>
          </div>
          <div className={css.labelContainer}>
            <label htmlFor='user_email'>Email</label>
            <div className={css.inputContainer}>
              <input id='user_email' name='user_email' type='email' required />
              <svg className={css.inputIcon} width='18' height='24'>
                <use href='/images/icons.svg#icon-email'></use>
              </svg>
            </div>
          </div>
          <button type='submit' className={css.orderBtn}>
            Send
          </button>
        </form>
      </div>
    </div>
  );
};
