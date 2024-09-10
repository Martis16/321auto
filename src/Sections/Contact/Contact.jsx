import React from "react";
import styles from "./ContactStyles.module.css";

function Contact() {
  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Susisiekite</h1>
      <form action="https://formspree.io/f/mgvwqgqo" method="POST">
        <div className="formGroup">
          <label htmlFor="name" hidden>
            Vardas
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Vardas"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>
            El. Paštas
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Jūsų El.Paštas"
            required
          />
        </div>
        <div className="formGroup">
          <label className={styles.label} htmlFor="message" hidden>
            Žinutė
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Žinutė"
            required
          ></textarea>
        </div>
        <div className="formGroup">
          <input className="hover btn" type="submit" value="Siųsti" />
        </div>
      </form>
    </section>
  );
}

export default Contact;
