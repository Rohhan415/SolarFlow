import styles from "./form.module.css";
import { useEffect, useState } from "react";
import { FieldValues, SubmitHandler, useForm, useWatch } from "react-hook-form";

interface FormState {
  isSuccess: boolean;
  message: string;
  isSubmitted: boolean;
}

export default function ContactForm() {
  const [formState, setFormState] = useState<FormState>({
    isSuccess: false,
    message: "",
    isSubmitted: false,
  });

  const accessKey = import.meta.env.VITE_FORM_KEY as string;
  const accessURL = import.meta.env.VITE_FORM_URL as string;

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
              <div className={styles.inputContainer}>
                <p className={styles.inputTitle}>Imię</p>
                {formState.isSubmitted && errors.name && (
                  <div className={styles.inputError}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-8 h-8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
                      />
                    </svg>
                    {`${errors.name.message}`}
                  </div>
                )}
              </div>
              <input
                type="text"
                placeholder="Imię"
                autoComplete="false"
                className={`${styles.input} ${
                  formState.isSubmitted && errors.name
                    ? "border-red-600 focus:border-red-600 ring-red-100"
                    : "border-gray-300 focus:border-indigo-600 ring-indigo-100"
                }`}
                {...register("name", {
                  required: "Podaj swoje Imię",
                  maxLength: {
                    value: 40,
                    message: "Imię nie może być dłuższe niż 40 znaków",
                  },
                })}
              />
            </div>

            <label htmlFor="email_address" className="sr-only">
              Email
            </label>
            <div>
              <div className={styles.inputContainer}>
                <p className={styles.inputTitle}>Email</p>
                {formState.isSubmitted && errors.email && (
                  <div className={styles.inputError}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-8 h-8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
                      />
                    </svg>

                    {`${errors.email.message}`}
                  </div>
                )}
              </div>
              <input
                id="email_address"
                type="email"
                placeholder="Email"
                autoComplete="false"
                className={`${styles.input} ${
                  (formState.isSubmitted && errors.email) ||
                  errors.email?.type === "pattern"
                    ? "border-red-600 focus:border-red-600 ring-red-100"
                    : "border-gray-300 focus:border-indigo-600 ring-indigo-100"
                }`}
                {...register("email", {
                  required: "Podaj poprawny adres email",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Podaj poprawny adres email",
                  },
                })}
              />
            </div>
            <div>
              <div className={styles.inputContainer}>
                <p className={styles.inputTitle}>Telefon</p>
                {formState.isSubmitted && errors.phone && (
                  <div className={styles.inputError}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-8 h-8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
                      />
                    </svg>
                    {`${errors.phone.message}`}
                  </div>
                )}
              </div>
              <input
                type="text"
                placeholder="Telefon"
                autoComplete="false"
                className={`${styles.input} ${
                  (formState.isSubmitted && errors.phone) ||
                  errors.phone?.type === "pattern"
                    ? "border-red-600 focus:border-red-600 ring-red-100"
                    : "border-gray-300 focus:border-indigo-600 ring-indigo-100"
                }`}
                {...register("phone", {
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
                })}
              />
            </div>
            <div>
              <div className={styles.inputContainer}>
                <p className={styles.inputTitle}>Temat</p>
                {formState.isSubmitted && errors.topic && (
                  <div className={styles.inputError}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-8 h-8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
                      />
                    </svg>
                    {`${errors.topic.message}`}
                  </div>
                )}
              </div>
              <input
                type="text"
                placeholder="Temat"
                autoComplete="false"
                className={`${styles.input} ${
                  formState.isSubmitted && errors.topic
                    ? "border-red-600 focus:border-red-600 ring-red-100"
                    : "border-gray-300 focus:border-indigo-600 ring-indigo-100"
                }`}
                {...register("topic", {
                  required: "Podaj temat wiadomości",
                  maxLength: {
                    value: 100,
                    message:
                      "Temat wiadomości nie może być dłuższy niż 100 znaków",
                  },
                })}
              />
            </div>
            <div>
              <div className={styles.inputContainer}>
                <p className={styles.inputTitle}>Wiadomość</p>
                {formState.isSubmitted && errors.message && (
                  <div className={styles.inputError}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-8 h-8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
                      />
                    </svg>
                    {`${errors.message.message}`}
                  </div>
                )}
              </div>
              <textarea
                placeholder="Wiadomość"
                className={`${styles.inputMessage} ${
                  formState.isSubmitted && errors.message
                    ? "border-red-600 focus:border-red-600 ring-red-100"
                    : "border-gray-300 focus:border-indigo-600 ring-indigo-100"
                }`}
                {...register("message", {
                  required: "Wiadomość nie może być pusta",
                })}
              />

              <div className={styles.privacyPolicy}>
                <label
                  className={`${
                    formState.isSubmitted && errors.privacyPolicy
                      ? "text-red-600"
                      : ""
                  }`}
                  htmlFor="privacyPolicy"
                >
                  <input
                    className={styles.checkbox}
                    type="checkbox"
                    id="privacyPolicy"
                    {...register("privacyPolicy", {
                      required: "Musisz zaakceptować politykę prywatności",
                    })}
                  />
                  Zgadzam się na przetwarzanie informacji danych osobowych,
                  podanych w formularzu kontaktowym, w zakresie, który jest
                  niezbędny do udzielenia mi odpowiedzi i wyłącznie w tym celu.
                </label>
              </div>
            </div>
            <button type="submit" className={styles.button}>
              {isSubmitting ? (
                <svg
                  className="w-5 h-5 mx-auto text-white animate-spin"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              ) : (
                "Send Message"
              )}
            </button>
          </form>
        )}

        {isSubmitSuccessful && formState.isSuccess && (
          <>
            <div className="flex flex-col items-center justify-center text-center text-white rounded-md">
              <svg
                width="100"
                height="100"
                className="text-green-300"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M26.6666 50L46.6666 66.6667L73.3333 33.3333M50 96.6667C43.8716 96.6667 37.8033 95.4596 32.1414 93.1144C26.4796 90.7692 21.3351 87.3317 17.0017 82.9983C12.6683 78.6649 9.23082 73.5204 6.8856 67.8586C4.54038 62.1967 3.33331 56.1283 3.33331 50C3.33331 43.8716 4.54038 37.8033 6.8856 32.1414C9.23082 26.4796 12.6683 21.3351 17.0017 17.0017C21.3351 12.6683 26.4796 9.23084 32.1414 6.88562C37.8033 4.5404 43.8716 3.33333 50 3.33333C62.3767 3.33333 74.2466 8.24998 82.9983 17.0017C91.75 25.7534 96.6666 37.6232 96.6666 50C96.6666 62.3768 91.75 74.2466 82.9983 82.9983C74.2466 91.75 62.3767 96.6667 50 96.6667Z"
                  stroke="currentColor"
                  strokeWidth="3"
                />
              </svg>
              <h3 className="py-5 text-2xl text-green-500">Success</h3>
              <p className="text-gray-700 md:px-3">{formState.message}</p>
              <button
                className="mt-6 text-indigo-600 focus:outline-none"
                onClick={() => reset()}
              >
                Go back
              </button>
            </div>
          </>
        )}
        {isSubmitSuccessful && !formState.isSuccess && (
          <div className="flex flex-col items-center justify-center text-center text-white rounded-md">
            <svg
              width="97"
              height="97"
              viewBox="0 0 97 97"
              className="text-red-400"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M27.9995 69C43.6205 53.379 52.3786 44.621 67.9995 29M26.8077 29L67.9995 69M48.2189 95C42.0906 95 36.0222 93.7929 30.3604 91.4477C24.6985 89.1025 19.554 85.6651 15.2206 81.3316C10.8872 76.9982 7.44975 71.8538 5.10454 66.1919C2.75932 60.53 1.55225 54.4617 1.55225 48.3333C1.55225 42.205 2.75932 36.1366 5.10454 30.4748C7.44975 24.8129 10.8872 19.6684 15.2206 15.335C19.554 11.0016 24.6985 7.56418 30.3604 5.21896C36.0222 2.87374 42.0906 1.66667 48.2189 1.66667C60.5957 1.66667 72.4655 6.58333 81.2172 15.335C89.9689 24.0867 94.8856 35.9566 94.8856 48.3333C94.8856 60.7101 89.9689 72.58 81.2172 81.3316C72.4655 90.0833 60.5957 95 48.2189 95Z"
                stroke="CurrentColor"
                strokeWidth="3"
              />
            </svg>

            <h3 className="text-2xl text-red-400 py-7">
              Oops, Something went wrong!
            </h3>
            <p className="text-gray-300 md:px-3">{formState.message}</p>
            <button className="mt-5 focus:outline-none" onClick={() => reset()}>
              Try Again
            </button>
          </div>
        )}
      </div>
    </>
  );
}
