import styles from "./ThirdSlide.module.css";
import { NavLink } from "react-router-dom";
function ThirdSlide() {
  return (
    <div className={styles.container}>
      <h2 className={styles.slideTitle}>
        Nowoczesne Rozwiązania dla Twojego Komfortu
      </h2>
      <h1 className={styles.slideMainTitle}>POMIARY CIEPŁA</h1>
      <p className={styles.slideInformation}>
        W ramach naszej usługi, za pomocą bezzałogowego statku powietrznego
        przeprowadzamy pomiary trzymania ciepła. Pozwala nam to dokładnie ocenić
        efektywność izolacji budynku oraz wykryć ewentualne straty.
      </p>
      <div className={styles.slideButtonBorder}>
        <NavLink to="/contact" className={styles.slideButton}>
          CZYTAJ WIĘCEJ
        </NavLink>
      </div>
    </div>
  );
}

export default ThirdSlide;
