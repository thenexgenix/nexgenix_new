import Link from "next/link";
import { HomeFooter } from "@/components/home/HomeSections";

type IconName = "palette" | "code" | "mobile" | "trend" | "sparkle" | "cloud";

function ServiceIcon({ name }: { name: IconName }) {
  const common = {
    width: 42,
    height: 42,
    viewBox: "0 0 48 48",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  if (name === "palette") {
    return <svg {...common}><path d="M24 7c-9.4 0-17 6.7-17 15 0 6.2 4.8 10.5 10.4 10.5h2.3c2.1 0 3.2 2.5 2 4.1-.7 1 .1 2.4 1.4 2.4C33.4 39 41 31.4 41 22.5 41 14 33.4 7 24 7Z" /><circle cx="16" cy="20" r="1.8" fill="currentColor" /><circle cx="22" cy="15" r="1.8" fill="currentColor" /><circle cx="30" cy="15" r="1.8" fill="currentColor" /><circle cx="35" cy="21" r="1.8" fill="currentColor" /></svg>;
  }
  if (name === "code") return <svg {...common}><path d="m18 14-9 10 9 10M30 14l9 10-9 10M27 10l-6 28" /></svg>;
  if (name === "mobile") return <svg {...common}><rect x="13" y="6" width="22" height="36" rx="4" /><path d="M21 36h6" /></svg>;
  if (name === "trend") return <svg {...common}><path d="m8 32 10-10 7 6 14-15M29 13h10v10" /></svg>;
  if (name === "sparkle") return <svg {...common}><path d="m24 7 3.1 10.9L38 21l-10.9 3.1L24 35l-3.1-10.9L10 21l10.9-3.1L24 7ZM38 32l1.2 4.8L44 38l-4.8 1.2L38 44l-1.2-4.8L32 38l4.8-1.2L38 32Z" /></svg>;
  return <svg {...common}><path d="M13 37h23M16 37V21h16v16M11 21h26M20 21v-8h8v8M13 14h-2v-4h26v4h-2" /></svg>;
}

const services = [
  {
    title: "UI/UX Design",
    icon: "palette" as const,
    description: "Creating intuitive and visually stunning user interfaces that enhance user experience and drive engagement.",
    bullets: ["User Research & Analysis", "Wireframing & Prototyping", "Visual Design & Branding", "Usability Testing"],
  },
  {
    title: "Web Development",
    icon: "code" as const,
    description: "Building responsive, scalable, and high-performance web applications using modern technologies and best practices.",
    bullets: ["Frontend Development", "Backend Architecture", "API Integration", "Performance Optimization"],
  },
  {
    title: "Mobile App Design",
    icon: "mobile" as const,
    description: "Designing beautiful and functional mobile applications for iOS and Android platforms with seamless user experiences.",
    bullets: ["Native & Cross-platform", "Adaptive UI Design", "App Store Optimization", "Push Notifications"],
  },
  {
    title: "Social Media Marketing",
    icon: "trend" as const,
    description: "Comprehensive digital marketing strategies to boost your online presence and drive measurable business growth.",
    bullets: ["SEO & Content Strategy", "Social Media Marketing", "PPC Campaigns", "Analytics & Reporting"],
  },
  {
    title: "Brand Identity",
    icon: "sparkle" as const,
    description: "Crafting unique brand identities that resonate with your audience and establish a strong market presence.",
    bullets: ["Logo & Visual Identity", "Brand Guidelines", "Marketing Collateral", "Brand Strategy"],
  },
  {
    title: "Cloud Solutions",
    icon: "cloud" as const,
    description: "Implementing secure and scalable cloud infrastructure solutions to power your digital transformation journey.",
    bullets: ["Cloud Migration", "Infrastructure Setup", "Security & Compliance", "Continuous Monitoring"],
  },
];

function ServiceCard({ service }: { service: (typeof services)[number] }) {
  const href = service.title === "Social Media Marketing" ? "/services/social-media-marketing" : "#contact";

  return (
    <article className="services-card">
      <div className="services-card__icon"><ServiceIcon name={service.icon} /></div>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
      <ul>{service.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
      <Link href={href} className="services-card__link">Learn More <span>→</span></Link>
    </article>
  );
}

export default function ServicesPage() {
  return (
    <main className="services-page">
      <section className="services-hero">
        <div className="services-shell services-hero__inner">
          <div className="services-hero__copy">
            <span className="services-kicker"><i /> Welcome</span>
            <h1><span>Innovative</span><strong>Solutions</strong><span>For Growth</span></h1>
            <p>Transform challenges into opportunities with our expert consultancy services. We deliver tailored strategies that accelerate your business growth and ensure sustainable success.</p>
            <div className="services-hero__actions">
              <Link href="#contact" className="services-gradient-button">Get Started <span>›</span></Link>
              <Link href="#services-grid" className="services-outline-button">Explore Services</Link>
            </div>
          </div>
          <div className="services-hero__visual">
            <div className="services-hero__image-placeholder" role="img" aria-label="Hero image placeholder">
              <span>Add hero image</span>
            </div>
            <div className="services-experience-badge"><strong>15+</strong><span>Years Experience</span></div>
          </div>
        </div>
      </section>

      <section id="services-grid" className="services-grid-section">
        <div className="services-shell">
          <h2>Our Digital Marketing Services</h2>
          <p className="services-grid-section__intro">Comprehensive solutions to boost your online presence and drive<br className="services-desktop-break" /> business growth.</p>
          <div className="services-grid">{services.map((service) => <ServiceCard key={service.title} service={service} />)}</div>
          <Link href="#contact" className="services-view-all"><span>→</span> View All Services</Link>
        </div>
      </section>

      <section id="contact" className="services-contact-section">
        <div className="services-shell">
          <div className="services-contact-card">
            <h2>Ready to get started?</h2>
            <p>Let&apos;s work together to bring your vision to life. Contact us today for a free<br className="services-desktop-break" /> consultation.</p>
            <Link href="/contact" className="services-gradient-button">Get in Touch</Link>
          </div>
        </div>
      </section>

      <HomeFooter />
    </main>
  );
}
