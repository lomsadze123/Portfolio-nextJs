import Form from "./Form";

const ContactComponent = () => {
  return (
    <main className="max-w-[1250px] mx-auto pt-10 px-6 md:px-0 md:pt-40 text-slate-300">
      <h1 className="font-bold leading-tight tracking-tight text-7xl md:text-9xl col-start-1 mb-8">
        Contact
      </h1>
      <p className="text-xl mb-8">
        Feel free to reach out to me for any inquiries, collaborations, or just
        to say hello!
      </p>
      <Form />
    </main>
  );
};

export default ContactComponent;
