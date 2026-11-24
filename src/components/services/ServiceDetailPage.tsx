import Link from "next/link";
import { HomeFooter } from "@/components/home/HomeSections";

type DetailIconName = "conversation" | "community" | "target" | "trend" | "analytics" | "bolt";

function DetailIcon({ name }: { name: DetailIconName }) {
  const common = {
    width: 46,
    height: 46,
    viewBox: "0 0 48 48",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2.4,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  if (name === "conversation") return <svg {...common}><path d="M10 12h28v19H21l-8 7v-7h-3V12Z" /><path d="M17 20h14M17 25h9" /></svg>;
  if (name === "community") return <svg {...common}><circle cx="19" cy="17" r="5" /><circle cx="32" cy="19" r="4" /><path d="M9 36c0-6 4-10 10-10s10 4 10 10M30 28c5 .3 8 3.2 8 8" /></svg>;
  if (name === "target") return <svg {...common}><circle cx="24" cy="24" r="15" /><circle cx="24" cy="24" r="8" /><circle cx="24" cy="24" r="2" fill="currentColor" /></svg>;
  if (name === "trend") return <svg {...common}><path d="m8 33 10-10 7 6 14-16M29 13h10v10" /></svg>;
  if (name === "analytics") return <svg {...common}><path d="M9 38V12M9 38h31" /><path d="m15 31 6-8 5 4 9-13" /><path d="M15 18v-4M22 23v-5M29 27v-8M36 20v-5" /></svg>;
  return <svg {...common}><path d="m27 5-14 21h11l-3 17 14-23H24l3-15Z" /></svg>;
}

const offers = [
  { title: "Content Creation & Curation", icon: "conversation" as const, description: "Engaging, platform-specific content that resonates with your brand's audience." },
  { title: "Community Management", icon: "community" as const, description: "Active engagement with your audience to build relationships and loyalty." },
  { title: "Paid Social Campaigns", icon: "target" as const, description: "Targeted advertising to reach new audiences and drive specific results." },
  { title: "Social Media Strategy", icon: "trend" as const, description: "Comprehensive planning aligned with your business goals and target audience." },
  { title: "Analytics & Reporting", icon: "analytics" as const, description: "Detailed insights and performance metrics and platform behavior." },
  { title: "Influencer Partnerships", icon: "bolt" as const, description: "Strategic collaborations with relevant influencers to expand reach." },
];

const plans = [
  {
    name: "Basic",
    price: "7,000",
    features: ["2 social platforms", "12 posts per month", "Basic content creation", "Monthly reporting", "Community management"],
  },
  {
    name: "Standard",
    price: "10,000",
    popular: true,
    features: ["4 social platforms", "20 posts per month", "Custom graphics", "Engagement strategy", "Bi-weekly reporting", "Paid ad management"],
  },
  {
    name: "Premium",
    price: "18,000",
    features: ["All social platforms", "30+ posts per month", "Video content creation", "Paid social campaigns", "Weekly reporting", "Influencer outreach", "Dedicated social media manager"],
  },
];

function OfferCard({ offer }: { offer: (typeof offers)[number] }) {
  return (
    <article className="service-detail-offer-card">
      <div className="service-detail-icon"><DetailIcon name={offer.icon} /></div>
      <h3>{offer.title}</h3>
      <p>{offer.description}</p>
    </article>
  );
}

function PlanCard({ plan }: { plan: (typeof plans)[number] }) {
  return (
    <article className={`service-detail-plan-card${plan.popular ? " service-detail-plan-card--popular" : ""}`}>
      {plan.popular && <span className="service-detail-plan-card__badge">Most Popular</span>}
      <h3>{plan.name}</h3>
      <div className="service-detail-plan-card__price"><span>BDT</span><strong>{plan.price}</strong><em>/Monthly</em></div>
      <ul>{plan.features.map((feature) => <li key={feature}><span>✓</span>{feature}</li>)}</ul>
      <Link href="#contact" className="service-detail-plan-card__button">Get Started</Link>
    </article>
  );
}

export default function ServiceDetailPage() {
  return (
    <main className="service-detail-page">
      <section className="service-detail-hero">
        <div className="service-detail-shell">
          <h1><span>Amplify Your</span><strong>Social Impact</strong></h1>
          <p className="service-detail-hero__intro">Create viral moments and meaningful engagement with strategic<br className="service-detail-desktop-break" /> social media campaigns that capture attention and drive conversions.</p>
          <div className="service-detail-stats">
            <div><strong>10M+</strong><span>Impressions</span></div>
            <div><strong>250K</strong><span>Engagements</span></div>
            <div><strong>95%</strong><span>Success Rate</span></div>
          </div>
          <div className="service-detail-hero__actions">
            <Link href="#contact" className="service-detail-gradient-button">Boost Your Brand</Link>
            <Link href="#offers" className="service-detail-outline-button">See Results</Link>
          </div>
          <div className="service-detail-social-icons" aria-label="Social media platforms">
            <span>▣</span><span>▤</span><span>◉</span><span>▰</span><span>♫</span>
          </div>
        </div>
      </section>

      <section id="offers" className="service-detail-offers">
        <div className="service-detail-shell">
          <h2>Next-Gen Social Media Marketing for Maximum Impact</h2>
          <p className="service-detail-section-kicker">What We Offer?</p>
          <div className="service-detail-offer-grid">{offers.map((offer) => <OfferCard key={offer.title} offer={offer} />)}</div>
        </div>
      </section>

      <section id="contact" className="service-detail-contact">
        <div className="service-detail-shell">
          <div className="service-detail-contact-card">
            <h2>Grow Your Brand Fast with<br />Our Digital Marketing<br />Expertise</h2>
            <div className="service-detail-contact-card__right">
              <p>Ready to speak with a marketing expert? Give us a ring</p>
              <strong>+88000000000</strong>
              <Link href="/contact" className="service-detail-consultation-button"><span>→</span> Get Free Consultation</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="service-detail-plans">
        <div className="service-detail-shell">
          <h2>Find Your Perfect Plan</h2>
          <p className="service-detail-plans__intro">Choose the plan that best suits your business needs. All plans include email support and<br className="service-detail-desktop-break" /> dashboard access.</p>
          <div className="service-detail-plan-grid">{plans.map((plan) => <PlanCard key={plan.name} plan={plan} />)}</div>
        </div>
      </section>

      <HomeFooter />
    </main>
  );
}
