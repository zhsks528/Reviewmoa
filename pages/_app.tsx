import App from "next/app";
import Head from "next/head";
import { Fragment } from "react";

export default class RootApp extends App {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, ...other } = this.props;

    return (
      <Fragment>
        <Head>
          <title>Review mo</title>
        </Head>
        <div>
          <main>
            <Component {...other} />
          </main>
        </div>
      </Fragment>
    );
  }
}
