import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from './components/navbar'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <div className="bg-white w-full h-screen"></div>

    </>
  )
}

export default MyApp
