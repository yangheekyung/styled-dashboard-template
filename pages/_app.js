import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

import {wrapper} from '../src/store';

import theme from '../src/libraries/material';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import '../src/assets/styles/css/reset.css';
import '../src/assets/styles/css/global.css';
import Layout from '../src/components/template/layout';

const MyApp = ({Component, pageProps}) => (
  <>
    <Head>
      <title>{process.env.NEXT_PUBLIC_TITLE}</title>
      <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      <meta name="theme-color" content={theme.palette.primary.main} />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
    </Head>
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Layout>
        <Component {...pageProps}/>
      </Layout>
    </ThemeProvider>
  </>
);

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default wrapper.withRedux(MyApp);
