import styles from "./EnergySolutionsSection.module.css";

function EnergySolutionsSection() {
  return (
    <section className={styles.container}>
      <h2>Most popular tours</h2>
      <div>
        <div>
          <div>
            <div></div>
            &nbsp;
            <h4>
              <span>The sea explorer</span>
            </h4>
            <div>
              <ul>
                <li>3 day tours</li>
                <li>Up to 30 people</li>
                <li>2 tour guides</li>
                <li>Sleep in cozy hotels</li>
                <li>Difficulty: easy</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EnergySolutionsSection;
