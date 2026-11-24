import type { Metadata } from "next";
import ServiceDetailPage from "@/components/services/ServiceDetailPage";

export const metadata: Metadata = {
  title: "Social Media Marketing",
  description: "Strategic social media marketing that creates meaningful engagement and measurable growth.",
};

export default function SocialMediaMarketingRoute() {
  return <ServiceDetailPage />;
}
