import styles from "./solution.module.css";
import Modal from "./Modal";
import { useModalContext } from "../../../../contexts/useModalContext";

interface SolutionProps {
  title: string;
  description: string;
  imgSrc: string;
}

function Solution({ title, description, imgSrc }: SolutionProps) {
  const { handleModalOpen } = useModalContext();

  return (
    <div className={styles.solutionContainer}>
      <div className={styles.imageContainer}>
        <img className={styles.solutionImage} src={imgSrc} alt="Solution" />
        <button className={styles.imageButton} onClick={handleModalOpen}>
          Zobacz więcej
        </button>
      </div>
      <Modal />
      <div className={styles.solutionDescriptionContainer}>
        <h3 className={styles.solutionTitle}>{title}</h3>
        <div className={styles.solutionDescription}>{description}</div>
      </div>
    </div>
  );
}

export default Solution;
