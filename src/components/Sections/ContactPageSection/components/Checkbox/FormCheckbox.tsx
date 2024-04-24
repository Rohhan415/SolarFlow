import React from "react";
import { UseFormRegister, FieldErrors, FieldValues } from "react-hook-form";
import styles from "./FormChceckbox.module.css";

interface FormState {
  isSuccess: boolean;
  message: string;
  isSubmitted: boolean;
}

interface PrivacyPolicyProps {
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  formState: FormState;
}

const FormCheckbox: React.FC<PrivacyPolicyProps> = ({
  register,
  errors,
  formState,
}) => {
  return (
    <div className={styles.privacyPolicy}>
      <label
        className={`${
          formState.isSubmitted && errors.privacyPolicy ? "text-red-600" : ""
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
        Zgadzam się na przetwarzanie informacji danych osobowych, podanych w
        formularzu kontaktowym, w zakresie, który jest niezbędny do udzielenia
        mi odpowiedzi i wyłącznie w tym celu.
      </label>
    </div>
  );
};

export default FormCheckbox;
