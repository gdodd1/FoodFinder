import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from './components/navbar'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <div className="pt-[70px]"><Component {...pageProps} /></div>
    </>
  )
}

export default MyApp
