import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import CartSidebar from "@/components/CartSidebar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "หอมถิ่น | Hom Thin — Scent of Place. Story of Home.",
  description:
    "Bio-based air fresheners made from upcycled Thai agricultural biomass. Each scent carries the authentic fragrance of a Thai province.",
  keywords: ["air freshener", "Thai", "biochar", "sustainable", "หอมถิ่น", "eco"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th">
      <body className="min-h-screen bg-cream-light">
        <Navbar />
        <CartSidebar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
