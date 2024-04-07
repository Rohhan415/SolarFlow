import styles from "./modal.module.css";
import { useModalContext } from "../../../../contexts/useModalContext";
import { SolutionType } from "../EnergySolutionsSection";
import useEscapeKey from "../../../../hooks/useEscapeKey";

function Modal({ solution }: { solution: SolutionType }) {
  const { modalOpen, handleModalClose } = useModalContext();

  // Close the modal when the escape key is pressed
  useEscapeKey(handleModalClose);

  // Prevent the modal from closing when the content is clicked
  const handleContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div
      className={`${styles.popup} ${
        modalOpen ? styles.modalOpen : styles.modalClose
      }`}
      onClick={handleModalClose}
    >
      <div className={styles.popupContent} onClick={handleContentClick}>
        <button className={styles.buttonClose} onClick={handleModalClose}>
          Close
        </button>
        <h1>{solution.modalTitle}</h1>
        <p>{solution.modalDescription}</p>
        <img src={solution.modalImgSrc} alt={solution.modalTitle} />
      </div>
    </div>
  );
}

export default Modal;
