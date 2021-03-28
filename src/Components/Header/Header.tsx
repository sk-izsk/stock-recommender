import React from "react";
import styles from "./Header.module.css";

interface Props {}

const Header: React.FC<Props> = () => {
  return (
    <header className={styles.header}>
      <h3>Stock Recommender</h3>
    </header>
  );
};

export { Header };
