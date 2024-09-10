import React from "react";
import styles from "./ContactInfoStyles.module.css";
import NumIconLight from '../../assets/phone-svgrepo-com (1).svg';
import NumIconDark from '../../assets/phone-svgrepo-com.svg';
import EmailIconLight from '../../assets/email-14-svgrepo-com (1).svg';
import EmailIconDark from '../../assets/email-14-svgrepo-com.svg';
import AddressIconLight from '../../assets/address-svgrepo-com (4).svg';
import AddressIconDark from '../../assets/address-svgrepo-com.svg';
import { useTheme } from "../../common/ThemeContext";


function ContactInfo() {
    
    const { theme, toggleTheme } = useTheme();

    const NumberIcon = theme === 'light' ? NumIconDark : NumIconLight;
    const EmailIcon = theme === 'light' ? EmailIconDark : EmailIconLight;
    const AddressIcon = theme === 'light' ? AddressIconDark : AddressIconLight;



  return (
    <section id="contactinfo" className={styles.container}>
      <h1>Kontaktai</h1>
      <h3> 321auto</h3>
      <div className={styles.icons}>
        <div>
            <img src={NumberIcon} alt="number icon" />
            <p> Tel. +37068713398 </p>
        </div>
        <div>
            <img src={EmailIcon} alt="email icon" />
            <p> info@321auto.lt </p>
        </div>
        <div>
            <img src={AddressIcon} alt="address icon" />
            <p> Baltų pr. 55, Kaunas  </p>
        </div>
      </div>

    </section>
  );
}

export default ContactInfo;
