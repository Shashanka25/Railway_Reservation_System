import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "RailConnect",
  description: "High-Speed Rail Booking - Next.js App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light h-full antialiased">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap" />
      </head>
      <body className="min-h-full flex flex-col bg-surface font-body text-on-surface selection:bg-primary-container selection:text-on-primary-container">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
