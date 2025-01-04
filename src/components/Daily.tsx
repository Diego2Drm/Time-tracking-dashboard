import React from "react";
import { Activity } from "../utils/types";
import { Cards } from "./Cards";
import style from '../index.module.css'

interface DailyProps {
  activities: Activity[];
}

const Daily: React.FC<DailyProps> = ({ activities }) => {
  return (
    <section className={style.gridContainer}>
      {
        activities.map((activity, index) => (
          <Cards
          background={activity.background}
            key={index}
            image={activity.image}
            date="Day"
            title={activity.title}
            current={activity.timeframes.daily.current}
            previous={activity.timeframes.daily.previous} />
        ))
      }
    </section>
  );
};

export { Daily };