"use server";

import schema from "@/utils/zodValidate";

const contactAction = async (formData: any) => {
  const name = formData.get("name").trim();
  const email = formData.get("email").trim();
  const message = formData.get("message").trim();

  const validateSchema = schema.safeParse({
    name,
    email,
    message,
  });

  if (validateSchema.success) {
    console.log(validateSchema.data);
    return { message: "Form submitted successfully!" };
  } else {
    console.log("i am in");

    return { errors: validateSchema.error.errors };
  }
};

export default contactAction;
