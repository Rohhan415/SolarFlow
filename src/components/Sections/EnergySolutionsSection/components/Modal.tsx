import styles from "./modal.module.css";
import { useModalContext } from "../../../../contexts/useModalContext";

function Modal() {
  const { modalOpen, handleModalClose } = useModalContext();

  return (
    <div
      className={`${styles.popup} ${
        modalOpen ? styles.modalOpen : styles.modalClose
      }`}
      onClick={handleModalClose}
    >
      <div className={styles.popupContent}>
        <button className={styles.buttonClose} onClick={handleModalClose}>
          Close
        </button>
        <h1>Modal Title</h1>
        <p>This is the modal content. It can be anything you want.</p>
      </div>
    </div>
  );
}

export default Modal;
