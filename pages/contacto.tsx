import Head from "next/head";
import styles from "../components/layouts/MainLayouts.module.css";
import Link from "next/link";
import MainLayouts from "../components/layouts/MainLayouts";
export default function ContactPage() {
  return (
    <>
      <MainLayouts>
        <h1 className={styles.title}>
          Ir a <Link href="/">home</Link>
        </h1>
        <div className={styles.description}>
          <p>
            Get started by editing&nbsp;
            <code className={styles.code}>pages/contact.jsx</code>
          </p>
        </div>
      </MainLayouts>
    </>
  );
}
