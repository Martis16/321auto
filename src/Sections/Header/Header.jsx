import React, { useState, useEffect } from "react";
import styles from "./HeaderStyles.module.css";
import CarLogo from "../../assets/321autoImage..png";
import CarLogoLight from '../../assets/321autoImageLight.png';
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import { useTheme } from "../../common/ThemeContext";
import Menu from "../../components/Menu/DropdownMenu";
import MenuCloseLight from "../../assets/close-square-svgrepo-com (1).svg";
import MenuCloseDark from "../../assets/close-square-svgrepo-com (2).svg";
import MenuDark from "../../assets/menu-svgrepo-com (1).svg";
import MenuLight from "../../assets/menu-svgrepo-com.svg";

function Header() {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isComputer, setIsComputer] = useState(window.innerWidth >= 1000);

  const ThemeIcon = theme === "light" ? sun : moon;
  const LogoIcon = theme === "light" ? CarLogo : CarLogoLight;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Detect window resize to set computer screen width
  useEffect(() => {
    const handleResize = () => {
      setIsComputer(window.innerWidth >= 1000);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section id="header" className={styles.container}>
      <div className={styles.HeaderMenu}>
        <div className={styles.header}>
          <a href="/">
            <img src={LogoIcon} alt="CarLogo" className={styles.logo} />
          </a>
        </div>
        
        {/* Always show ThemeIcon on computer screens */}
        {isComputer && (
          <img
            className={styles.colorMode}
            src={ThemeIcon}
            alt="day&night icon"
            onClick={toggleTheme}
          />
        )}

        {!isComputer && isMenuOpen && (
          <img
            className={styles.colorMode}
            src={ThemeIcon}
            alt="day&night icon"
            onClick={toggleTheme}
          />
        )}

        {!isComputer && (
          <img
            className={styles.menuIcon}
            src={
              isMenuOpen
                ? theme === "light"
                  ? MenuCloseLight
                  : MenuCloseDark
                : theme === "light"
                ? MenuLight
                : MenuDark
            }
            alt="menu icon"
            onClick={toggleMenu}
          />
        )}
      </div>
      <Menu isMenuOpen={isMenuOpen || isComputer} />
    </section>
  );
}

export default Header;
