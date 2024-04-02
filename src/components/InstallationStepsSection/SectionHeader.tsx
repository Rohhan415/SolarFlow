import styles from "./SectionHeader.module.css";

function SectionHeader() {
  return (
    <div className={styles.installationStepsHeader}>
      <div className={styles.moduleHeaderWrapper}>
        <h1 className={styles.moduleHeader}>
          SolarFlow Energia Słońca dla Twojego Domu
        </h1>
      </div>
      <div className={styles.moduleHeaderDescription}>
        Energia słoneczna jest bezpłatna. Jedynym wydatkiem jest zakup i
        instalacja paneli słonecznych. <br /> Dzięki nim masz nieograniczony
        dostęp do energii elektrycznej.
      </div>
    </div>
  );
}

export default SectionHeader;
