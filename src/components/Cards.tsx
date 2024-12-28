import React from 'react';
import style from '../index.module.css';
import { CardProps } from '../utils/types';
import { CardInfo } from './CardInfo';

const Cards: React.FC<CardProps> = ({activity}) => {
  return (
    <section className={style.cardsContainer}>
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
    </section>
  );
};

export { Cards };