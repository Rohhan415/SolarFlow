import styles from "./SecondSlide.module.css";
import { NavLink } from "react-router-dom";
function SecondSlide() {
  return (
    <div className={styles.container}>
      <h2 className={styles.slideTitle}>
        Twój Komfort i Świeżość Rozpoczynają Się z Nami
      </h2>
      <h1 className={styles.slideMainTitle}>KLIMATYZACJE</h1>
      <p className={styles.slideInformation}>
        Klimatyzacja dla Twojego domu, apartamentu, biura czy firmy. Wybierzemy
        klimatyzator idealnie dopasowany do Twoich konkretnych wymagań.
      </p>
      <div className={styles.slideButtonBorder}>
        <NavLink to="/contact" className={styles.slideButton}>
          WIĘCEJ INFORMACJI
        </NavLink>
      </div>
    </div>
  );
}

export default SecondSlide;
