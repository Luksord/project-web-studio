import css from './HomeSection1.module.css';

export const HomeSection1 = () => {
  return (
    // <section className={`${css.section} ${css.sectionOne}`}>
    <section className={css.sectionOne}>
      <div className={css.container}>
        <h1 className={css.primaryTitle}>Effective Solutions for Your Business</h1>
        <button type='button' className={css.buttonOrderService} data-modal-open>
          Order Service
        </button>
      </div>
    </section>
  );
};
