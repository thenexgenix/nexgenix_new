import Image from "next/image";

type ServiceIconProps = {
    src: string;
};

function ServiceIcon({ src }: ServiceIconProps) {
    return (
        <Image
            src={src}
            alt=""
            width={28}
            height={28}
            className="h-7 w-7 shrink-0 object-contain"
            unoptimized
        />
    );
}

const services = [
    {
        title: "Google Ads",
        description:
            "Grow your business with our expert Google Ads management. We create high-converting ads that maximize ROI and minimize spend.",
        icon: "/assets/services/google-ads.svg",
        gradient: "from-cyan-400 to-blue-600",
    },
    {
        title: "Social Media Marketing",
        description:
            "Amplify your brand with our social media marketing expertise. We create engaging content and build thriving communities.",
        icon: "/assets/services/social-media.svg",
        gradient: "from-purple-500 to-pink-500",
    },
    {
        title: "Search Engine Optimization",
        description:
            "Boost your online visibility with our comprehensive SEO services. We optimize your website to achieve top rankings and drive organic growth.",
        icon: "/assets/services/seo.svg",
        gradient: "from-green-400 to-cyan-500",
    },
    {
        title: "Design & Production",
        description:
            "Turn creative ideas into stunning visuals. Our design and production services deliver eye-catching content that captivates your audience.",
        icon: "/assets/services/design-production.svg",
        gradient: "from-orange-400 to-red-500",
    },
];

export default function ServicesSection() {
    return (
        <section
            id="services"
            className="home-services-section relative z-30 mx-auto flex w-full max-w-[1248px] flex-col"
        >
            <div className="home-services-heading flex flex-col items-center gap-4">
                <div className="flex h-11 items-center rounded-full border border-white/20 bg-white/[0.06] px-5 text-sm text-white/80">
                    What We Offer
                </div>

                <h2 className="home-services-title font-['Arial_Black'] font-black tracking-tight text-white">
                    Our Services
                </h2>
            </div>

            <div className="home-services-grid grid h-auto grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {services.map((service) => (
                    <article
                        key={service.title}
                        className="home-glass-card home-service-card flex flex-col rounded-2xl p-6"
                    >
                        <div
                            className={`home-service-icon flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${service.gradient}`}
                        >
                            <ServiceIcon src={service.icon} />
                        </div>

                        <h3 className="mt-5 text-xl font-bold text-white">
                            {service.title}
                        </h3>

                        <p className="mt-3 text-sm leading-6 text-white/65">
                            {service.description}
                        </p>
                    </article>
                ))}
            </div>

            <button
                type="button"
                className="home-see-more mx-auto flex h-12 items-center gap-2 rounded-full px-4 text-sm font-semibold text-white transition"
            >
                See More
                <span aria-hidden="true" className="text-lg leading-none">
                    {"\u2192"}
                </span>
            </button>

            <div className="home-services-separator home-services-separator--violet" aria-hidden="true" />
            <div className="home-services-separator home-services-separator--violet" aria-hidden="true" />
        </section>
    );
}
