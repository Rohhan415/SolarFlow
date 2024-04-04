import styles from "./FirstSlide.module.css";
import { NavLink } from "react-router-dom";
function FirstSlide() {
  return (
    <div className={styles.container}>
      <h2 className={styles.slideTitle}>
        Twoja Droga do Odnawialnej Energii Zaczyna Się Tutaj
      </h2>
      <h1 className={styles.slideMainTitle}>
        EKOLOGICZNA ENERGIA <br /> DLA TWOJEGO DOMU
      </h1>
      <p className={styles.slideInformation}>
        Oferujemy instalację paneli fotowoltaicznych, profesjonalne doradztwo
        oraz kompleksową obsługę klienta. Skontaktuj się z nami już dziś!
      </p>
      <div className={styles.slideButtonBorder}>
        <NavLink to="/contact" className={styles.slideButton}>
          SZCZEGÓŁY
        </NavLink>
      </div>
    </div>
  );
}

export default FirstSlide;
