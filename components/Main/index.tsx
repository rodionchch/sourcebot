import React from "react";
import Head from "next/head";
import Header from "../Header";
import styles from "./styles.module.scss";

type MainProps = {
  title?: string;
  children?: React.ReactNode;
};

const Main: React.FC<MainProps> = ({ children, title }) => {
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>{title ? `${title} | Sourcebot` : "Sourcebot"}</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Header />

      {children}
    </div>
  );
};

export default Main;
