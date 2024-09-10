import React, { useEffect } from "react";
import styles from "./ShowroomStyles.module.css";
import autoplius from "../../assets/1275490916autoplius_logo-removebg-preview.png";
import VWGTD from "../../assets/volkswagen-golf-2-0-l-universalas-2016-dyzelinas.jpg";
import car1 from "../../assets/toyota-auris-1-8-l-hecbekas-2018-benzinas-elektra.jpg";
import car2 from "../../assets/mazda-cx-3-2-0-l-visureigis-krosoveris-2015-benzinas.jpg";
import car3 from "../../assets/toyota-auris-1-8-l-hecbekas-2018-benzinas-elektra.jpg";
import car4 from "../../assets/mazda-cx-3-2-0-l-visureigis-krosoveris-2015-benzinas.jpg";
import Slider from '../../components/Slider/Slider';

function Showroom() {
    const images = [
      VWGTD,
      car1,
      car2,
    ];

  return (
    <section id="showroom" className={styles.container}>
      <h1>Automobilių galerija</h1>
      <Slider images={images}/>
      <div className={styles.autoplius}>
        <p>Šiuo metu parduodamus automobilius rasite čia:</p>
        <a href="https://m.autoplius.lt/321auto/skelbimai/automobiliai">
          <img src={autoplius} alt="autoplius logo" />
        </a>
      </div>
    </section>
  );
}

export default Showroom;
