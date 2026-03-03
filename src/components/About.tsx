"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface AboutProps {
    hidePhoto?: boolean;
}

export default function About({ hidePhoto }: AboutProps) {
    return (
        <>
            {/* Full screen Hero Image (Only on standalone About page) */}
            {!hidePhoto && (
                <section className="relative w-full h-screen min-h-[500px]">
                    <Image
                        src="/profile.png"
                        alt="Kashyap Rathod"
                        fill
                        className="object-cover object-center"
                        unoptimized
                        priority
                    />

                    {/* Explore Link Overlay */}
                    <div className="absolute top-1/2 right-6 md:right-12 -translate-y-1/2 flex justify-end z-20">
                        <a
                            href="#about"
                            onClick={(e) => {
                                e.preventDefault();
                                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="text-white text-lg md:text-xl font-light tracking-wide drop-shadow-lg hover:opacity-70 transition-opacity flex items-center gap-2"
                        >
                            Explore <span className="text-xl">&darr;</span>
                        </a>
                    </div>
                </section>
            )}

            {/* Content Section (Identical to homepage, with optional title) */}
            <section id="about" className={`bg-background ${hidePhoto ? "pt-32" : "pt-24"} pb-8 px-6 md:px-12 relative z-10 text-foreground flex flex-col justify-center transition-colors duration-300`}>
                <div className="max-w-[1400px] mx-auto w-full">

                    {/* Split Layout for Text */}
                    <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-24 mb-8 lg:mb-12">

                        {/* Left Column (Sticky Title & Subtitle) */}
                        <div className="lg:w-1/3 shrink-0 flex flex-col gap-12 lg:gap-20 sticky top-32">
                            {/* Optional About Me title only on standalone page */}
                            {!hidePhoto && (
                                <div className="text-black/50 dark:text-white/50">
                                    <h2 className="text-sm md:text-base font-semibold tracking-[0.3em] uppercase">
                                        About Me
                                    </h2>
                                </div>
                            )}
                        </div>

                        {/* Right Column: Body Text */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                            className="w-full lg:w-2/3"
                        >
                            <div className="space-y-6 text-lg md:text-xl font-light leading-relaxed text-black/60 dark:text-white/50">
                                <p className="font-medium text-black/90 dark:text-white/90 mb-6">
                                    I design clarity inside complex systems.
                                </p>
                                <p>
                                    With 14 years shaping digital products and enterprise platforms, I help organizations turn insight into execution. My work connects business ambition with human-centered design aligning strategy, experience, and delivery.
                                </p>
                                <p>
                                    I lead multidisciplinary teams, build scalable design systems, and influence product direction at every level from roadmap conversations to shipped experiences.
                                </p>
                                <p className="mt-8">
                                    <span className="font-medium text-black/90 dark:text-white/90 block mb-2">Design, to me, is leverage.</span>
                                    It simplifies decisions, accelerates growth, and makes technology feel human.
                                </p>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>
        </>
    );
}
