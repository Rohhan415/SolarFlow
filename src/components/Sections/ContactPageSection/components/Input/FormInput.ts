interface FormField {
  title: string;
  name: string;
  placeholder: string;
  type?: string;
  validation: {
    required: string;
    maxLength?: {
      value: number;
      message: string;
    };
    pattern?: {
      value: RegExp;
      message: string;
    };
    validate?: (value: string) => boolean | string;
  };
}

export const formFields: FormField[] = [
  {
    title: "Imię",
    name: "name",
    placeholder: "Imię",
    validation: {
      required: "Podaj swoje Imię",
      maxLength: {
        value: 40,
        message: "Imię nie może być dłuższe niż 40 znaków",
      },
    },
  },
  {
    title: "Email",
    name: "email",
    placeholder: "Email",
    type: "email",
    validation: {
      required: "Podaj poprawny adres email",
      pattern: {
        value: /^\S+@\S+$/i,
        message: "Podaj poprawny adres email",
      },
    },
  },
  {
    title: "Telefon",
    name: "phone",
    placeholder: "Telefon",
    validation: {
      required: "Podaj numer telefonu",
      validate: (value: string) =>
        !/^\d+$/.test(value)
          ? "Numer telefonu powinien zawierać tylko cyfry"
          : value.length < 9
          ? "Numer telefonu powinien zawierać co najmniej 9 cyfr"
          : value.length > 15
          ? "Numer telefonu powinien zawierać nie więcej niż 15 cyfr"
          : true,
    },
  },
  {
    title: "Temat",
    name: "topic",
    placeholder: "Temat",
    validation: {
      required: "Podaj temat wiadomości",
      maxLength: {
        value: 100,
        message: "Temat wiadomości nie może być dłuższy niż 100 znaków",
      },
    },
  },
];
