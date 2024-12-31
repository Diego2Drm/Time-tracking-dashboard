import React from 'react';
import iconEllipsis from '../assets/images/icon-ellipsis.svg'

type CardInfoProps = {
  title: string;
  date: string;
  current: number;
  previous: number;
}

const CardInfo: React.FC<CardInfoProps> = ({title,current,previous, date}) => {
  return (
    <>
      <div>
        <h3>{title}</h3>
        <img src={iconEllipsis} alt="icon-ellipsis" />
      </div>
      <div>
        <p>{current}hrs</p>
        <p>Last {date} - {previous}hrs</p>
      </div>
    </>
  );
};

export { CardInfo };