import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";
import { useNavBarContext } from "../../contexts/useNavBarContext";

function MobileNavigationBar() {
  const { activeMobileNavBar, toggleOpen } = useNavBarContext();
  return (
    <div
      className={`${styles.modalContainer} ${
        activeMobileNavBar ? styles.active : ""
      }`}
    >
      <ul className={`${styles.mobileNavList} `}>
        <li className={styles.navButton}>
          <NavLink to="/" onClick={toggleOpen}>
            Strona Główna
          </NavLink>
        </li>
        <li className={styles.navButton}>
          <NavLink to="/contact" onClick={toggleOpen}>
            Kontakt
          </NavLink>
        </li>
        <li className={styles.navButton}>
          <NavLink to="*" onClick={toggleOpen}>
            O nas
          </NavLink>
        </li>
        <li className={styles.navButton}>
          <NavLink to="*" onClick={toggleOpen}>
            Oferta
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default MobileNavigationBar;
