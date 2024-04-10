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

  const getModalClass = (solutionTitle: number) => {
    switch (solutionTitle) {
      case 1:
        return styles.modalHeadingFotowoltaika;
      case 2:
        return styles.modalHeadingPompy;
      case 3:
        return styles.modalHeadingKlimatyzacja;
      default:
        return "";
    }
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
          loading="lazy"
          className={styles.modalImage}
          src={solution.modalImgSrc}
          alt={solution.modalTitle}
        />
        <div className={styles.modalInformation}>
          {" "}
          <h1 className={getModalClass(solution.key)}>{solution.modalTitle}</h1>
          <p className={styles.modalDescription}>{solution.modalDescription}</p>
        </div>
        <button className={styles.buttonClose} onClick={handleModalClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-12 h-12 transition-colors duration-200 ease-out hover:text-[#83c341]"
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
