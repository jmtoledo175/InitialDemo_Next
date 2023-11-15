import Head from "next/head";
import Link from "next/link";
import { Inter } from "next/font/google";
import styles from "../components/layouts/MainLayouts.module.css"
import MainLayouts from "../components/layouts/MainLayouts"
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
    <MainLayouts>
    <h1 className={styles.title}>
          Ir a <Link href="/about">About Us</Link>
        </h1>
        <div className={styles.description}>
          <p>
            Get started by editing&nbsp;
            <code className={styles.code}>pages/index.tsx</code>
          </p>
        </div>
    </MainLayouts>
     
    </>
  );
}
