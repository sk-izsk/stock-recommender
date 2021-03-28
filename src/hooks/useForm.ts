import { ChangeEvent, useState } from "react";

const useForm = (initialValue: any) => {
  const [values, setValues] = useState<typeof initialValue>(initialValue);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const reset = () => {
    setValues(initialValue);
  };

  return [values, handleChange, reset];
};

export { useForm };
