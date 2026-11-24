import type { Metadata } from "next";
import ServicesPage from "@/components/services/ServicesPage";

export const metadata: Metadata = {
  title: "Services",
  description: "Innovative digital services and solutions for sustainable business growth.",
};

export default function ServicesRoute() {
  return <ServicesPage />;
}
