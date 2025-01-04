import React from "react";
import { Activity } from "../utils/types";
import { Cards } from "./Cards";
import style from '../index.module.css'

interface Monthly {
  activities: Activity[];
}

const Monthly: React.FC<Monthly> = ({ activities }) => {
  return (
    <section className={style.gridContainer}>
      {
        activities.map((activity, index) => (
          <Cards
          background={activity.background}
            key={index}
            image={activity.image}
            date="Month"
            title={activity.title}
            current={activity.timeframes.monthly.current}
            previous={activity.timeframes.monthly.previous} />
        ))
      }
    </section>
  );
};

export { Monthly };