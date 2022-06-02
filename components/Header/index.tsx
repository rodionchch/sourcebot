import React from "react";
import Link from "next/link";
import styles from "./styles.module.scss";
import Logo from "../Logo";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.header__inner}>
          <Logo />
          <nav className={styles.nav}>
            <Link href="/about">
              <a className={styles.nav__item}>О нас</a>
            </Link>
            <Link href="/contacts">
              <a className={styles.nav__item}>Контакты</a>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
