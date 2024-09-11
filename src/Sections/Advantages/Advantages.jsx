import React, { useRef, useState } from "react";
import styles from "./AdvantagesStyles.module.css";
import CarVertical from "../../assets/share.png";
import Insurance from "../../assets/640-car-purchase-agreement-providing-financial-services-and-car-insurance-financial-car-loans-lease-agreement-or-lease-concept-customers-sign-insurance-documents-or-car-rental-forms.jpg";
import Inspection from "../../assets/pexels-artempodrez-8986177.jpg";
import Downpayment from "../../assets/pexels-mikhail-nilov-6963017.jpg";
import TA from "../../assets/pexels-gustavo-fring-6870332.jpg";
import { useTheme } from "../../common/ThemeContext";
import leftArrowLight from "../../assets/left-arrow-svgrepo-com (1).svg";
import leftArrowDark from "../../assets/left-arrow-svgrepo-com.svg";
import rightArrowLight from "../../assets/right-arrow-svgrepo-com (1).svg";
import rightArrowDark from "../../assets/right-arrow-svgrepo-com.svg";

function Advantages() {
  const { theme } = useTheme();

  const leftarrow = theme === "light" ? leftArrowDark : leftArrowLight;
  const rightarrow = theme === "light" ? rightArrowDark : rightArrowLight;

  const slideRef = useRef(null);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  const handleNext = () => {
    const slide = slideRef.current;
    slide.appendChild(slide.firstChild);
  };

  const handlePrev = () => {
    const slide = slideRef.current;
    slide.insertBefore(slide.lastChild, slide.firstChild);
  };

  const handleTouchStart = (e) => {
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX - touchEndX > 50) {
      handleNext(); 
    }

    if (touchEndX - touchStartX > 50) {
      handlePrev(); 
    }
  };

  const handleTouchMove = (e) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  return (
    <div className={styles.container}>
      <div
        className={styles.slide}
        ref={slideRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className={styles.item}>
          <img src={CarVertical} alt="Carvertical logo" />
          <div className={styles.content}>
            <h3>CARVERTICAL</h3>
            <p>Automobiliams paruošta CarVertical ataskaita</p>
          </div>
        </div>
        <div className={styles.item}>
          <img src={Insurance} alt="Insurance image" />
          <div className={styles.content}>
            <h3>GARANTIJA</h3>
            <p>
              Iki 36 mėn. Garantija suteikiama tiek fiziniams tiek juridiniams
              asmenims. Garantijos sąlygos ir kaina aptariama kiekvienu atveju
              individualiai.
            </p>
          </div>
        </div>
        <div className={styles.item}>
          <img src={Downpayment} alt="Downpayment image" />
          <div className={styles.content}>
            <h3>PRADINIS ĮNAŠAS</h3>
            <p>Pradinis įnašas už perkamą automobilį nuo 0,00 eur.</p>
          </div>
        </div>
        <div className={styles.item}>
          <img src={Inspection} alt="Car inspection image" />
          <div className={styles.content}>
            <h3>PATIKRA</h3>
            <p>Automobiliams atlikta profesionali techninė patikra.</p>
          </div>
        </div>
        <div className={styles.item}>
          <img src={TA} alt="Car TA image" />
          <div className={styles.content}>
            <h3>TECHNINĖ APŽIŪRA</h3>
            <p>Visi automobiliai turi galiojančią techninę apžiūrą.</p>
          </div>
        </div>
      </div>
      <div className={styles.button}>
        <button className={styles.prev} onClick={handlePrev}>
          <img src={leftArrowDark} alt="leftarrow" />
        </button>
        <button className={styles.next} onClick={handleNext}>
          <img src={rightArrowDark} alt="rightarrow" />
        </button>
      </div>
    </div>
  );
}

export default Advantages;
