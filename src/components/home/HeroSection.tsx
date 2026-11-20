import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
    return (
        <section className="relative min-h-[810px] overflow-hidden bg-[#19032a]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_16%,rgba(112,34,154,0.42),transparent_30%),radial-gradient(circle_at_55%_58%,rgba(49,8,85,0.5),transparent_46%)]" />
            <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:linear-gradient(to_bottom,black,transparent_55%)]" />

            <div className="relative mx-auto flex min-h-[810px] max-w-[1257px] items-start px-6 pb-12 pt-[153px] lg:px-0">
                <div className="grid w-full items-start gap-10 lg:grid-cols-[minmax(0,1fr)_632px] lg:-space-x-[100px]">
                    <div className="z-10 pt-[101px]">
                        <h1
                            className="max-w-[763px] text-5xl leading-tight font-bold text-white sm:text-6xl lg:text-[64px] lg:leading-[80px]"
                            style={{
                                fontFamily: '"OMEGLE", Inter, Arial, sans-serif',
                                fontWeight: 400,
                            }}
                        >
                            Elevate Your Brand with Tailored Marketing
                        </h1>

                        <p className="mt-6 max-w-[600px] text-lg leading-[1.2] text-[#d5d5d5] sm:text-2xl lg:text-[28px]">
                            Experience cutting-edge solutions designed to elevate
                            productivity and deliver results like never before.
                        </p>

                        <Link
                            href="/#services"
                            className="relative z-30 mt-6 flex h-[66px] w-[251px] items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-3 text-white shadow-[0_0_20px_rgba(255,255,255,0.08)] backdrop-blur-xl transition hover:bg-white/20"
                        >
                            <Image
                                src="/assets/hero-arrow.png"
                                alt=""
                                width={100}
                                height={108}
                                unoptimized
                                className="h-[42px] w-[42px] object-contain"
                            />

                            <span className="text-xl font-bold lg:text-[23px]">
                                Start A Project
                            </span>
                        </Link>
                    </div>

                    <div className="relative h-[658px] w-full">
                        <div className="absolute left-1/2 top-0 h-[524px] w-[524px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_50%_42%,#ffffff_0%,#d28bff_18%,#8c3dd1_40%,#321044_65%,#19032a_78%)] shadow-[0_0_35px_22px_rgba(102,78,109,0.8)]" />

                        <div className="absolute left-1/2 top-[8px] h-[508px] w-[508px] -translate-x-1/2 rounded-full bg-[#19032a]" />

                        <div className="absolute left-1/2 top-[28px] h-[470px] w-[470px] -translate-x-1/2 rounded-full border-[7px] border-fuchsia-300/80 shadow-[0_0_18px_8px_rgba(217,70,239,0.75)]" />

                        <Image
                            src="/assets/hero-vr-woman.png"
                            alt="Woman using a virtual reality headset"
                            width={1264}
                            height={1012}
                            priority
                            unoptimized
                            className="absolute left-1/2 top-[116px] z-10 h-auto w-[632px] max-w-none -translate-x-1/2 object-contain"
                        />
                    </div>
                </div>
            </div>
            {/* Bottom edge fade + blur only */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-[160px] bg-gradient-to-b from-transparent to-[#19032a] backdrop-blur-[100px] [mask-image:linear-gradient(to_bottom,transparent,black_45%)]" />
        </section>
    );
}
