import React from 'react';
import style from '../index.module.css';
import { CardInfo } from './CardInfo';
import iconWork from "../assets/images/icon-work.svg"
import iconPlay from "../assets/images/icon-play.svg"
import iconStudy from "../assets/images/icon-study.svg"
import iconExercise from "../assets/images/icon-exercise.svg"
import iconSocial from "../assets/images/icon-social.svg"
import iconSelfCare from "../assets/images/icon-self-care.svg"

type InfoProps = {
  background: string;
  image: string;
  date: string;
  title: string;
  current: number;
  previous: number;
}

type ImageKeys = "src/assets/images/icon-work.svg" |
                 "src/assets/images/icon-play.svg" |
                 "src/assets/images/icon-study.svg" |
                 "src/assets/images/icon-exercise.svg" |
                 "src/assets/images/icon-social.svg" |
                 "src/assets/images/icon-self-care.svg";


const Cards: React.FC<InfoProps> = ({ background, image, title, date, current, previous }) => {
  const imageKey = image as ImageKeys;

  const imageMap: Record<ImageKeys, string> = { 
    "src/assets/images/icon-work.svg": iconWork, 
    "src/assets/images/icon-play.svg": iconPlay, 
    "src/assets/images/icon-study.svg": iconStudy, 
    "src/assets/images/icon-exercise.svg": iconExercise, 
    "src/assets/images/icon-social.svg": iconSocial, 
    "src/assets/images/icon-self-care.svg": iconSelfCare
  }



  return (
    <section className={style.cardsContainer}>
      <article className={style.cardsContent}
        style={{ background: `${background}` }}>
        <img className={style.cardIcon} src={imageMap[imageKey]} alt="" />
        <div className={style.cardsInfo}>
          <CardInfo
            date={date}
            title={title}
            current={current}
            previous={previous} />
        </div>
      </article>
    </section >
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