import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";
import Logo from "../../assets/logo-no-background.png";

function NavigationBar() {
  const [scrollWatcher, setScrollWatcher] = useState({ y: 0, lastY: 0 });
  const [showNavigation, setShowNavigation] = useState(true);
  const [activeMobileNavBar, setActiveMobileNavBar] = useState(false);

  const toggleOpen = () => {
    setActiveMobileNavBar(!activeMobileNavBar);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth > 704) {
        setScrollWatcher((prevState) => {
          return {
            y: window.scrollY,
            lastY: prevState.y,
          };
        });
        setShowNavigation(window.scrollY > 1 || scrollWatcher.y > 1);
      }
    };
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollWatcher.y]);

  return (
    <header className={styles.fixedHeader}>
      <div
        className={
          showNavigation ? `${styles.containerMove}` : `${styles.container} `
        }
      >
        <div
          className={
            showNavigation
              ? `${styles.navigationBarMove}`
              : `${styles.navigationBar}`
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.3}
            stroke="currentColor"
            className={styles.navButtonMobile}
            onClick={toggleOpen}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>

          <div
            className={
              showNavigation ? `${styles.navLogoMove}` : `${styles.navLogo}`
            }
          >
            <img src={Logo} className={styles.navTitle} alt="Logo Firmy" />
          </div>

          <ul
            className={`${styles.NavList} ${
              activeMobileNavBar ? "" : styles.hidden
            }`}
          >
            <li className={styles.navButton}>
              <NavLink to="/">Strona Główna</NavLink>
            </li>
            <li className={styles.navButton}>
              <NavLink to="/contact">Kontakt</NavLink>
            </li>
            <li className={styles.navButton}>
              <NavLink to="*">O nas</NavLink>
            </li>
            <li className={styles.navButton}>
              <NavLink to="*">Oferta</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default NavigationBar;
