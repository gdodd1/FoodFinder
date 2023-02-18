import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from './components/navbar'
import { Amplify } from 'aws-amplify'
import config from '../src/aws-exports'


Amplify.configure(config)

function MyApp({ Component, pageProps }: AppProps) {
  return<>
    <Navbar />
   
   <Component {...pageProps} />

   </>
}

export default MyApp
