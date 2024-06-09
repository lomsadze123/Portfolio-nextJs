import { z } from "zod";

const schema = z.object({
  name: z.string().min(2, { message: "This field is required" }),
  email: z
    .string()
    .min(4, { message: "Email is required" })
    .email("This is not valid email"),
  message: z.string().min(1),
});

export default schema;
