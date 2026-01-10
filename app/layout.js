import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Aesthetic Finds",
  description: "Bedroom decor, cozy corners & aesthetic inspiration",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {/* Fixed Navbar */}
        <Navbar />

        {/* Page Content pushed below navbar */}
        <main className="pt-24">
          {children}
        </main>
      </body>
    </html>
  );
}
