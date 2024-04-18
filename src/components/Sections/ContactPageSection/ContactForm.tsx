import styles from "./contactForm.module.css";
import Form from "./components/Form/Form";
import FormInfo from "./components/Info/FormInfo";
import BackgroundTop from "./components/BackgroundTop/BackgroundTop";

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
