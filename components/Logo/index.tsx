import React from "react";
import styles from "./styles.module.scss";
import Link from "next/link";

const Logo: React.FC = () => {
  return (
    <Link href={"/"}>
      <a className={styles.logo}></a>
    </Link>
  );
};

export default Logo;
