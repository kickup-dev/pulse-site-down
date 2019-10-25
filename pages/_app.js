
import App, { Container } from 'next/app'
import Head from "next/head";
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Reset } from 'styled-reset';
import theme from '../theme';

export default class MyApp extends App {
  renderHead() {
    return (
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Nunito+Sans:300,800&display=swap"
        />
      </Head>
    );
  }
  render () {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <Reset/>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </Container>
    )
  }
}