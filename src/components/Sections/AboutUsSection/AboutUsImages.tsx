import styles from "./AboutUsSection.module.css";
import image4 from "../../../assets/image4-medium.jpg";
import image9 from "../../../assets/image9-medium.jpg";
import { NavLink } from "react-router-dom";

function AboutUsImages() {
  return (
    <>
      <div className={styles.Composition}>
        <img
          src={image4}
          srcSet={`${image4} 1920w`}
          alt="About Us Section Image 1"
          loading="lazy"
          className={styles.CompositionImage1}
        />
        <NavLink className={styles.CompositionContact} to="/contact">
          Kontakt {`\u2192`}
        </NavLink>

        <img
          src={image9}
          srcSet={`${image9} 1920w`}
          alt="About Us Section Image 2"
          loading="lazy"
          className={styles.CompositionImage2}
        />
      </div>
    </>
  );
}

export default AboutUsImages;
