import styles from "./AboutUsSection.module.css";

import AboutUsImages from "./components/AboutUsImages";
import AboutUsText from "./components/AboutUsText";

function AboutUs() {
  return (
    <section className={styles.container}>
      <div className={styles.aboutUs}>
        <AboutUsImages />
        <AboutUsText />
      </div>
    </section>
  );
}

export default AboutUs;
