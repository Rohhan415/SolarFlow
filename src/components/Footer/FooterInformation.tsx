import styles from "./Footer.module.css";
import Logo from "../../assets/logo-no-background.png";
import { NavLink } from "react-router-dom";

function FooterInformation() {
  return (
    <div className={`${styles.footerInformation}`}>
      <img
        loading="lazy"
        src={Logo}
        alt="Logo Firmy"
        title="solarflow_logo_small"
      />
      <nav>
        <p className={`${styles.footerInformationHeading}`}>Przydatne Linki</p>
        <ul className={`${styles.footerInformationList}`}>
          <li className={`${styles.footerInformationListButton}`}>
            <NavLink to="/">Strona Główna</NavLink>
          </li>
          <li className={`${styles.footerInformationListButton}`}>
            <NavLink to="/contact">Kontakt</NavLink>
          </li>
          <li className={`${styles.footerInformationListButton}`}>
            <NavLink to="*">O nas</NavLink>
          </li>
          <li className={`${styles.footerInformationListButton}`}>
            <NavLink to="*">Oferta</NavLink>
          </li>
        </ul>
      </nav>
      <div className={`${styles.footerInformationAddress}`}>
        <p className={`${styles.footerInformationHeading}`}>Adres</p>
        <h3 className={`${styles.footerInformationAddressHeader}`}>
          SolarFlow
        </h3>
        <address
          itemType="http://schema.org/PostalAddress"
          className={`${styles.footerInformationAddressList}`}
        >
          <p>Henryka Sienkiewicza 85/87</p>
          <p>
            <span itemProp="postalCode">90-057</span>{" "}
            <span itemProp="addressLocality">Łódź</span>
          </p>
          <p>NIP: 3894501070</p>
        </address>
      </div>
      <nav>
        <p className={`${styles.footerInformationHeading}`}>Kontakt</p>
        <div className={`${styles.footerInformationContactList}`}>
          <a
            className={`${styles.footerInformationContactListBold}`}
            href="mailto:solar1flow@gmail.com"
          >
            solar1flow@gmail.com
          </a>
          <p>
            <span>Olaf:</span>
            <a
              className={`${styles.footerInformationContactListGreenText}`}
              href="tel:+48 518 747 979"
            >
              {" "}
              518 747 979
            </a>
          </p>
          <p>
            <span>Dawid:</span>
            <a
              className={`${styles.footerInformationContactListGreenText}`}
              href="tel:+48 510 266 548"
            >
              {" "}
              510 266 548
            </a>
          </p>
        </div>
      </nav>
    </div>
  );
}

export default FooterInformation;
