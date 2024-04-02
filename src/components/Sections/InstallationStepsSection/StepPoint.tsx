import styles from "./InstallationStepsSection.module.css";

interface StepsDescriptionProps {
  number: string;
}

const StepPoint: React.FC<StepsDescriptionProps> = ({ number }) => {
  return (
    <div className={styles.installationStepNumbers}>
      <h6 className={styles.installationStepNumbersText}>
        Krok
        <p>{number}</p>
      </h6>
    </div>
  );
};

export default StepPoint;
