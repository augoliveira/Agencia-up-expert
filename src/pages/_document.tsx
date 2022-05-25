import React, { Fragment, ReactElement } from 'react';
import Document, {
  DocumentInitialProps,
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: [
          <Fragment key='1'>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </Fragment>,
        ],
      };
    } finally {
      sheet.seal();
    }
  }

  render(): ReactElement {
    return (
      <Html lang='Pt-BR'>
        <Head>
          <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
          <meta name='author' content='Themezinho' />
          <meta
            name='description'
            content='Somos uma Agência de Marketing Digital Full Service com uma combinação única de talentos criados para a era digital. Geramos ideias e estratégias impulsionadas pela percepção do consumidor e ampliadas por um domínio sem precedentes da tecnologia.'
          />
          <meta
            name='keywords'
            content='criação de site, business intelligence, Conteúdo digitais, marketing, marketing digital, agência, vender mais, publicidade, performance '
          />

          <meta
            property='og:description'
            content='Somos uma Agência de Marketing Digital Full Service com uma combinação única de talentos criados para a era digital. Geramos ideias e estratégias impulsionadas pela percepção do consumidor e ampliadas por um domínio sem precedentes da tecnologia.'
          />
          <meta
            property='og:image'
            content='http://www.upexpert.com.br/Webdesign'
          />
          <meta property='og:site_name' content='up.expert' />
          <meta property='og:title' content='up.expert' />
          <meta property='og:type' content='website' />
          <meta property='og:url' content='http://www.upexpert.com.br/sites' />

          <meta name='twitter:card' content='up.expert' />
          <meta name='twitter:site' content='@up.expert' />
          <meta name='twitter:creator' content='@up.expert' />
          <meta name='twitter:title' content='up.expert' />
          <meta
            name='twitter:description'
            content='Somos uma Agência de Marketing Digital Full Service com uma combinação única de talentos criados para a era digital. Geramos ideias e estratégias impulsionadas pela percepção do consumidor e ampliadas por um domínio sem precedentes da tecnologia.'
          />
          <meta
            name='twitter:image'
            content='http://www.upexpert.com.br/sites/preview.png'
          />
          <link rel='shortcut icon' href='/img/favicon.ico' />
          {/* Google Fonts */}
          <link
            href='https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap'
            rel='stylesheet'
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Barlow:wght@100;200;300;400;500;600;700;800;900&display=swap'
            rel='stylesheet'
          />
          <link
            href='https://fonts.googleapis.com/css?family=Playfair+Display:400,500,600,700,800,900&display=swap'
            rel='stylesheet'
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&display=swap'
            rel='stylesheet'
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@200;300;400;500;600;700&display=swap'
            rel='stylesheet'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
