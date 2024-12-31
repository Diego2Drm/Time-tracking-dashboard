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
        <Route path="/daily" element={<Daily activities={actvities}/>} />
        <Route path="/weekly" element={<Weekly activities={actvities}/>} />
        <Route path="/monthly" element={<Monthly activities={actvities}/>} />
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
