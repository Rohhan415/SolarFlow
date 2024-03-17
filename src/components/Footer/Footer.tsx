import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={`${styles.footer}`}>
      <div className={`${styles.footerFeatured}`}>
        <p>aleja Niepodległości 2/7 , 39-300 Mielec</p>
        <p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
            />
          </svg>
          +48 999 999 999 lub +48 999 999 999
        </p>
        <p>Dawid@email.pl</p>
      </div>
      <div className={`${styles.container}`}>
        <div>logo</div>
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
    </footer>
  );
}

export default Footer;
