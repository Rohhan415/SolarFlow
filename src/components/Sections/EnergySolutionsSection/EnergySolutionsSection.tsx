import styles from "./EnergySolutionsSection.module.css";
import img2 from "../../../assets/image2.jpg";
import img11 from "../../../assets/image11.jpg";
import img7 from "../../../assets/image7.jpg";

import Solution from "./components/Solution";

function EnergySolutionsSection() {
  return (
    <section className={styles.container}>
      <div className={styles.energySolutions}>
        <Solution
          title="Fotowoltaika"
          description="Fotowoltaika to technologia, która wykorzystuje energię słoneczną do
          produkcji elektryczności. Panele mogą być zamontowane na dachu domu
          lub na ziemi co daje szerokie możliwości wykorzystania instalacji."
          imgSrc={img2}
        />
        <Solution
          title="Pompy Ciepła"
          description="Pompy ciepła to urządzenia, które używają energii z otoczenia do
          ogrzewania lub chłodzenia pomieszczeń. Działają na zasadzie
          przekazywania ciepła z jednego miejsca do drugiego."
          imgSrc={img11}
        />
        <Solution
          title="Klimatyzacja"
          description="Klimatyzacja to system, który reguluje temperaturę, wilgotność i
          czystość powietrza w pomieszczeniach, zapewniając komfortowe
          warunki życia. Działa poprzez chłodzenie lub ogrzewanie powietrza
          oraz usuwanie wilgoci i zanieczyszczeń."
          imgSrc={img7}
        />
      </div>
    </section>
  );
}

export default EnergySolutionsSection;
