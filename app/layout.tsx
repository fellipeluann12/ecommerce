import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import type { Metadata } from "next";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "e-commeerce",
  description: "e-commerce",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col bg-neutral-100">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
