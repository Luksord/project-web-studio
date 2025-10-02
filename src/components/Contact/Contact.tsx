import css from './Contact.module.css';

export const Contact = () => {
  return (
    <section className={css.section}>
      <address className={css.address}>
        <ul className={css.addressList}>
          <li className={css.addressItem}>
            <a href='mailto:info@devstudio.com' className={css.addressLink}>
              info@devstudio.com
            </a>
          </li>
          <li className={css.addressItem}>
            <a href='tel:+110001111111' className={css.addressLink}>
              +11 (000) 111-11-11
            </a>
          </li>
        </ul>
      </address>
    </section>
  );
};
