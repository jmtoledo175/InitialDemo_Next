import styles from "./MainLayouts.module.css"
import Head from "next/head";
import NavBar from "../NavBar"
import {FC} from "react"

type PropsWithChildren = {
  children: React.ReactNode
}
 

const MainLayouts: FC<PropsWithChildren> = ({children}) => {
    return ( 
        <div>
            <>
      <Head>
        <title>home</title>
        <meta name="description" content="Home page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <NavBar />
       {children}
        <div className={styles.grid}></div>
      </main>
    </>
        </div>
     );
}
 
export default MainLayouts;