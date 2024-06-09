import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "beka.lomsadze.1@btu.edu.ge",
    pass: "qtqf mcbl xppg hbeu",
  },
  tls: {
    rejectUnauthorized: false,
  },
});

const sendConfirmationEmail = async (email: string) => {
  const mailOptions = {
    from: "beka.lomsadze.1@btu.edu.ge",
    to: email,
    subject: "Your mail has been sent",
    text: "Thank you for your mail!",
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Confirmation email sent to: ", email);
  } catch (error) {
    console.error("Error sending confirmation email:", error);
    throw new Error("Failed to send confirmation email");
  }
};

export default sendConfirmationEmail;
