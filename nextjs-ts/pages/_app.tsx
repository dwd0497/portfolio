import '../styles/globals.scss';
import {AppProps} from "next/dist/shared/lib/router/router";
import Head from "next/head";
import React from "react";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <Head>
        <title>Top app</title>
        <meta name="description" content="Learn project" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:url" content={process.env.NEXT_PUBLIC_DOMAIN + router.asPath}/>
        <meta property="og:locale" content="ru_RU"/>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
