import '@styles/globals.scss';
import '@styles/prime/data-table.scss';
//import 'suneditor/dist/css/suneditor.min.css'; // Import Sun Editor's CSS File
import '@styles/rte_theme_default.css';
//import 'bootswatch/dist/darkly/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'moment/locale/es';
import type { AppProps /*, AppContext */ } from 'next/app';
import 'popper.js';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/mdc-light-indigo/theme.css';
import React from 'react';
import { ToastProvider } from 'react-toast-notifications';

//import './tools.css';
/*
const client = new ApolloClient({
  uri: 'http://localhost:8000/graphql',
  //uri: 'https://mr-task-master.herokuapp.com/graphql',
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-and-network',
      errorPolicy: 'ignore',
    },
    query: {
      fetchPolicy: 'no-cache',
    },
  },
});
*/
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ToastProvider
      autoDismiss
      autoDismissTimeout={6000}
      placement="bottom-left"
    >
      
        <Component {...{ ...pageProps }} />

    </ToastProvider>
  );
}

export default MyApp;
