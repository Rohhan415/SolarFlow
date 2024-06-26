import styles from "./StepsDescription.module.css";

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
        <h4 className={styles.installationStepNumbersText}>
          Krok
          <p>{number}</p>
        </h4>
      </div>
      <h5 className={styles.moduleHeader}>{title}</h5>
      <span className={styles.StepNumbersParagraph}>{description}</span>
    </div>
  );
};

export default StepsDescription;
