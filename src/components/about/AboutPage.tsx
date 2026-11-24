import Link from "next/link";
import { HomeFooter } from "@/components/home/HomeSections";

const leaders = [
  { name: "Khaled Ammar", role: "UI/UX Design Intern" },
  { name: "Khaled Ammar", role: "UI/UX Design Intern" },
  { name: "Khaled Ammar", role: "UI/UX Design Intern" },
];

const members = [
  { name: "Khaled Ammar", role: "UI/UX Design Intern" },
  { name: "Khaled Ammar", role: "UI/UX Design Intern" },
  { name: "Khaled Ammar", role: "UI/UX Design Intern" },
  { name: "Khaled Ammar", role: "UI/UX Design Intern" },
  { name: "Khaled Ammar", role: "UI/UX Design Intern" },
  { name: "Khaled Ammar", role: "UI/UX Design Intern" },
];

const missions = [
  {
    title: "The Golden Mission",
    items: [
      "Excel in social media marketing strategies.",
      "Pursue high-impact approaches to connect with audiences.",
      "Drive significant interaction and community growth.",
    ],
    position: "mission-card--golden",
  },
  {
    title: "The Marketing Event Vision",
    items: [
      "Champion integrated marketing excellence.",
      "Deliver seamless multi-channel experiences.",
      "Focus on generating impactful ROI and brand visibility.",
    ],
    position: "mission-card--event",
  },
  {
    title: "The Marketing Excellence Mission",
    items: [
      "Lead in event marketing with distinction.",
      "Set industry benchmarks through innovative campaigns.",
      "Ensure outstanding engagement and measurable outcomes.",
    ],
    position: "mission-card--excellence",
  },
  {
    title: "The Marketing Society Vision",
    items: [
      "Pioneer the use of technology in marketing.",
      "Leverage data-driven strategies for superior results.",
      "Enhance customer experiences through cutting-edge solutions.",
    ],
    position: "mission-card--society",
  },
  {
    title: "Event Marketing Mission",
    items: [
      "Create compelling and immersive brand experiences.",
      "Maximize audience participation and loyalty.",
      "Deliver events that inspire and convert.",
    ],
    position: "mission-card--event-mission",
  },
  {
    title: "The Marketing Excellence Vision",
    items: [
      "Strive to lead with outstanding marketing initiatives.",
      "Aim for exceptional engagement and brand prominence.",
      "Commit to creativity and innovation in every project.",
    ],
    position: "mission-card--vision",
  },
];

function Placeholder({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div className={`about-placeholder ${className}`} role="img" aria-label={label}>
      <span>{label}</span>
    </div>
  );
}

function PersonCard({ name, role, kind }: { name: string; role: string; kind: "leader" | "member" }) {
  return (
    <article className={`about-person-card about-person-card--${kind}`}>
      <Placeholder label="Add portrait" className="about-person-card__portrait" />
      <div className="about-person-card__caption">
        <h3>{name}</h3>
        <p>{role}</p>
      </div>
    </article>
  );
}

export default function AboutPage() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="about-hero__inner page-shell">
          <div className="about-hero__copy">
            <h1>To Drive Community Engagement</h1>
            <p>
              Empowering individuals through collaborative programs, meaningful connections, and sustainable community development initiatives that create lasting positive change.
            </p>
          </div>
          <Placeholder label="Add community image" className="about-hero__image" />
        </div>
        <div className="about-hero__bar" aria-hidden="true" />
      </section>

      <section className="about-leadership page-shell" aria-labelledby="ceo-heading">
        <div className="about-ceo-card">
          <Placeholder label="Add CEO portrait" className="about-ceo-card__portrait" />
          <div className="about-ceo-card__copy">
            <h2 id="ceo-heading">Prashanta Dey</h2>
            <p className="about-ceo-card__role">CEO • The NexGenix Ltd.</p>
            <p>
              I&apos;m Prashanta Dey, the CEO of The NexGenix Ltd., where we specialize in Social Media Marketing and SEO. My journey in the digital space started with a simple goal—helping businesses grow online through smart strategies and data-driven marketing. At NexGenix, we focus on building strong brand presence, increasing visibility, and driving real results for our clients. I believe in creativity backed by strategy, ensuring every campaign we run and every SEO effort we make adds real value. For me, it&apos;s not just about marketing—it&apos;s about helping brands connect, engage, and grow in the digital world.
            </p>
            <div className="about-ceo-card__actions">
              <a href="mailto:prashantadey.pda@gmail.com">✉&nbsp; prashantadey.pda@gmail.com</a>
              <a href="#linkedin">in&nbsp; Linkedin</a>
            </div>
          </div>
        </div>
      </section>

      <section className="about-team page-shell" aria-labelledby="leaders-heading">
        <h2 id="leaders-heading" className="about-section-title">Team Leaders</h2>
        <div className="about-people-grid about-people-grid--leaders">
          {leaders.map((person, index) => <PersonCard key={`${person.name}-${index}`} {...person} kind="leader" />)}
        </div>
        <Link href="#members" className="about-view-all"><span>→</span> View All</Link>

        <h2 id="members" className="about-section-title about-section-title--members">Team Members</h2>
        <div className="about-people-grid">
          {members.map((person, index) => <PersonCard key={`${person.name}-${index}`} {...person} kind="member" />)}
        </div>
      </section>

      <section className="about-mission" aria-labelledby="mission-heading">
        <div className="page-shell">
          <span className="about-eyebrow">What Drives Us</span>
          <h2 id="mission-heading">Mission &amp; Vision</h2>
          <div className="mission-grid">
            {missions.map((mission) => (
              <article className={`mission-card ${mission.position}`} key={mission.title}>
                <h3>{mission.title}</h3>
                <ul>{mission.items.map((item) => <li key={item}>{item}</li>)}</ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <HomeFooter />
    </main>
  );
}
