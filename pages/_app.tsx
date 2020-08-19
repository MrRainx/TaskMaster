import 'bootswatch/dist/darkly/bootstrap.min.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery';
import 'moment/locale/es';
import type { AppProps /*, AppContext */ } from 'next/app';
import 'popper.js';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/nova-light/theme.css';
import React from 'react';
import { ToastProvider } from 'react-toast-notifications';

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
