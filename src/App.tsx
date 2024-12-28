import { Cards } from './components/Cards'
import { NameCard } from './components/NameCard'
import styles from './index.module.css'
import data from './data.json'
import { useEffect, useState } from 'react';

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


function App() {
  const [actvities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    setActivities(data)
  }, [])

  return (
    <section className={styles.container}>
      <NameCard />
      {
        actvities.map((activity, index) => (
          <Cards activity={activity} key={index} />
        ))
      }
    </section>
  )
}

export default App
