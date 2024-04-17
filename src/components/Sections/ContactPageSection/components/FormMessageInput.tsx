import { UseFormRegister, FieldErrors, FieldValues } from "react-hook-form";
import styles from "./form.module.css";

interface FormState {
  isSuccess: boolean;
  message: string;
  isSubmitted: boolean;
}

interface TextAreaProps {
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  formState: FormState;
}

const FormMessageInput: React.FC<TextAreaProps> = ({
  register,
  errors,
  formState,
}) => {
  return (
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
    </div>
  );
};

export default FormMessageInput;
