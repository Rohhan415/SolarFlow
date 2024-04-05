import styles from "./EnergySolutionsSection.module.css";
import img2 from "../../../assets/image2.jpg";

function EnergySolutionsSection() {
  return (
    <section className={styles.container}>
      <div className={styles.energySolutions}>
        <div>
          {" "}
          <img className={styles.solutionImage} src={img2} />
          <div className={styles.solutionDescriptionContainer}>
            <h3 className={styles.solutionTitle}>Fotowoltaika</h3>
            <div className={styles.solutionDescription}>
              Fotowoltaika to technologia, która wykorzystuje energię słoneczną
              do produkcji elektryczności.Panele mogą być zamontowane na dachu
              domu lub na ziemi co daje szerokie możliwości wykorzystania
              instalacji.
            </div>
          </div>
        </div>
        <div>
          {" "}
          <img className={styles.solutionImage} src={img2} />
          <div className={styles.solutionDescriptionContainer}>
            <h3 className={styles.solutionTitle}>Pompy Ciepła</h3>
          </div>
        </div>
        <div>
          {" "}
          <img className={styles.solutionImage} src={img2} />
          <div className={styles.solutionDescriptionContainer}>
            <h3 className={styles.solutionTitle}>Klimatyzacja</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EnergySolutionsSection;
