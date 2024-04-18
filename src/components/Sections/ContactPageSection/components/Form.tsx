import styles from "./form.module.css";

import { useFormHandler } from "../../../../hooks/useFormHandler.ts";
import { Alert } from "./Alert";
import { FormInput } from "./FormInput";
import FormMessageInput from "./FormMessageInput";
import FormCheckbox from "./FormCheckbox";
import SubmitButton from "./SubmitButton";

export default function ContactForm() {
  const accessKey = import.meta.env.VITE_FORM_KEY as string;
  const accessURL = import.meta.env.VITE_FORM_URL as string;

  const {
    register,
    onSubmitHandler,
    errors,
    formState,
    isSubmitting,
    isSubmitSuccessful,
    reset,
  } = useFormHandler(accessURL);

  return (
    <>
      <div className={styles.formContainer}>
        <h3 className={styles.title}>Formularz Kontaktowy</h3>
        <h1 className={styles.header}>NAPISZ DO NAS</h1>
        {!isSubmitSuccessful && (
          <form noValidate className={styles.form} onSubmit={onSubmitHandler}>
            <input type="hidden" value={accessKey} {...register("accessKey")} />
            <input type="hidden" {...register("subject")} />
            <input type="hidden" value="SolarFlow" {...register("from_name")} />
            <input
              type="checkbox"
              id=""
              className="hidden"
              style={{ display: "none" }}
              {...register("botcheck")}
            ></input>
            <div>
              <FormInput
                register={register}
                errors={errors}
                formState={formState}
                title="Imię"
                name="name"
                placeholder="Imię"
                validation={{
                  required: "Podaj swoje Imię",
                  maxLength: {
                    value: 40,
                    message: "Imię nie może być dłuższe niż 40 znaków",
                  },
                }}
              />
            </div>
            <div>
              <FormInput
                register={register}
                errors={errors}
                formState={formState}
                title="Email"
                name="email"
                placeholder="Email"
                type="email"
                validation={{
                  required: "Podaj poprawny adres email",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Podaj poprawny adres email",
                  },
                }}
              />
            </div>
            <div>
              <FormInput
                register={register}
                errors={errors}
                formState={formState}
                title="Telefon"
                name="phone"
                placeholder="Telefon"
                validation={{
                  required: "Podaj numer telefonu",
                  validate: (value: string) =>
                    !/^\d+$/.test(value)
                      ? "Numer telefonu powinien zawierać tylko cyfry"
                      : value.length < 9
                      ? "Numer telefonu powinien zawierać co najmniej 9 cyfr"
                      : value.length > 15
                      ? "Numer telefonu powinien zawierać nie więcej niż 15 cyfr"
                      : true,
                }}
              />
            </div>
            <div>
              <FormInput
                register={register}
                errors={errors}
                formState={formState}
                title="Temat"
                name="topic"
                placeholder="Temat"
                validation={{
                  required: "Podaj temat wiadomości",
                  maxLength: {
                    value: 100,
                    message:
                      "Temat wiadomości nie może być dłuższy niż 100 znaków",
                  },
                }}
              />
            </div>
            <div>
              <FormMessageInput
                register={register}
                errors={errors}
                formState={formState}
              />

              <FormCheckbox
                register={register}
                errors={errors}
                formState={formState}
              />
            </div>
            <SubmitButton isSubmitting={isSubmitting} />
          </form>
        )}
        {isSubmitSuccessful && (
          <Alert isSuccess={formState.isSuccess} reset={reset} />
        )}
      </div>
    </>
  );
}
