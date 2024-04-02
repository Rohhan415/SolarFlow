import styles from "./AboutUsSection.module.css";

import AboutUsImages from "./AboutUsImages";
import AboutUsText from "./AboutUsText";

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
