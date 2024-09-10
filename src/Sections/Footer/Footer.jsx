import React from "react";
import styles from "./FooterStyles.module.css";

function Footer() {
  return (
    <section id="footer" className={styles.container}>
      <div className={styles.footer}>
        <ul className={styles.socials}>
          <a
            href="https://m.autoplius.lt/321auto/skelbimai/automobiliai"
            target="_blank"
          >
            Autoplius.lt
          </a>
          <p>Darbo laikas: <br />I-V 8:00-18:00 <br />VI 8:00-15:00 <br />VII Nedirbame </p>
          <p>Tel. +37068713398</p>
        </ul>
        
      </div>
      <div className={styles.copyright}>
        <p>&copy; 2024 by 321auto.</p>
        <p>All rights reserved.</p>
      </div>
    </section>
  );
}

export default Footer;
