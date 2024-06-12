import { ErrorState } from "@/types/types";
import { useRef, useState } from "react";
const useForm = () => {
  const [error, setError] = useState<ErrorState>({
    name: "",
    email: "",
    message: "",
  });
  const formRef = useRef<HTMLFormElement>(null);

  const handleError = (err: any) => {
    const updatedErrors = { name: "", email: "", message: "" };
    err.forEach((error: any) => {
      updatedErrors[error.path[0] as keyof ErrorState] = error.message;
    });

    setError(updatedErrors);
  };
  return { error, setError, formRef, handleError };
};

export default useForm;
