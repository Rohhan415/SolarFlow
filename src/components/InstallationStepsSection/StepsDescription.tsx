import styles from "./InstallationStepsSection.module.css";

interface StepsDescriptionProps {
  title: string;
  description: string;
  number: string;
}

const StepsDescription: React.FC<StepsDescriptionProps> = ({
  title,
  description,
  number,
}) => {
  return (
    <div className={styles.installationStepContainer}>
      <div className={styles.installationStepNumbers}>
        <h6 className={styles.installationStepNumbersText}>
          Krok
          <p>{number}</p>
        </h6>
      </div>
      <h4 className={styles.moduleHeader}>{title}</h4>
      <span className={styles.StepNumbersParagraph}>{description}</span>
    </div>
  );
};

export default StepsDescription;
