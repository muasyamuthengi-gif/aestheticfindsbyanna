import "./globals.css";
import Navbar from "./components/Navbar";
import { Playfair_Display, Inter } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Aesthetic Finds",
  description: "Warm luxury, minimal living",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="pt-20">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
