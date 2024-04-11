import styles from "./header.module.css";

function Header() {
  return (
    <div className={styles.installationStepsHeader}>
      <div className={styles.moduleHeaderWrapper}>
        <h1 className={styles.moduleHeader}>
          SolarFlow Ekologiczna Rewolucja Energii Przyszłości
        </h1>
        <p className={styles.moduleHeaderParagraph}>
          Realizacje nie tylko w Powiecie Pajęczańskim
        </p>
      </div>
      <div className={styles.moduleHeaderDescription}>
        Jako firma <span className={styles.color}>SolarFlow</span>, działamy z
        powodzeniem w Powiecie Pajęczańskim i szeregu innych lokalizacji.
        Zauważamy coraz większe zainteresowanie instalacjami fotowoltaicznymi,
        klimatyzacją oraz pompami ciepła nie tylko wśród gospodarstw domowych,
        lecz także przedsiębiorstw. Nasze usługi obejmują kompleksową obsługę
        inwestycji, dostosowaną do indywidualnych potrzeb klientów. Dzięki
        naszym rozwiązaniom, oszczędności oraz korzyści dla budżetu stają się
        realne na długie lata. W obliczu ciągłego wzrostu cen energii
        elektrycznej, inwestowanie w energię odnawialną staje się coraz bardziej
        opłacalne. Jeśli poszukujesz zaufanego partnera w dziedzinie energii
        odnawialnej, SolarFlow z przyjemnością pomoże Ci zrealizować Twoje cele,
        niezależnie od skali projektu.
      </div>
    </div>
  );
}

export default Header;
