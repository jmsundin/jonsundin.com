import "../styles/globals.css";

import { Fragment } from "react";
import RootLayout from "./layout";

function App({ Component, pageProps }) {
  return (
    <Fragment>
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </Fragment>
  );
}

export default App;
