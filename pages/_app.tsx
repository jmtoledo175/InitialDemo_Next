import '@/styles/globals.css'
import { NextPage } from 'next';
import { ReactNode } from 'react';
import { ReactElement } from 'react';
import { AppProps } from 'next/app';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}
 
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
 
 const getLayout = Component.getLayout || ( (page)=> page);
  return getLayout(<Component {...pageProps} />)
}
