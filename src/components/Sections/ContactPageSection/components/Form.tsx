import styles from "./form.module.css";

function Form() {
  const accessKey = import.meta.env.VITE_FORM_KEY as string;
  const accessURL = import.meta.env.VITE_FORM_URL as string;

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);

    formData.append("access_key", accessKey);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch(accessURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
  };

  return (
    <div className={styles.formContainer}>
      <h3>Formularz Kontaktowy</h3>
      <h1>NAPISZ DO NAS</h1>
      <form className={styles.form} onSubmit={onSubmit}>
        <input className={styles.input} type="text" name="name" />

        <input className={styles.input} type="email" name="email" />

        <input className={styles.input} type="text" name="subject" />

        <textarea className={styles.input} name="message"></textarea>

        <button type="submit">Submit Form</button>
      </form>
    </div>
  );
}

export default Form;
