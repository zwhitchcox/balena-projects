import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  const sendCmd = cmd => () => fetch(`/api/audio/ctrl/${cmd}`)
  return (
    <div className={styles.container}>
      <Head>
        <title>Create App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.ctrls}>
          <button className={styles.btn} onClick={sendCmd('play')}>Play Audio File</button>
          <button className={styles.btn} onClick={sendCmd('pause')}>Pause</button>
          <button className={styles.btn} onClick={sendCmd('restart')}>Restart</button>
        </div>
      </main>
    </div>
  )
}
