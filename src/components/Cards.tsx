import React from 'react';
import style from '../index.module.css';
import { CardInfo } from './CardInfo';

type InfoProps = {
  background: string;
  image: string;
  date: string;
  title: string;
  current: number;
  previous: number;
}

const Cards: React.FC<InfoProps> = ({ background, image, title, date, current, previous }) => {
  return (
    <section className={style.cardsContainer}>
      <article className={style.cardsContent}
        style={{ background: `${background}` }}>
        <img className={style.cardIcon} src={image} alt="" />
        <div className={style.cardsInfo}>
          <CardInfo
            date={date}
            title={title}
            current={current}
            previous={previous} />
        </div>
      </article>
    </section>
  );
};

export { Cards };

{/* <section className={style.cardsContainer}>
<article className={style.cardsContent} 
style={{background: `${activity.background}`}}>
  <img className={style.cardIcon} src={activity.image} alt="" />
  <div className={style.cardsInfo}>
    <CardInfo 
    title={activity.title} 
    current={activity.timeframes.weekly.current} 
    previous={activity.timeframes.weekly.previous} />
  </div>
</article>
</section> */}