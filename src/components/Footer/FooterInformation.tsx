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
          <p>Address: 623 Harrison St., 2nd Floor, San Francisco, CA 94107</p>
          <p>Nip: xxx-xxx-xx-xx</p>
          <p>Regon: xxxxxx</p>
        </address>
      </div>
      <nav>
        <p>Kontakt</p>
        <p>biuro@adres.pl</p>
        <p>
          Olaf: <a href="tel+48 999 999 999"></a>
        </p>
        <p>Olaf@email.pl</p>
        <p>
          Dawid: <a href="tel+48 999 999 999"></a>
        </p>
        <p>Dawid@email.pl</p>
      </nav>
    </div>
  );
}

export default FooterInformation;
