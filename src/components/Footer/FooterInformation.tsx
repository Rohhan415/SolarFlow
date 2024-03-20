import styles from "./Footer.module.css";
import Logo from "../../assets/logo-no-background.png";

function FooterInformation() {
  return (
    <div className={`${styles.footerInformation}`}>
      <img src={Logo} className={styles.navTitle} alt="Logo Firmy" />
      <nav>
        <p>Przydatne Linki</p>
        <ul>
          <li>Strona Główna</li>
          <li>Kontakt</li>
          <li>Oferta</li>
        </ul>
      </nav>
      <div>
        <p className={`${styles.footerHeading}`}>Adres</p>
        <address>
          <p>Henryka Sienkiewicza 85/87, 90-057 Łódź</p>
          <p>NIP: 3894501070</p>
        </address>
      </div>
      <nav>
        <p>Kontakt</p>
        <p>solar1flow@gmail.com</p>
        <p>
          Olaf: <a href="tel+48  518 747 979"> 518 747 979</a>
        </p>
        <p>
          Dawid: <a href="tel+48 510 266 548">510 266 548</a>
        </p>
      </nav>
    </div>
  );
}

export default FooterInformation;
