import React from 'react'
import Head from 'next/head'
import '../src/styles/globals.css'
import '../src/styles/header.css'
import '@emotion/react'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />

}
export default MyApp
