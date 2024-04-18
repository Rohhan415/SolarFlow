import styles from "./form.module.css";

import { useFormHandler } from "../../../../../hooks/useFormHandler.ts";
import { Alert } from "../Alert/Alert.tsx";
import { FormInput } from "../Input/FormInput.tsx";
import { formFields } from "../Input/FormInput.ts";
import FormMessageInput from "../MessageInput/FormMessageInput.tsx";
import FormCheckbox from "../Checkbox/FormCheckbox.tsx";
import SubmitButton from "../Button/SubmitButton.tsx";

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
            {formFields.map((field) => (
              <div key={field.name}>
                <FormInput
                  register={register}
                  errors={errors}
                  formState={formState}
                  title={field.title}
                  name={field.name}
                  placeholder={field.placeholder}
                  validation={field.validation}
                  type={field.type}
                />
              </div>
            ))}
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
