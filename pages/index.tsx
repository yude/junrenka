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
          <p>{data && data.result[0]}</p>
          <p>{data && data.result[1]}</p>
          <p>{data && data.result[2]}</p>

        <p className={styles.title} onClick={(e) => mutate()}>
        🔃
        </p>
        
        <TwitterShareButton url="junrenka-randomizer.vercel.app" title={data && data.result[0] + '\n' + data.result[1] + '\n' + data.result[2]}>
          <TwitterIcon size={50} round={true} className="mt-2" />
        </TwitterShareButton>
      </main>


      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
const fetcher = (url: string) => fetch(url).then((r) => r.json())
