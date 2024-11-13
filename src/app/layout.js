import Footer from "@/components/Footer";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "@/components/NavBar";
import Link from "next/link";

export const metadata = {
  title: "Aaika",
  description: "created by RAD",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/logo.png" type="image/x-icon"></link>
      </head>
      <body>{children}</body>
    </html>
  );
}
