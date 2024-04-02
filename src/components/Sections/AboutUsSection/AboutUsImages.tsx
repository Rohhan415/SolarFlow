import styles from "./AboutUsSection.module.css";
import image4 from "../../../assets/image4.jpg";
import image9 from "../../../assets/image9.jpg";
import { NavLink } from "react-router-dom";

function AboutUsImages() {
  return (
    <>
      <div className={styles.aboutUsColumnComposition}>
        <img
          src={image4}
          alt=""
          className={styles.aboutUsColumnCompositionImage1}
        />
        <NavLink
          className={styles.aboutUsColumnCompositionContact}
          to="/contact"
        >
          Kontakt {`\u2192`}
        </NavLink>

        <img
          src={image9}
          alt=""
          className={styles.aboutUsColumnCompositionImage2}
        />
      </div>
    </>
  );
}

export default AboutUsImages;
