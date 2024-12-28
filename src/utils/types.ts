export interface TimeFrame {
  current: number;
  previous: number;
}

export interface TimeFrames {
  daily: TimeFrame;
  weekly: TimeFrame;
  monthly: TimeFrame;
}

export interface Activity {
  title: string;
  image: string;
  background: string;
  timeframes: TimeFrames;
}

export interface CardProps{
  activity: Activity;
}