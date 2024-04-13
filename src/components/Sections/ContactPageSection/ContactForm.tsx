import styles from "./contactForm.module.css";
import Form from "./components/Form";
import FormInfo from "./components/FormInfo";
import BackgroundTop from "./components/BackgroundTop";

function ContactForm() {
  return (
    <>
      <BackgroundTop />
      <section className={styles.container}>
        <FormInfo />
        <Form />
      </section>
    </>
  );
}

export default ContactForm;
