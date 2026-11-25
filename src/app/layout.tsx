import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import "../components/home/HomePage.css";
import "../components/about/AboutPage.css";
import "../components/services/ServicesPage.css";
import "../components/services/ServiceDetailPage.css";
import Header from "@/components/layout/Header";

export const metadata: Metadata = {
  title: {
    default: "NexGenix",
    template: "%s | NexGenix",
  },
  description: "NexGenix - Let your brand shine online.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
