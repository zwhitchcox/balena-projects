import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  const sendCmd = cmd => () => fetch(`/api/audio/ctrl/${cmd}`)
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <button onClick={sendCmd('play')}>Play</button>
        <button onClick={sendCmd('pause')}>Pause</button>
      </main>
    </div>
  )
}
