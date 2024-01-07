import React from "react";
import styles from "./NotFound.module.css";

const NotFound = () => {
  return (
    <div className={styles.container}>
      <div className={styles.message}>
        <div className={styles.title}>404</div>
        <div className={styles.subtitle}>Page Not Found</div>
        <a href="/" className={styles.homeLink}>
          Go Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
