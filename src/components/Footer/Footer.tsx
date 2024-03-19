import styles from "./Footer.module.css";
import FooterFeatured from "./FooterFeatured";
import FooterInformation from "./FooterInformation";

function Footer() {
  return (
    <footer className={`${styles.footer}`}>
      <FooterFeatured />
      <FooterInformation />
    </footer>
  );
}

export default Footer;
