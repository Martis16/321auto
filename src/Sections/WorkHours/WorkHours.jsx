import React from "react";
import styles from "./WorkHoursStyles.module.css";

function WorkHours() {
  return (
    <section id="workhours" className={styles.container}>
      <h1>Darbo laikas</h1>
      <div className={styles.days}>
        <div><p>Pirmadienis</p>      <p>9:00-18:00</p> </div>
        <div><p>Antradienis </p>      <p>9:00-18:00</p> </div>
        <div><p>Trečiadienis</p>      <p>9:00-18:00</p> </div>
        <div><p>Ketvirtadienis</p>      <p>9:00-18:00</p> </div>
        <div><p>Penktadienis</p>      <p>9:00-18:00</p> </div>
        <div><p>Šeštadienis</p>      <p>9:00-15:00</p> </div>
        <div><p>Sekmadienis</p>      <p>Nedirbame</p> </div>

      </div>
    </section>
  );
}

export default WorkHours;
