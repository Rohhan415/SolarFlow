import { useState, useEffect } from "react";
import { useForm, useWatch, SubmitHandler, FieldValues } from "react-hook-form";

interface FormState {
  isSuccess: boolean;
  message: string;
  isSubmitted: boolean;
}

export const useFormHandler = (accessURL: string) => {
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
          message:
            "Błąd klienta, po więcej informacji skontaktuj się z administratorem.",
        }));

        console.log(error);
      });
  };

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmit(onSubmit)(e);
    setFormState((prevState) => ({ ...prevState, isSubmitted: true }));
  };

  return {
    register,
    onSubmitHandler,
    errors,
    formState,
    isSubmitting,
    isSubmitSuccessful,
    reset,
  };
};
