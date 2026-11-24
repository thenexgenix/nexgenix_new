import Image from "next/image";
import Link from "next/link";
import ExpertiseAnimation from "@/components/home/ExpertiseAnimation";
import LogoAnimation from "@/components/home/LogoAnimation";
import WorksCarousel from "@/components/home/WorksCarousel";

const logos = [
  { src: "/assets/logos/ainbondu.svg", alt: "Ainbondu", className: "brand-logo brand-logo--ainbondu" },
  { src: "/assets/logos/planto.svg", alt: "Planto", className: "brand-logo brand-logo--planto" },
  { src: "/assets/logos/nexmail.svg", alt: "NexMail AI", className: "brand-logo brand-logo--nexmail" },
  { src: "/assets/logos/investmate.svg", alt: "Investmate", className: "brand-logo brand-logo--investmate" },
];

type IconName = "play" | "eye" | "volume" | "phone" | "send" | "check";

function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  if (name === "play") return <svg {...common}><path d="m9 6 9 6-9 6V6Z" fill="currentColor" stroke="none" /></svg>;
  if (name === "eye") return <svg {...common}><path d="M2.5 12s3.4-5 9.5-5 9.5 5 9.5 5-3.4 5-9.5 5-9.5-5-9.5-5Z" /><circle cx="12" cy="12" r="2.4" /></svg>;
  if (name === "volume") return <svg {...common}><path d="M4 10v4h3l4 3V7l-4 3H4Z" /><path d="M15 9.5a4 4 0 0 1 0 5M17.5 7a7.5 7.5 0 0 1 0 10" /></svg>;
  if (name === "phone") return <svg {...common}><path d="M7.2 3.5 5 5.1c-.6.5-.8 1.3-.5 2 1.5 4.2 4.2 7.9 7.9 10.4.7.5 1.6.4 2.2-.2l1.8-1.8-2.5-2.5-1.6 1.1a13 13 0 0 1-4.4-4.4L9 8.1 7.2 3.5Z" /></svg>;
  if (name === "send") return <svg {...common}><path d="m21 3-7.2 18-3.8-7L3 10.2 21 3Z" /><path d="m10 14 4-4" /></svg>;
  return <svg {...common}><circle cx="12" cy="12" r="9" /><path d="m8 12 2.5 2.5L16 9" /></svg>;
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <span className="home-eyebrow">{children}</span>;
}

function SectionIntro({ eyebrow, title, description }: { eyebrow?: string; title: string; description?: string }) {
  return (
    <div className="section-intro">
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

export function BrandSection() {
  return (
    <section className="brand-section">
      <div className="page-shell">
        <SectionIntro title="Revolutionizing" description="the leading innovation hub" />
        <div className="brand-stage" aria-label="NexGenix partner brands">
          <div className="brand-stage__glow" aria-hidden="true" />
          <div className="brand-grid" />
          <LogoAnimation />
          {logos.map((logo) => (
            <Image key={logo.alt} src={logo.src} alt={logo.alt} width={240} height={130} className={logo.className} unoptimized />
          ))}
        </div>
      </div>
    </section>
  );
}

const stories = [
  { title: "Product Demo", views: "125K", time: "3:45", kind: "orbit" },
  { title: "Client Success Story", views: "98K", time: "5:20", kind: "code" },
  { title: "Innovation Process", views: "156K", time: "4:15", kind: "team" },
  { title: "Behind The Scenes", views: "210K", time: "6:30", kind: "device" },
] as const;

function StoryArtwork({ kind }: { kind: (typeof stories)[number]["kind"] }) {
  return (
    <div className={`story-art story-art--${kind}`}>
      {kind === "orbit" && <><div className="story-orbit story-orbit--one" /><div className="story-orbit story-orbit--two" /><div className="story-orbit-dot" /></>}
      {kind === "code" && <><span>{"{ }"}</span><span>{"</>"}</span><span>{"01"}</span><div className="story-code-line" /></>}
      {kind === "team" && <><div className="story-person story-person--one" /><div className="story-person story-person--two" /><div className="story-person story-person--three" /><div className="story-laptop" /></>}
      {kind === "device" && <div className="story-device"><div /></div>}
    </div>
  );
}

export function StoriesSection() {
  return (
    <section className="stories-section">
      <div className="page-shell">
        <SectionIntro title="Watch Our Stories" description="Experience innovation through video" />
        <div className="stories-grid">
          {stories.map((story) => (
            <article className="story-card" key={story.title}>
              <div className="story-media">
                <StoryArtwork kind={story.kind} />
                <span className="story-duration"><span>▣</span>{story.time}</span>
                <button type="button" aria-label={`Play ${story.title}`} className="story-play"><Icon name="play" size={22} /></button>
              </div>
              <div className="story-meta">
                <h3>{story.title}</h3>
                <div><span><Icon name="eye" size={13} />{story.views} views</span><span><Icon name="volume" size={13} />HD Quality</span></div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ExpertiseSection() {
  const bullets = ["Full-stack development expertise", "Modern frontend frameworks", "Scalable backend solutions", "Cross-platform mobile apps", "Design-first approach"];

  return (
    <section className="expertise-section">
      <div className="page-shell expertise-section__inner">
        <div className="expertise-copy">
          <Eyebrow>What We Do</Eyebrow>
          <h2>Our Expertise</h2>
          <h3>Powered by cutting-edge technologies</h3>
          <p>We specialize in crafting exceptional digital experiences using industry-leading technologies. Our team masters both frontend and backend development, delivering comprehensive solutions that scale with your business needs.</p>
          <p>From responsive web applications to cross-platform mobile solutions, we leverage modern frameworks and tools to build products that users love. Our expertise spans React, Node.js, Python, Laravel, Flutter, and more.</p>
          <ul>{bullets.map((bullet) => <li key={bullet}><Icon name="check" size={15} />{bullet}</li>)}</ul>
        </div>
        <div className="expertise-visual"><ExpertiseAnimation /></div>
      </div>
    </section>
  );
}

export function WorksSection() {
  return (
    <section className="works-section">
      <div className="page-shell">
        <SectionIntro title="Our Works" />
        <WorksCarousel />
        <Link href="/work" className="outline-button">See More <span>→</span></Link>
      </div>
    </section>
  );
}

const team = [
  ["INT-001", "Alex Johnson", "Frontend Developer", "team-alex"],
  ["INT-002", "Sarah Chen", "UI/UX Designer", "team-sarah"],
  ["INT-003", "Michael Kumar", "Backend Developer", "team-michael"],
  ["INT-004", "Emma Davis", "Full Stack Developer", "team-emma"],
  ["INT-005", "David Lee", "AI/ML Intern", "team-david"],
  ["INT-006", "Lisa Martinez", "DevOps Intern", "team-lisa"],
] as const;

export function TeamSection() {
  return (
    <section className="team-section">
      <div className="page-shell">
        <SectionIntro eyebrow="Our Team" title="Need to change the title Interns" description="NEED to change the sub title" />
        <div className="team-grid">
          {team.map(([id, name, role, kind]) => (
            <article className="team-card" key={id}>
              <div className={`team-portrait ${kind}`}><span className="team-face" /><span className="team-shoulders" /><span className="team-id">{id}</span><button type="button" aria-label={`Play introduction for ${name}`} className="team-play"><Icon name="play" size={19} /></button></div>
              <div className="team-info"><h3>{name}</h3><p>{role}</p></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ContactSection() {
  return (
    <section className="contact-section">
      <div className="page-shell">
        <div className="contact-card">
          <h2>Grow Your Brand Fast<br />with Our Digital Marketing<br />Expertise</h2>
          <p>Ready to speak with a marketing expert? Give us a ring</p>
          <div className="contact-actions">
            <a href="tel:+8801897015708" className="contact-phone"><Icon name="phone" size={20} /><span><small>Phone Number</small><strong>+8801897-015708</strong></span></a>
            <Link href="/contact" className="contact-consultation">Get Free Consultation <Icon name="send" size={18} /></Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function HomeFooter() {
  return (
    <footer className="home-footer">
      <div className="footer-wave" aria-hidden="true">
        <svg className="footer-wave__svg" viewBox="0 0 1440 72" preserveAspectRatio="none">
          <g transform="rotate(180 720 36)">
            <path d="M0 24C240 -8 480 -8 720 24C960 56 1200 56 1440 24V72H0V24Z" fill="currentColor" />
          </g>
        </svg>
      </div>
      <div className="footer-inner">
        <div className="page-shell footer-content">
          <Image src="/assets/nexgenix-logo.svg" alt="NexGenix" width={180} height={130} className="footer-logo" unoptimized />
          <p className="footer-tagline">Riding the wave of tomorrow</p>
          <div className="footer-columns">
            <div><h3>Company</h3><Link href="/about">About</Link><Link href="/careers">Careers</Link><Link href="/work">Press</Link><Link href="/partners">Partners</Link></div>
            <div><h3>Resources</h3><Link href="/docs">Documentation</Link><Link href="/tutorials">Tutorials</Link><Link href="/support">Support</Link><Link href="/status">Status</Link></div>
            <div><h3>Connect</h3><div className="social-links">
              <a href="#facebook" aria-label="Facebook"><Image src="/assets/icons/facebook.svg" alt="" width={20} height={20} className="h-4 w-auto" unoptimized /></a>
              <a href="#twitter" aria-label="Twitter"><Image src="/assets/icons/x.svg" alt="" width={20} height={20} unoptimized /></a>
              <a href="#instagram" aria-label="Instagram"><Image src="/assets/icons/instagram.svg" alt="" width={20} height={20} unoptimized /></a>
              <a href="#linkedin" aria-label="LinkedIn"><Image src="/assets/icons/linkedin.svg" alt="" width={20} height={20} unoptimized /></a>
              <a href="#github" aria-label="GitHub"><Image src="/assets/icons/github.svg" alt="" width={20} height={20} unoptimized /></a>
            </div></div>
          </div>
          <div className="footer-bottom">© 2026 NexGenix Technologies. Shaping tomorrow, today.</div>
        </div>
      </div>
    </footer>
  );
}
