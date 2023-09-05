import React from 'react';

import { NextUIProvider } from '@nextui-org/react';
import { AppProps } from 'next/app';
import '../styles/main.css';
import '../styles/prism-a11y-dark.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default MyApp;
