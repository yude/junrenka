import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { TwitterShareButton, TwitterIcon } from "react-share";
import useSWR from 'swr'

const Home: NextPage = () => {
  const { data, error, mutate } = useSWR('/api/junrenka', fetcher)
  
  return (
    <div className={styles.container}>
      <Head>
        <title>純恋歌</title>
        <meta name="description" content="純恋歌" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
          <div className={styles.title}>
          <p>{data && data.result[0]}</p>
          <p>{data && data.result[1]}</p>
          <p>{data && data.result[2]}</p>
          </div>

        <p className={styles.refresh} onClick={(e) => mutate()}>🔃</p>
        
        <TwitterShareButton url="junrenka-randomizer.vercel.app" title={data && data.result[0] + '\n' + data.result[1] + '\n' + data.result[2]}>
          <TwitterIcon size={50} round={true} className="mt-2" />
        </TwitterShareButton>
        <p className={styles.center}>
          Powered by <a href="https://nextjs.org/">Next.js</a> / <a href="https://vercel.com">Vercel</a>
          <br/>
          <a href="https://github.com/yude/junrenka-randomizer">GitHub</a>
          </p>
      </main>
    </div>
  )
}

export default Home
const fetcher = (url: string) => fetch(url).then((r) => r.json())
