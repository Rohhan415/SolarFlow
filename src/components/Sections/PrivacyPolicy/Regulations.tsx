import styles from "./regulations.module.css";
import { sections } from "./sections";

function Regulations() {
  return (
    <section className={styles.container}>
      <div className={styles.regulations}>
        {sections.map((section, index) => (
          <div key={index}>
            <h2 className={styles.header}>{section.title}</h2>
            <p>{section.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Regulations;
