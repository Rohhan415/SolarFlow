import styles from "./alert.module.css";

export const Alert = ({
  isSuccess,
  reset,
}: {
  isSuccess: boolean;
  reset: () => void;
}) => {
  const alertStyles = isSuccess ? "text-green-300" : "text-red-400";
  const svgPath = isSuccess
    ? "M26.6666 50L46.6666 66.6667L73.3333 33.3333M50 96.6667C43.8716 96.6667 37.8033 95.4596 32.1414 93.1144C26.4796 90.7692 21.3351 87.3317 17.0017 82.9983C12.6683 78.6649 9.23082 73.5204 6.8856 67.8586C4.54038 62.1967 3.33331 56.1283 3.33331 50C3.33331 43.8716 4.54038 37.8033 6.8856 32.1414C9.23082 26.4796 12.6683 21.3351 17.0017 17.0017C21.3351 12.6683 26.4796 9.23084 32.1414 6.88562C37.8033 4.5404 43.8716 3.33333 50 3.33333C62.3767 3.33333 74.2466 8.24998 82.9983 17.0017C91.75 25.7534 96.6666 37.6232 96.6666 50C96.6666 62.3768 91.75 74.2466 82.9983 82.9983C74.2466 91.75 62.3767 96.6667 50 96.6667Z"
    : "M27.9995 69C43.6205 53.379 52.3786 44.621 67.9995 29M26.8077 29L67.9995 69M48.2189 95C42.0906 95 36.0222 93.7929 30.3604 91.4477C24.6985 89.1025 19.554 85.6651 15.2206 81.3316C10.8872 76.9982 7.44975 71.8538 5.10454 66.1919C2.75932 60.53 1.55225 54.4617 1.55225 48.3333C1.55225 42.205 2.75932 36.1366 5.10454 30.4748C7.44975 24.8129 10.8872 19.6684 15.2206 15.335C19.554 11.0016 24.6985 7.56418 30.3604 5.21896C36.0222 2.87374 42.0906 1.66667 48.2189 1.66667C60.5957 1.66667 72.4655 6.58333 81.2172 15.335C89.9689 24.0867 94.8856 35.9566 94.8856 48.3333C94.8856 60.7101 89.9689 72.58 81.2172 81.3316C72.4655 90.0833 60.5957 95 48.2189 95Z";
  const title = isSuccess ? "Sukces" : "Coś poszło nie tak!";
  const description = isSuccess
    ? "Email wysłany pomyślnie!"
    : "Spróbuj ponownie później";
  const buttonText = isSuccess ? "Powrót" : "Spróbuj Ponownie";

  return (
    <div className={styles.sendAlert}>
      <svg
        width="350"
        height="350"
        className={alertStyles}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d={svgPath} stroke="currentColor" strokeWidth="3" />
      </svg>
      <h3 className={isSuccess ? styles.successTitle : styles.failTitle}>
        {title}
      </h3>
      <p className={styles.description}>{description}</p>
      <button className={styles.button} onClick={reset}>
        {buttonText}
      </button>
    </div>
  );
};
