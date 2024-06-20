import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

const inter = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "e-commerce",
  description: "e-commerce",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`flex min-h-screen flex-col bg-neutral-100 antialiased ${inter.className}`}
      >
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
