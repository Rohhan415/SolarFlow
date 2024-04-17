import styles from "./form.module.css";
import { useEffect, useState } from "react";
import { FieldValues, SubmitHandler, useForm, useWatch } from "react-hook-form";
import { Alert } from "./Alert";
import { FormInput } from "./FormInput";
import FormMessageInput from "./FormMessageInput";
import FormCheckbox from "./FormCheckbox";
import SubmitButton from "./SubmitButton";

interface FormState {
  isSuccess: boolean;
  message: string;
  isSubmitted: boolean;
}

export default function ContactForm() {
  const accessKey = import.meta.env.VITE_FORM_KEY as string;
  const accessURL = import.meta.env.VITE_FORM_URL as string;

  const [formState, setFormState] = useState<FormState>({
    isSuccess: false,
    message: "",
    isSubmitted: false,
  });

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    control,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm({
    mode: "onTouched",
  });

  // Watch used to update the subject field in the sent email
  const userName = useWatch({
    control,
    name: "name",
    defaultValue: "The Client",
  });

  useEffect(() => {
    setValue("subject", `${userName} sent a message from Website`);
  }, [userName, setValue]);

  const onSubmit: SubmitHandler<FieldValues> = async (data, e) => {
    setFormState((prevState) => ({ ...prevState, isSubmitted: true }));

    // Create a FormData object from the form
    const formData = new FormData(e?.target as HTMLFormElement);

    formData.append("access_key", data.accessKey);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    await fetch(accessURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    })
      .then(async (response) => {
        const json = await response.json();
        if (json.success) {
          setFormState((prevState) => ({
            ...prevState,
            isSuccess: true,
            isSubmitted: false,
            message: json.message,
          }));

          reset();
        } else {
          setFormState((prevState) => ({
            ...prevState,
            message: json.message,
            isSuccess: false,
          }));
        }
      })
      .catch((error) => {
        setFormState((prevState) => ({
          ...prevState,
          isSuccess: false,
          isSubmitted: false,
          message: "Client Error. Please check the console.log for more info",
        }));
        console.log(error);
      });
  };

  return (
    <>
      <div className={styles.formContainer}>
        <h3 className={styles.title}>Formularz Kontaktowy</h3>
        <h1 className={styles.header}>NAPISZ DO NAS</h1>
        {!isSubmitSuccessful && (
          <form
            noValidate
            className={styles.form}
            onSubmit={handleSubmit(onSubmit, () =>
              setFormState((prevState) => ({ ...prevState, isSubmitted: true }))
            )}
          >
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
                  pattern: {
                    value: /^\d+$/,
                    message: "Numer telefonu powinien zawierać tylko cyfry",
                  },
                  minLength: {
                    value: 9,
                    message:
                      "Numer telefonu powinien zawierać co najmniej 9 cyfr",
                  },
                  maxLength: {
                    value: 15,
                    message:
                      "Numer telefonu powinien zawierać nie więcej niż 15 cyfr",
                  },
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
