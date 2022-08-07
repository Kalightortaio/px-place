import type { NextPage } from 'next'
import Header from 'next/head'
import Matrix from '../components/Matrix'
import styles from '../styles/Index.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Header>
        <title>PX Place</title>
        <meta name="description" content="A Cellular Automata project by Kalightortaio" />
        <link rel="icon" href="/favicon.png" />
      </Header>
      <div className={styles.main}>
        <Matrix />
      </div>
    </div>
  )
}

export default Home
