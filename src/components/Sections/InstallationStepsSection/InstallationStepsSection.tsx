import styles from "./InstallationStepsSection.module.css";
import SectionHeader from "./SectionHeader";
import StepArrow from "./StepArrow";
import StepsDescription from "./StepsDescription";

function InstallationStepsSection() {
  return (
    <section className={styles.container}>
      <div className={styles.containerWrapper}>
        <SectionHeader />

        <div className={styles.installationSteps}>
          <StepsDescription
            title="ZAPLANUJMY RAZEM TWOJĄ INSTALACJĘ"
            description="Napisz lub zadzwoń, skontaktuj się z naszymi specjalistami."
            number="01"
          />
          <StepArrow />

          <StepsDescription
            title="BADANIE POTRZEB"
            description="Po zebraniu niezbędnych danych, przygotujemy dla Ciebie indywidualną ofertę cenową."
            number="02"
          />

          <StepArrow />

          <StepsDescription
            title="WYCENA I INSTALACJA"
            description="Otrzymasz kompleksową propozycję wraz z szczegółową kalkulacją kosztów, ustalimy również termin instalacji paneli."
            number="03"
          />
        </div>
      </div>
    </section>
  );
}

export default InstallationStepsSection;
