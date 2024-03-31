import styles from "./InstallationStepsSection.module.css";
import InstallationStepsSectionHeader from "./InstallationStepsSectionHeader";
import StepArrow from "./StepArrow";
import StepsDescription from "./StepsDescription";

function InstallationStepsSection() {
  return (
    <section className={`${styles.container}`}>
      <div className={`${styles.containerWrapper}`}>
        <InstallationStepsSectionHeader />

        <div className={`${styles.installationSteps}`}>
          <StepsDescription
            title="ZAPLANUJ Z NAMI SWOJĄ INSTALACJĘ"
            description="Napisz lub zadzwoń do nas, aby porozmawiać z naszymi specjalistami."
            number="01"
          />

          <div>
            <StepArrow />
          </div>
          <StepsDescription
            title="BADANIE POTRZEB"
            description="o zebraniu potrzebnych informacji zostanie przygotowana dla Państwa wycena."
            number="02"
          />
          <div>
            <StepArrow />
          </div>
          <StepsDescription
            title="WYCENA I INSTALACJA"
            description="Klienta otrzyma ofertę wraz ze szczegółową wyceną, zostanie ustalony termin i sposób montażu paneli."
            number="03"
          />
          <div>
            <StepArrow />
          </div>
          <StepsDescription
            title="ZAPLANUJ Z NAMI SWOJĄ INSTALACJĘ"
            description="Napisz lub zadzwoń do nas, aby porozmawiać z naszymi specjalistami."
            number="04"
          />
        </div>
      </div>
    </section>
  );
}

export default InstallationStepsSection;
