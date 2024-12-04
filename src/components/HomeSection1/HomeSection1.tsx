import css from './HomeSection1.module.css';

export const HomeSection1 = () => {
  return (
    <section className='css.section css.section-one'>
      <div className='container'>
        <h1 className='primary-title'>Effective Solutions for Your Business</h1>
        <button type='button' className='button-order-service' data-modal-open>
          Order Service
        </button>
      </div>
    </section>
  );
};
