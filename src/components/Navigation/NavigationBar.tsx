import { NavLink, useLocation } from "react-router-dom";
import styles from "./NavBar.module.css";
import Logo from "../../assets/logo-no-background.png";
import { useNavBarContext } from "../../contexts/useNavBarContext";
import MobileNavigationBar from "./MobileNavigationBar";

function NavigationBar() {
  const { showNavigation, activeMobileNavBar, isMobile, toggleOpen } =
    useNavBarContext();

  const location = useLocation();

  const headerClass =
    location.pathname === "/policy"
      ? styles.fixedHeaderPolicy
      : styles.fixedHeader;
  return (
    <header className={headerClass}>
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
          <div
            className={
              showNavigation ? `${styles.navLogoMove}` : `${styles.navLogo}`
            }
          >
            <NavLink to="/">
              <img
                rel="preload"
                src={Logo}
                className={
                  showNavigation
                    ? `${styles.containerMove}`
                    : `${styles.container} `
                }
                alt="Logo Firmy"
              />
            </NavLink>
          </div>

          {activeMobileNavBar ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={styles.navButtonMobile}
              onClick={toggleOpen}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          ) : (
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
          )}

          {isMobile && <MobileNavigationBar />}

          <ul className={`${styles.NavList} `}>
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
