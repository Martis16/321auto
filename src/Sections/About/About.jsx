import React from "react";
import styles from "./AboutStyles.module.css";
import Advantages from "../Advantages/Advantages";
import ExpertDark from "../../assets/work-building-svgrepo-com.svg";
import ExpertLight from "../../assets/work-building-svgrepo-com (2).svg";
import FastLight from "../../assets/fast-shopping-svgrepo-com (1).svg";
import FastDark from "../../assets/fast-shopping-svgrepo-com.svg";
import NeedsLight from "../../assets/happy-svgrepo-com (1).svg";
import NeedsDark from "../../assets/happy-svgrepo-com.svg";
import { useTheme } from "../../common/ThemeContext";
import NumIconLight from "../../assets/phone-svgrepo-com (1).svg";
import NumIconDark from "../../assets/phone-svgrepo-com.svg";

function About() {
    const { theme, toggleTheme } = useTheme();

  const Expert = theme === "light" ? ExpertDark : ExpertLight;
  const Needs = theme === "light" ? NeedsDark : NeedsLight;
  const Fast = theme === "light" ? FastDark : FastLight;
  const ContactFast = theme === "light" ? NumIconDark : NumIconLight;

  return (
    <section id="about" className={styles.container}>
      <h1> Apie mus</h1>
      <div className={styles.Intro}>
        <p>321auto - naudotais automobiliais su garantija prekiaujanti įmonė.</p>
        <br />
        <br />
        <h1>Kodėl pas mus pirkti apsimoka?</h1>
      </div>
      <Advantages></Advantages>
      <div className={styles.info}>
        <div>
          <img src={Fast} alt="Speed icon" />
          <p>
            Greitai sutvarkome registraciją, lizingą, draudimą. Tai atliksime už
            Jus vietoje arba nuotoliniu būdu.
          </p>
        </div>
        <div>
          <img src={Expert} alt="building icon" />
          <p>
            Esame savo srities ekspertai. Turime sukaupę didelę patirtį
            automobilių versle.
          </p>
        </div>
        <div>
          <img src={Needs} alt="smile" />
          <p>
            Visuomet įsigiliname i kliento poreikius ir patariame automobilio
            įsigijimo ir eksploatacijos klausimais.
          </p>
        </div>
        <div>
          <img src={ContactFast} alt="phone" />
          <p>
            Siekdami kokybiško aptarnavimo, prašome, dėl automobilio apžiūros
            susitarti iš anksto.
          </p>
        </div>
      </div>
      <div className="formGroup">
        <a href="/contact">
          <button className="hover btn" type="submit">
            Susisiekite
          </button>
        </a>
      </div>
    </section>
  );
}

export default About;
