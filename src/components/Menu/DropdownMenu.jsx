// Menu.js
import React from "react";
import styles from "./MenuStyles.module.css";

const DropdownMenu = ({ isMenuOpen }) => {
  return (
    <>
      {isMenuOpen && (
        <div className={styles.menu}>
          <nav>
            <div className={styles.link}>
              <a href="cars">Automobiliai</a>
            </div>

            <div className={styles.line} />
            <div className={styles.link}>
              <a href="/">Apie mus</a>
            </div>

            <div className={styles.line} />
            <div className={styles.link}>
              <a href="contact">Kontaktai</a>
            </div>
          </nav>
        </div>
      )}
    </>
  );
};

export default DropdownMenu;
