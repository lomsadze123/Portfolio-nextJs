"use client";
import { useState } from "react";

const Form = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Handle form submission, e.g., send an email or save to a database
    console.log("Form submitted:", formState);
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-lg">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formState.name}
          onChange={handleChange}
          className="p-2 rounded-md border border-slate-700 bg-slate-900 text-white"
          required
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-lg">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formState.email}
          onChange={handleChange}
          className="p-2 rounded-md border border-slate-700 bg-slate-900 text-white"
          required
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-lg">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formState.message}
          onChange={handleChange}
          rows={6}
          className="p-2 rounded-md border border-slate-700 bg-slate-900 text-white"
          required
        ></textarea>
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
