import styles from "./InstallationStepsSection.module.css";

function InstallationStepsSectionHeader() {
  return (
    <div className={`${styles.installationStepsHeader}`}>
      <h1>
        Oświetl swoją przyszłość - SolarFlow: Energia Słońca dla Twojego Domu!
      </h1>
      <div className={`${styles.installationStepsHeader}`}>
        Energia słoneczna jest bezpłatna - jedynym wydatkiem jest zakup i
        instalacja paneli słonecznych. Dzięki nim masz nieograniczony dostęp do
        energii elektrycznej, która jest odnawialna i pochodzi prosto z
        promieniowania słonecznego.
      </div>
    </div>
  );
}

export default InstallationStepsSectionHeader;
