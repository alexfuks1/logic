import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import '../styles/globals.scss';
import Header from '../components/Header';

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Header />
      <Head>
        <title>AF</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp