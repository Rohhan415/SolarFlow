import styles from "./AboutUsSection.module.css";

function AboutUsText() {
  return (
    <>
      <div className={styles.aboutUsColumCompositionText}>
        <div className={styles.aboutUsColumCompositionTextHeading}>
          <p className={styles.aboutUsColumCompositionTextParagraph}>O nas</p>
          <h1 className={styles.aboutUsColumCompositionTextHeader}>
            SolarFlow czyli Fotowoltaika, Pompy Ciepła oraz Klimatyzacja dla
            każdego
          </h1>
        </div>
        <div className={styles.aboutUsColumCompositionTextEntry}>
          Zapewniamy kompleksowe usługi związane z energią słoneczną, obejmujące
          każdy etap od doradztwa i projektowania systemu, aż po montaż i
          uruchomienie instalacji. Nasza misja to zapewnienie Ci nie tylko
          nowoczesnych rozwiązań energetycznych, ale także pełnego wsparcia na
          każdym etapie Twojej podróży ku zrównoważonej przyszłości.
        </div>
        <p className={styles.aboutUsColumCompositionTextSecondHeader}>
          <strong>Dlaczego warto nam zaufać?</strong>
        </p>
        <div className={styles.aboutUsColumCompositionTextEntry}>
          Jesteśmy dumni z naszego zespołu certyfikowanych specjalistów, którzy
          posiadają nie tylko odpowiednie kwalifikacje, ale także bogate
          doświadczenie w dziedzinie montażu paneli fotowoltaicznych i
          instalacji elektrycznych. Wspólnie pracujemy, by zapewnić Ci najwyższą
          jakość usług i satysfakcję z efektów.
          <p className={styles.aboutUsTextColor}>
            Dołącz do naszej społeczności i zainwestuj w przyszłość już dziś!
          </p>
        </div>
      </div>
    </>
  );
}

export default AboutUsText;
