import styles from "./EnergySolutionsSection.module.css";
import img2 from "../../../assets/image2.jpg";
import img11 from "../../../assets/image11.jpg";
import img7 from "../../../assets/image7.jpg";

import Solution from "./components/Solution";
import Modal from "./components/Modal";
import { useState } from "react";

export type SolutionType = {
  title: string;
  description: string;
  imgSrc: string;
  modalTitle: string;
  modalDescription: string;
  modalImgSrc: string;
};

const solutions: SolutionType[] = [
  {
    title: "Fotowoltaika",
    description:
      "Fotowoltaika to technologia, która wykorzystuje energię słoneczną do produkcji elektryczności. Panele mogą być zamontowane na dachu domu lub na ziemi co daje szerokie możliwości wykorzystania instalacji.",
    imgSrc: img2,
    modalTitle: "Fotowoltaika",
    modalDescription: "Fotowoltaika",
    modalImgSrc: img2,
  },
  {
    title: "Pompy Ciepła",
    description:
      "Pompy ciepła to urządzenia, które używają energii z otoczenia do ogrzewania lub chłodzenia pomieszczeń. Działają na zasadzie przekazywania ciepła z jednego miejsca do drugiego.",
    imgSrc: img11,
    modalTitle: "Pompy Ciepła",
    modalDescription: "Pompy Ciepła",
    modalImgSrc: img11,
  },
  {
    title: "Klimatyzacja",
    description:
      "Klimatyzacja to system, który reguluje temperaturę, wilgotność i czystość powietrza w pomieszczeniach, zapewniając komfortowe warunki życia. Działa poprzez chłodzenie lub ogrzewanie powietrza oraz usuwanie wilgoci i zanieczyszczeń.",
    imgSrc: img7,
    modalTitle: "Klimatyzacja",
    modalDescription: "Klimatyzacja",
    modalImgSrc: img7,
  },
];
function EnergySolutionsSection() {
  const [currentSolution, setCurrentSolution] = useState<SolutionType>(
    solutions[0]
  );

  const handleSolutionClick = (solution: SolutionType) => {
    setCurrentSolution(solution);
  };

  return (
    <section className={styles.container}>
      <div className={styles.energySolutions}>
        {solutions.map((solution) => (
          <Solution
            key={solution.title}
            title={solution.title}
            description={solution.description}
            imgSrc={solution.imgSrc}
            onImageClick={() => handleSolutionClick(solution)}
          />
        ))}
        <Modal solution={currentSolution} />
      </div>
    </section>
  );
}

export default EnergySolutionsSection;
