import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import Script from 'next/script';
import Cursor from '../components/Cursor';
import ScrollToTop from '../components/Scroll-to-top';
import LoadingScreen from '../components/Loading-Screen';
import '../../styles/globals.css';
import '../../public/css/dark.css';
import GlobalStyle from '../../styles/GlobalStyle';
import theme from '../../styles/theme';

import { ThemeProvider } from 'styled-components';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>
          {' '}
          Agência de Marketing Digital: Marketing Full Service | up.Expert
        </title>
        <link rel='icon' href='/img/favicon.ico' />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Cursor />
        <LoadingScreen />
        <ScrollToTop />
        <Component {...pageProps} />
      </ThemeProvider>
      <Script id='wow' src='/js/wow.min.js'></Script>
      <Script
        strategy='beforeInteractive'
        id='splitting'
        src='/js/splitting.min.js'
      ></Script>
      <Script id='simpleParallax' src='/js/simpleParallax.min.js'></Script>
      <Script id='simpleParallax' src='/js/scripts/vlt-plugins.min.js'></Script>
      <Script id='simpleParallax' src='/js/scripts/vlt-helpers.js'></Script>
      <Script
        id='simpleParallax'
        src='/js/scripts/vlt-controllers.min.js'
      ></Script>
      <Script
        id='isotope'
        strategy='beforeInteractive'
        src='/js/isotope.pkgd.min.js'
      ></Script>
      <Script id='initWow' strategy='lazyOnload'>{`new WOW().init();`}</Script>
    </>
  );
}

export default MyApp;
