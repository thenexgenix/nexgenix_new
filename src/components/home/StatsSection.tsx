import Image from "next/image";

type StatIconProps = {
    type: "support" | "uptime" | "portfolio" | "rating";
};

function StatIcon({ type }: StatIconProps) {
    const icons = {
        support: "/assets/stats/support.svg",
        uptime: "/assets/stats/uptime.svg",
        portfolio: "/assets/stats/project-done.svg",
        rating: "/assets/stats/user-rating.svg",
    };

    return <Image src={icons[type]} alt="" width={32} height={32} unoptimized />;
}

const stats = [
    { type: "support" as const, label: "Fast Support", value: "24/7 Support" },
    { type: "uptime" as const, label: "Security First", value: "99.9% Uptime" },
    { type: "portfolio" as const, label: "Vast Portfolio", value: "200+ Project Done" },
    { type: "rating" as const, label: "User Rating", value: "4.9/5.0" },
];

export default function StatsSection() {
    return (
        <section className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
                <article
                    key={stat.value}
                    className="flex h-[160px] flex-col items-center justify-center rounded-xl border border-white/20 bg-white/[0.08] text-center text-white shadow-[0_0_16px_rgba(177,111,255,0.12)]"
                >
                    <StatIcon type={stat.type} />
                    <p className="mt-3 text-sm text-white/85">{stat.label}</p>
                    <h3 className="mt-2 text-xl font-bold">{stat.value}</h3>
                </article>
            ))}
        </section>
    );
}
