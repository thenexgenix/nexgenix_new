"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navigationItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Our Projects", href: "/work" },
    { label: "Our Events", href: "/events" },
    { label: "About Us", href: "/about" },
];

export default function Header() {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);

    const isActive = (href: string) => {
        if (href === "/") return pathname === "/";
        return pathname === href || pathname.startsWith(`${href}/`);
    };

    return (
        <header className="absolute left-0 right-0 top-4 z-50 w-full px-4 sm:px-6">
            <div className="mx-auto flex h-24 max-w-[1248px] items-center rounded-[60px] border border-white/30 bg-white/10 px-8 shadow-[0_0_24px_rgba(255,255,255,0.08)] backdrop-blur-xl">
                <Link
                    href="/"
                    aria-label="NexGenix home"
                    onClick={() => setMenuOpen(false)}
                    className="flex h-24 w-[122px] shrink-0 items-center"
                >
                    <Image
                        src="/assets/nexgenix-logo.svg"
                        alt="NexGenix"
                        width={244}
                        height={192}
                        priority
                        unoptimized
                        className="h-24 w-[122px] object-contain"
                    />
                </Link>

                <div className="ml-auto hidden items-center gap-[54px] lg:flex">
                    <nav className="flex h-14 w-[593px] items-center gap-6 px-4">
                        {navigationItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="px-1 pb-px text-[19px] font-normal leading-6 text-white transition-colors hover:text-fuchsia-200"
                            >
                                <span
                                    className={
                                        isActive(item.href)
                                            ? "border-b border-white"
                                            : undefined
                                    }
                                >
                                    {item.label}
                                </span>
                            </Link>
                        ))}
                    </nav>

                    <Link
                        href="/apply"
                        className="flex h-10 w-[214px] items-center justify-center rounded-full border border-white/25 bg-black/[0.01] px-4 text-[19px] font-bold leading-6 text-white shadow-[0_0_4px_rgba(255,255,255,0.25)] backdrop-blur-[18px] transition hover:border-white/50 hover:bg-white/10"
                    >
                        Apply for NexIntern
                    </Link>
                </div>

                <button
                    type="button"
                    aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
                    aria-expanded={menuOpen}
                    onClick={() => setMenuOpen((current) => !current)}
                    className="ml-auto flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-full border border-white/25 bg-white/10 lg:hidden"
                >
                    <span className="h-0.5 w-5 bg-white" />
                    <span className="h-0.5 w-5 bg-white" />
                    <span className="h-0.5 w-5 bg-white" />
                </button>
            </div>

            {menuOpen && (
                <nav className="mx-4 mt-3 rounded-3xl border border-white/20 bg-[#24152e]/95 p-5 shadow-xl backdrop-blur-xl sm:mx-6 lg:hidden">
                    <div className="flex flex-col gap-4">
                        {navigationItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setMenuOpen(false)}
                                className={`rounded-xl px-4 py-3 text-white ${isActive(item.href)
                                        ? "bg-white/10"
                                        : "hover:bg-white/5 hover:text-fuchsia-200"
                                    }`}
                            >
                                {item.label}
                            </Link>
                        ))}

                        <Link
                            href="/apply"
                            onClick={() => setMenuOpen(false)}
                            className="rounded-full border border-white/25 bg-white/10 px-5 py-3 text-center font-semibold text-white"
                        >
                            Apply for NexIntern
                        </Link>
                    </div>
                </nav>
            )}
        </header>
    );
}