import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import CustomBg from "@/components/customBg/CustomBg";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "This is Beka Lomsadze's portfolio app with next js 14",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
        <Header />
        <ToastContainer />
        <CustomBg />
        {children}
        <Footer />
      </body>
    </html>
  );
}
