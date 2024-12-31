import React from "react";
import { Cards } from "./Cards";
import { Activity } from "../utils/types";

interface WeeklyProps {
  activities: Activity[];
}

const Weekly: React.FC<WeeklyProps> = ({activities}) => {

  return (
    <>
      {
        activities.map((activity, index) => (
          <Cards 
          background={activity.background} 
          key={index} 
          image={activity.image} 
          date="Week" 
          title={activity.title} 
          current={activity.timeframes.weekly.current} 
          previous={activity.timeframes.weekly.previous}/>
        ))
      }
    </>
  );
};

export { Weekly };