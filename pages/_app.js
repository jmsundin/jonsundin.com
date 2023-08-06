import "../styles/globals.css";
import "tailwindcss/tailwind.css";

import { Analytics } from '@vercel/analytics/react';

import { Fragment } from "react";
import RootLayout from "./layout";

function App({ Component, pageProps }) {
  return (
    <Fragment>
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
      <Analytics />
    </Fragment>
  );
}

export default App;
