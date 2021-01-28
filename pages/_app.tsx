import Head from "next/head";
import { Fragment, useEffect } from "react";
import Pusher from "pusher-js";
import type { AppProps } from "next/app";
import GlobalStyle from "./globalStyles";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }

    Pusher.logToConsole = true;

    var pusher = new Pusher("1ce835c5a0bc771a63a7", {
      cluster: "ap3",
    });

    var channel = pusher.subscribe("review");
    channel.bind("inserted", (data) => {
      alert(JSON.stringify(data));
    });
  }, []);

  return (
    <Fragment>
      <GlobalStyle />
      <Head>
        <title>REVIEW MOA</title>
      </Head>
      <div>
        <main>
          <Component {...pageProps} />
        </main>
      </div>
    </Fragment>
  );
}

export default MyApp;
