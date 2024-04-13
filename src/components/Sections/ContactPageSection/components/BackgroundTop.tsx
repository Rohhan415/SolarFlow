import styles from "./backgroundTop.module.css";

function BackgroundTop() {
  return (
    <div className={styles.background}>
      <div className={styles.backgroundColor}>
        <div className={styles.headerContainer}>
          <h1 className={styles.header}>Kontakt</h1>
        </div>
      </div>
    </div>
  );
}

export default BackgroundTop;
