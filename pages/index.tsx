import type { NextPage } from 'next'
import { useEffect } from 'react';
import io from 'socket.io-client';
import Header from 'next/head'
import Matrix from '../components/Matrix'
import styles from '../styles/Index.module.css'

let socket;

const Home: NextPage = () => {
  useEffect(() => {
    socketInitializer();
  }, [])

  async function socketInitializer() {
    await fetch('/api/socket');
    socket = io();

    socket.on('connect', () => {
      console.log('connected')
    })
  }

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
