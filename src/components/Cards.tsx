import style from '../index.module.css';
import work from '../assets/images/icon-work.svg';
import iconEllipsis from '../assets/images/icon-ellipsis.svg'

const Cards = () => {
  return (
    <section className={style.cardsContainer}>
      <article className={style.cardsContent}>
        <img className={style.cardIcon} src={work} alt="" />
        <div className={style.cardsInfo}>
          <div>
            <h3>Work</h3>
            <img src={iconEllipsis} alt="icon-ellipsis" />
          </div>
          <div>
            <p>32hrs</p>
            <p>Last Week - 36hrs</p>
          </div>
        </div>
      </article>
    </section>
  );
};

export { Cards };