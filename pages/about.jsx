import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link"
export default function Home() {
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="description" content="Home page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Ir a <Link href="/">home</Link>
        </h1>
        <div className={styles.description}>
          <p>
            Get started by editing&nbsp;
            <code className={styles.code}>pages/about.tsx</code>
          </p>
        </div>
        <div className={styles.grid}></div>
      </main>
    </>
  );
}
