import type { ProjectDetails } from "../types";

/**
 * Content for the NEX HOME project details page.
 * Image files are expected in /public/projects/nex home/ - if a file is missing
 * the page shows a labelled placeholder instead of a broken image.
 */
export const nexHome: ProjectDetails = {
    slug: "nex-home",

    seo: {
        title: "NEX HOME - Reliable Home Services, One Click Away",
        description:
            "A digital platform connecting homeowners with trusted service providers for home improvement, repair, and maintenance through a seamless booking experience.",
    },

    hero: {
        badge: "Featured Project 2024",
        title: "NEX HOME",
        subtitle: "Reliable Home Services, One Click Away",
        description:
            "NEX Home is a digital platform designed to simplify access to professional home improvement and repair services. From plumbing and electrical work to renovation and maintenance, the website connects homeowners with trusted service providers through a seamless and structured booking experience.",
        image: {
            src: "/projects/nex home/hero.svg",
            alt: "NEX HOME landing page and service sections shown on desktop",
        },
    },

    challenge: {
        emoji: "🎯",
        title: "The Challenge",
        paragraphs: [
            // Part of the middle line was illegible in the design; the visible
            // fragments are joined here without adding further claims.
            "Homeowners often struggle to find reliable service providers, with scattered information and delayed decision-making.",
        ],
    },

    solution: {
        emoji: "✨",
        title: "The Solution",
        paragraphs: [
            "NEX Home was built to provide clear, trustworthy, and efficient services, verified professional profiles, simplified request submission, and transparent communication flow.",
        ],
    },

    responsive: {
        title: "Responsive Design",
        subtitle: "Seamlessly adapted for desktop, tablet, and mobile devices",
        image: {
            src: "/projects/nex home/responsive-devices.svg",
            alt: "NEX HOME shown on desktop, tablet, and mobile devices",
        },
    },

    designSystem: {
        title: "Design System",
        subtitle: "A Bold and Future-Focused Visual Identity for Innovation",
        colors: [
            { hex: "#15B2F5", name: "Sky Blue" },
            { hex: "#FFFFFF", name: "Clean Base" },
            { hex: "#142257", name: "Midnight Blue" },
        ],
        typography: {
            sample: "NEX HOME",
            family: "Plus Jakarta Sans",
            description:
                "Plus Jakarta Sans was chosen for its modern and approachable appearance, ensuring clarity for young audiences while maintaining corporate professionalism.",
        },
        features: [
            "Online Service Booking Form",
            "Verified Professional Profiles",
            "Pricing Transparency Section",
            "Customer Reviews & Ratings",
            "Mobile Responsive Interface",
        ],
    },

    platforms: {
        title: "Multi-Platform Presentation",
        subtitle: "Optimized for seamless viewing across all devices",
        items: [
            {
                variant: "mobile",
                icon: "smartphone",
                title: "Mobile Experience",
                description:
                    "The design is perfectly optimized for mobile-first social platforms. The vertical composition ensures maximum impact on mobile feeds, with clear readability and emotional resonance.",
                bullets: [
                    "Fast and Easy to use",
                    "Smooth Onboarding",
                    "High Resolution for Retina Displays",
                ],
                image: {
                    src: "/projects/nex home/platform-mobile.svg",
                    alt: "NEX HOME interface on a smartphone",
                },
            },
            {
                variant: "desktop",
                icon: "monitor",
                title: "Desktop Showcase",
                description:
                    "When viewed on desktop platforms like LinkedIn and Facebook, the design maintains its impact with crisp details and elegant proportions. Perfect for professional sharing and brand presentation.",
                bullets: [
                    "Smooth Onboarding",
                    "Website Banner Compatible",
                    "High Resolution for Retina Displays",
                ],
                image: {
                    src: "/projects/nex home/platform-desktop.svg",
                    alt: "NEX HOME interface on a desktop monitor",
                },
            },
            {
                variant: "tablet",
                icon: "tablet",
                title: "Tablet Adaptation",
                description:
                    "The design scales beautifully on tablet devices, perfect for smooth onboarding. The composition remains impactful at any size.",
                bullets: [
                    "Tablet Optimized",
                    "iPad & Android Tablet Ready",
                    "Smooth Onboarding & Compatible",
                ],
                image: {
                    src: "/projects/nex home/platform-tablet.svg",
                    alt: "NEX HOME interface on a tablet",
                },
            },
        ],
    },

    process: {
        title: "Our Work Process",
        subtitle: "Designing a Practical and Trustworthy Service Booking Experience",
        steps: [
            {
                icon: "lightbulb",
                title: "Research & Problem Identification",
                description: "Understanding Homeowner Frustrations and Service Gaps",
                tasks: [
                    "Studied user pain points in home service booking",
                    "Analyzed competitor platforms",
                    "Identified trust and pricing transparency issues",
                    "Defined target user personas",
                ],
            },
            {
                icon: "target",
                title: "Information Architecture",
                description: "Structuring Services for Quick Access and Clear Understanding",
                tasks: [
                    "Categorized services logically",
                    "Designed simplified request flow",
                    "Defined CTA placement strategy",
                    "Created structured provider profile layout",
                ],
            },
            {
                icon: "palette",
                title: "Design & Iteration",
                description: "Building a Clean and Action-Oriented Interface",
                tasks: [
                    "Designed service overview pages",
                    "Developed streamlined booking forms",
                    "Implemented trust-building elements",
                    "Ensured mobile-first design",
                ],
            },
            {
                icon: "rocket",
                title: "Launch & Optimization",
                description: "Ensuring Fast, Reliable, and Smooth Platform Exploration",
                tasks: [
                    "Integrated secure booking system",
                    "Conducted usability testing",
                    "Optimized performance and responsiveness",
                ],
            },
        ],
    },

    journey: {
        badge: "The Journey",
        title: "The Story Behind",
        highlight: "NEX HOME",
        subtitle: "From Service Frustration to Reliable Home Solutions",
        milestones: [
            {
                title: "Recognizing the Everyday Problem",
                year: "2022",
                description:
                    "We observed that homeowners often waste time searching for trusted repair professionals. Contact details were scattered, reviews were unreliable, and service pricing lacked transparency. The need for a centralized, structured platform became clear.",
                highlights: [
                    "Lack of verified professionals",
                    "Confusing booking processes",
                    "No pricing clarity",
                    "Limited service comparison",
                ],
            },
            {
                title: "Defining the Right Structure",
                year: "2022",
                description:
                    "Our team worked to design a platform where services are easy to browse and quick to book. By organizing service categories clearly and introducing structured provider profiles, we aimed to reduce hesitation and build confidence.",
                highlights: [
                    "Designed categorized service modules",
                    "Structured provider profile system",
                    "Simplified inquiry flow",
                    "Focused on quick user actions",
                ],
            },
            {
                title: "Crafting the User Experience",
                year: "2022",
                description:
                    "Designers and developers collaborated in focused sprint cycles to create an interface that encourages action. Clear CTAs, strong color accents, and simplified booking steps were implemented to guide users smoothly from service discovery to request submission.",
                highlights: [
                    "Built conversion-focused layouts",
                    "Designed intuitive booking form",
                    "Highlighted trust indicators",
                    "Ensured consistent visual hierarchy",
                ],
            },
            {
                title: "Platform Development",
                year: "2022",
                // The end of this paragraph was cut off in the design; the closing
                // clause below only states what the visible booking context implies.
                description:
                    "Engineers translated the design into scalable front-end components and a secure backend booking system. The infrastructure was built to support reliable service booking.",
                highlights: [
                    "Developed service management system",
                    "Integrated booking database",
                    "Implemented secure communication flow",
                    "Mobile Compatibility",
                ],
            },
            {
                title: "Launch and Continuous Growth",
                year: "2022",
                description:
                    "After launch, analytics were used to monitor booking completion rates and user drop-off points. Future plans include real-time service tracking.",
                highlights: [
                    "Monitored booking analytics",
                    "Planned app-based service tracking",
                    "Deployed live platform",
                    "Improved conversion flow",
                ],
            },
        ],
    },

    team: {
        badge: "Meet The Team",
        title: "The Minds Behind",
        highlight: "NEX HOME",
        subtitle: "A Collaborative Team Delivering Reliable Digital Service Solutions",
        members: [
            {
                name: "Prashanta Dey",
                role: "Product Visionary",
                description:
                    "Conceived the core idea behind Nexgenix and defined the strategic product direction. Leads innovation, growth planning, and overall business execution.",
                icon: "brain",
                tone: "blue",
                image: { src: "/projects/nex home/team-prashanta.svg", alt: "Portrait of Prashanta Dey" },
            },
            {
                name: "Khaled Ammar",
                role: "Lead UI/UX Designer",
                description:
                    "Designed the full user experience and interface, focusing on clean visuals, smooth interactions, and intuitive usability.",
                icon: "palette",
                tone: "blue",
                image: { src: "/projects/nex home/team-khaled.svg", alt: "Portrait of Khaled Ammar" },
            },
            {
                name: "Jannatul Nayeem",
                role: "Flutter Team Lead",
                description:
                    "Led the Flutter development team and ensured the mobile app was efficient, scalable, and high-performing.",
                icon: "search",
                tone: "pink",
                image: { src: "/projects/nex home/team-jannatul.svg", alt: "Portrait of Jannatul Nayeem" },
            },
            {
                name: "Saqib",
                role: "Frontend Developer",
                description:
                    "Built the frontend interface and turned design concepts into responsive, functional web experiences.",
                icon: "briefcase",
                tone: "green",
                image: { src: "/projects/nex home/team-saqib.svg", alt: "Portrait of Saqib" },
            },
        ],
    },

    collaboration: {
        title: "Our Collaborative Journey",
        // Only the closing lines of this paragraph were legible in the design.
        description:
            "Cross-functional collaboration between designers, developers, and researchers ensured that NEX Home balances usability, trust, and performance across the entire service booking journey.",
        stats: [
            { icon: "users", value: "6", label: "Team Members" },
            { icon: "briefcase", value: "6+", label: "Months of Work" },
            { icon: "search", value: "200+", label: "User Interviews" },
            { icon: "palette", value: "50+", label: "Design Iterations" },
        ],
    },

    impact: {
        title: "Project Impact",
        subtitle: "Making legal services accessible to millions",
        stats: [
            { value: "95%", label: "User Satisfaction", tone: "green" },
            { value: "10K+", label: "Active Users", tone: "blue" },
            { value: "50%", label: "Faster Bookings", tone: "pink" },
        ],
    },

    testimonial: {
        quote:
            "The Father's Day campaign exceeded all our expectations. The design perfectly captured the emotional essence we wanted to convey while maintaining our luxury brand identity. The engagement we received was phenomenal, and our clients truly resonated with the message.",
        rating: 5,
        author: "Sarah Johnson",
        role: "Marketing Director, Lumineux Hair Impressions",
        initial: "L",
    },

    takeaways: {
        title: "Key Takeaways",
        subtitle: "Lessons learned and success factors from this campaign",
        items: [
            {
                icon: "heart",
                title: "Emotional Connection",
                description:
                    "Successfully created a design that resonated emotionally with the target audience, resulting in higher engagement and shares.",
            },
            {
                icon: "star",
                title: "Brand Consistency",
                description:
                    "Maintained Lumineux's premium brand identity while crafting a warm, relatable campaign message.",
            },
            {
                icon: "trending-up",
                title: "Multi-Platform Success",
                description:
                    "Design performed exceptionally well across all social media platforms with consistent engagement rates.",
            },
            {
                icon: "target",
                title: "Strategic Timing",
                description:
                    "Campaign launched at optimal time, maximizing visibility during the Father's Day celebration period.",
            },
        ],
    },
};
