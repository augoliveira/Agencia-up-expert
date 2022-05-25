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
        <title>Agência de Marketing Digital: Full Service | up.Expert</title>
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
      <script src="js/wow.min.js"></script>
<script>
new WOW().init();
</script>
<Script
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
    </>
  );
}

export default MyApp;
