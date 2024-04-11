import styles from "./EnergySolutionsSection.module.css";

import { solutions } from "./components/solutions";
import Solution from "./components/Solution";
import Modal from "./components/Modal";
import { useState } from "react";
import Header from "./components/Header";

export type SolutionType = {
  title: string;
  description: string;
  imgSrc: string;
  modalTitle: string;
  modalDescription: string;
  modalImgSrc: string;
  key: number;
};

function EnergySolutionsSection() {
  const [currentSolution, setCurrentSolution] = useState<SolutionType>(
    solutions[0]
  );

  const handleSolutionClick = (solution: SolutionType) => {
    setCurrentSolution(solution);
  };

  return (
    <section className={styles.container}>
      <Header />
      <div className={styles.energySolutions}>
        {solutions.map((solution) => (
          <Solution
            key={solution.key}
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
