import React from 'react';
import styles from './CarsStyles.module.css'

function Cars() {
  return (
    <section id="cars" className={styles.container}>
        <div className={styles.wallpaper}>
            <p>Raskite sau tinkama automobilį jau šiandien!</p>
            
        </div>
        <div className={styles.carusel}></div>

    </section>
  );
}

export default Cars;