import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from './components/navbar'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="font-sans">
      <Navbar />
      <div className="pt-mx"><Component {...pageProps} /></div>
    </div>
  )
}

export default MyApp
