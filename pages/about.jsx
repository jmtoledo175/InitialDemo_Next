import styles from "../components/layouts/MainLayouts.module.css";
import Link from "next/link";
import MainLayouts from "../components/layouts/MainLayouts";
import DarkLayout from "../components/layouts/DarkLayout";
export default function AboutPage() {
  return (
    <>
      <h1 className={styles.title}>
        Ir a <Link href="/">home</Link>
      </h1>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>pages/about.tsx</code>
        </p>
      </div>
    </>
  );
}

AboutPage.getLayout = function getLayout(page) {
  return (
    <>
      <MainLayouts>
        <DarkLayout>{page}</DarkLayout>
      </MainLayouts>
    </>
  );
};
