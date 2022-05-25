import { useState } from 'react'
import {AppProps} from "next/app";
import Head from "next/head";
import Script from "next/script";
import Cursor from "../components/Cursor";
import ScrollToTop from "../components/Scroll-to-top";
import LoadingScreen from "../components/Loading-Screen";
import "../styles/globals.css";
import GlobalStyle from "../styles/GlobalStyle";
import theme from "../styles/theme";

import { ThemeProvider } from "styled-components";

function MyApp({ Component, pageProps }:AppProps) {
  const [stripe, setStripe] = useState(null)
  return (
    <>
      <Head>
        <title>Agência full service | up.expert</title>
        <link rel="icon" href="/img/favicon.ico" />
        
      </Head>
      <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Cursor />
      <LoadingScreen />
      <ScrollToTop />
      <Component {...pageProps} />
      </ThemeProvider>
      <Script id="wow" src="/js/wow.min.js" strategy="lazyOnload" />
      <Script
        strategy="beforeInteractive"
        id="splitting"
        src="/js/splitting.min.js"
      />
      <Script id="simpleParallax" src="/js/simpleParallax.min.js"strategy="lazyOnload" />
      <Script id="simpleParallax" src="/js/scripts/vlt-plugins.min.js"strategy="lazyOnload" />
      <Script id="simpleParallax" src="/js/scripts/vlt-helpers.js"strategy="lazyOnload" />
      <Script id="simpleParallax" src="/js/scripts/vlt-controllers.min.js"strategy="lazyOnload" />
      <Script
        id="isotope"
        strategy="beforeInteractive"
        src="/js/isotope.pkgd.min.js"
       />
      <Script id="initWow" strategy="lazyOnload">{`new WOW().init();`}</Script>
      <Script
  strategy="afterInteractive"
  dangerouslySetInnerHTML={{
    __html: `
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer', 'GTM-XXXXXX');
  `,
  }}
/>
<Script src="https://connect.facebook.net/en_US/sdk.js" strategy="lazyOnload" />
<script
          data-partytown-config
          dangerouslySetInnerHTML={{
            __html: `
              partytown = {
                lib: "/_next/static/~partytown/",
                debug: true
              };
            `,
          }}
        />
        <Script id="show-banner" strategy="lazyOnload">
  {`document.getElementById('banner').classList.remove('hidden')`}
</Script>
    </>
  );
}

export default MyApp;
