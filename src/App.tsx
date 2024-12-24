import { Cards } from './components/Cards'
import { NameCard } from './components/NameCard'
import styles from './index.module.css'

function App() {


  return (
    <section className={styles.container}>
      <NameCard />
      <Cards />
    </section>
  )
}

export default App
