import "../styles/globals.css";
import RootLayout from "./layout";

function App({ Component, pageProps }) {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  );
}

export default App;
