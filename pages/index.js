import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import styles from '../styles/Home.module.css'

// NOTE npm run dev // To run the development server on port 3000

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Adopter</title>
        <meta name="description" content="Swipe on adoptable pets to help bring awareness to animals in need of a home" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title} >
          Welcome to Adopter!
        </h1>
      </main>

      {/* <footer className={styles.footer}>
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
  </footer> */}
    </div>
  )
}
