import { Cards } from './components/Cards'
import { NameCard } from './components/NameCard'
import styles from './index.module.css'
import data from './data.json'
import { useEffect, useState } from 'react';
import { Activity } from './utils/types';


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
