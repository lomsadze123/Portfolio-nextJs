import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "beka.lomsadze.1@btu.edu.ge",
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

const sendConfirmationEmail = async (email: string, message: string) => {
  const mailOptions = {
    from: "beka.lomsadze.1@btu.edu.ge",
    to: email,
    subject: "Your mail has been sent",
    text: "Thank you for your mail!",
  };

  const mailOptionsForMe = {
    from: `"${email}" <beka.lomsadze.1@btu.edu.ge>`,
    to: "beka.lomsadze.1@btu.edu.ge",
    subject: "Message from portfolio",
    text: message,
    replyTo: email,
  };

  try {
    await transporter.sendMail(mailOptions);

    await transporter.sendMail(mailOptionsForMe);
  } catch (error) {
    console.error("Error sending confirmation email:", error);
    throw new Error("Failed to send confirmation email");
  }
};

export default sendConfirmationEmail;
