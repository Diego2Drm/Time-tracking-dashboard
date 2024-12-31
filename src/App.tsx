import { Cards } from './components/Cards'
import { NameCard } from './components/NameCard'
import styles from './index.module.css'
import data from './data.json'
import { useEffect, useState } from 'react';
import { Activity } from './utils/types';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Weekly } from './components/Weekly';
import { Daily } from './components/Daily';
import { Monthly } from './components/Monthly';


function App() {
  const [actvities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    setActivities(data)
  }, [])

  return (
    <section className={styles.container}>
      <NameCard />

      <Routes>
      <Route path="/" element={<Navigate to="/weekly" />} />
        <Route path="/weekly" element={<Weekly />} />
        <Route path="/daily" element={<Daily />} />
        <Route path="/monthly" element={<Monthly />} />
      </Routes>
      {/* {
        actvities.map((activity, index) => (
          <Cards activity={activity} key={index} />
        ))
      } */}
    </section>
  )
}

export default App
