"use server";

import schema from "@/utils/zodValidate";
import sendConfirmationEmail from "./sendEmail";

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
    await sendConfirmationEmail(validateSchema.data.email);

    return { message: "Form submitted successfully!" };
  } else {
    return { errors: validateSchema.error.errors };
  }
};

export default contactAction;
