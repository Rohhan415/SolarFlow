import styles from "./EnergySolutionsSection.module.css";
import img2 from "../../../assets/image2.jpg";
import img11 from "../../../assets/image11.jpg";
import img7 from "../../../assets/image7.jpg";

import { useModalContext } from "../../../contexts/useModalContext";
import Modal from "./components/Modal";

function EnergySolutionsSection() {
  const { handleModalOpen } = useModalContext();

  return (
    <section className={styles.container}>
      <div className={styles.energySolutions}>
        <div className={styles.solutionContainer}>
          <div className={styles.imageContainer}>
            <img className={styles.solutionImage} src={img2} alt="Solution" />
            <button className={styles.imageButton} onClick={handleModalOpen}>
              Zobacz więcej
            </button>
          </div>
          <Modal />
          <div className={styles.solutionDescriptionContainer}>
            <h3 className={styles.solutionTitle}>Fotowoltaika</h3>
            <div className={styles.solutionDescription}>
              Fotowoltaika to technologia, która wykorzystuje energię słoneczną
              do produkcji elektryczności. Panele mogą być zamontowane na dachu
              domu lub na ziemi co daje szerokie możliwości wykorzystania
              instalacji.
            </div>
          </div>
        </div>
        <div className={styles.solutionContainer}>
          <img className={styles.solutionImage} src={img11} />
          <div className={styles.solutionDescriptionContainer}>
            <h3 className={styles.solutionTitle}>Pompy Ciepła</h3>
            <div className={styles.solutionDescription}>
              Pompy ciepła to urządzenia, które używają energii z otoczenia do
              ogrzewania lub chłodzenia pomieszczeń. Działają na zasadzie
              przekazywania ciepła z jednego miejsca do drugiego.
            </div>
          </div>
        </div>
        <div className={styles.solutionContainer}>
          <img className={styles.solutionImage} src={img7} />
          <div className={styles.solutionDescriptionContainer}>
            <h3 className={styles.solutionTitle}>Klimatyzacja</h3>
            <div className={styles.solutionDescription}>
              Klimatyzacja to system, który reguluje temperaturę, wilgotność i
              czystość powietrza w pomieszczeniach, zapewniając komfortowe
              warunki życia. Działa poprzez chłodzenie lub ogrzewanie powietrza
              oraz usuwanie wilgoci i zanieczyszczeń.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EnergySolutionsSection;
