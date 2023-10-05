import "../styles/globals.css";
import "tailwindcss/tailwind.css";

import { Analytics } from "@vercel/analytics/react";

import { Fragment } from "react";
import Layout from "@/components/Layout";

function App({ Component, pageProps }) {
  return (
    <Fragment>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Analytics />
    </Fragment>
  );
}

export default App;
