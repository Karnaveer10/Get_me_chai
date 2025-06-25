import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SessionWrapper from "@/components/SessionWrapper";
export const metadata = {
  title: "Get me a Chai",
  description: "This is a cool app.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
         <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <SessionWrapper>
      <body>
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
      </body>
      </SessionWrapper>
    </html>
  );
}
