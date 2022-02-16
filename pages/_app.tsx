import "../styles/globals.css";
import "../styles/portfolio.css";

import type { AppProps } from "next/app";

function TheApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default TheApp;
