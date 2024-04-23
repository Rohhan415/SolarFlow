import styles from "./solution.module.css";

import { useModalContext } from "../../../../contexts/useModalContext";

interface SolutionProps {
  title: string;
  description: string;
  imgSrc: string;
  srcSet: string;
  onImageClick: () => void;
}

function Solution({
  title,
  description,
  imgSrc,
  srcSet,
  onImageClick,
}: SolutionProps) {
  const { handleModalOpen } = useModalContext();

  console.log(srcSet);

  const handleClick = () => {
    handleModalOpen();
    onImageClick();
  };

  return (
    <div className={styles.solutionContainer}>
      <div className={styles.imageContainer}>
        <img
          className={styles.solutionImage}
          src={imgSrc}
          srcSet={srcSet}
          alt="Solution"
        />
        <button className={styles.imageButton} onClick={handleClick}>
          Zobacz więcej
        </button>
      </div>

      <div className={styles.solutionDescriptionContainer}>
        <h3 className={styles.solutionTitle}>{title}</h3>
        <div className={styles.solutionDescription}>{description}</div>
      </div>
    </div>
  );
}

export default Solution;
