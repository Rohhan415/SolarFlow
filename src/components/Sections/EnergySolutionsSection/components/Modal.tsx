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
        <img
          className={styles.popupImage}
          src={solution.modalImgSrc}
          alt={solution.modalTitle}
        />
        <h1>{solution.modalTitle}</h1>
        <p>{solution.modalDescription}</p>
        <button className={styles.buttonClose} onClick={handleModalClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Modal;
