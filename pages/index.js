import Head from "next/head";
import Navbars from "../components/Navbars";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Playground</title>
        <meta name="description" content="Testing Ground for components." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbars />
    </Fragment>
  );
}
