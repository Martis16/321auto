import React from 'react';
import styles from './CarsStyles.module.css'
import CarHotel from '../../assets/pexels-pixabay-63294.jpg'

function Cars() {
  return (
    <section id="cars" className={styles.container}>
        <div className={styles.wallpaper}>
            <p>Raskite sau tinkama automobilį jau šiandien!</p>
            <img src={CarHotel} alt="Cars Garage" />
        </div>
        <div className={styles.carusel}></div>

    </section>
  );
}

export default Cars;