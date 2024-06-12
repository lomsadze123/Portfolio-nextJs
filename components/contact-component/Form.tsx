"use client";
import contactAction from "@/actions/contactAction";
import useForm from "@/hooks/form/useForm";
import { toast } from "react-toastify";

const Form = () => {
  const { error, setError, formRef, handleError } = useForm();

  return (
    <form
      ref={formRef}
      action={async (formData) => {
        const response = await contactAction(formData);
        if (response.errors) {
          handleError(response.errors);
        } else {
          toast("Email sent successfully !");
          setError({ name: "", email: "", message: "" });
          formRef.current?.reset();
        }
      }}
      className="flex flex-col gap-6"
      noValidate
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-lg">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="p-2 outline-none rounded-md border border-slate-700 bg-slate-900 text-white"
          required
        />
        <p className="text-red-500">{error.name}</p>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-lg">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="p-2 outline-none rounded-md border border-slate-700 bg-slate-900 text-white"
          required
        />
        <p className="text-red-500">{error.email}</p>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-lg">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          className="p-2 outline-none rounded-md border border-slate-700 bg-slate-900 text-white"
          required
        ></textarea>
        <p className="text-red-500">{error.message}</p>
      </div>
      <button
        type="submit"
        className="group relative flex w-fit items-center justify-center overflow-hidden rounded-md border-2 border-slate-900 bg-slate-50 mt-6 px-4 py-2 font-bold transition-transform ease-out hover:scale-105"
      >
        <span className="absolute inset-0 z-0 h-full translate-y-9 bg-yellow-300 transition-transform duration-300 ease-in-out group-hover:translate-y-0"></span>
        <span className="relative flex items-center justify-center gap-2 text-slate-900">
          Send Message
        </span>
      </button>
    </form>
  );
};

export default Form;
