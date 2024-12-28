import React from 'react';
import iconEllipsis from '../assets/images/icon-ellipsis.svg'

type CardInfoProps = {
  title: string;
  current: number;
  previous: number;
}

const CardInfo: React.FC<CardInfoProps> = ({title,current,previous}) => {
  return (
    <>
      <div>
        <h3>{title}</h3>
        <img src={iconEllipsis} alt="icon-ellipsis" />
      </div>
      <div>
        <p>{current}hrs</p>
        <p>Last Week - {previous}hrs</p>
      </div>
    </>
  );
};

export { CardInfo };