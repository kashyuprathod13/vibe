"use client";

import { motion } from "framer-motion";

export default function Education() {
    const educationItems = [
        {
            degree: "Executive PG Certification in UI/UX Design",
            institution: "IIT Roorkee",
            year: "2023–2024"
        },
        {
            degree: "Bachelor's in Mass Media",
            subtitle: "Advertising & Media",
            institution: "University of Mumbai",
            year: "2012"
        },
        {
            degree: "Member & Certified",
            institution: "Interaction Design Foundation",
            year: "Ongoing"
        }
    ];

    return (
        <section className="bg-background py-16 md:py-24 px-6 md:px-12 relative z-10 text-foreground flex flex-col justify-center transition-colors duration-300">
            <div className="max-w-[1400px] mx-auto w-full">

                {/* Split Layout */}
                <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-24">

                    {/* Left Column (Section Title) */}
                    <div className="lg:w-1/3 shrink-0 flex flex-col gap-6 sticky top-32">
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="text-sm md:text-base font-semibold tracking-[0.3em] text-black/50 dark:text-white/50 uppercase"
                        >
                            Education & Certifications
                        </motion.h2>
                    </div>

                    {/* Right Column: Education Grid */}
                    <div className="w-full lg:w-2/3">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                            {educationItems.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
                                    className="p-6 md:p-8 rounded-3xl border border-black/5 dark:border-white/5 bg-black/[0.02] dark:bg-white/[0.02] backdrop-blur-md shadow-2xl overflow-hidden relative group transition-all duration-300 hover:-translate-y-1 hover:bg-black/[0.04] dark:hover:bg-white/[0.04] hover:border-black/10 dark:hover:border-white/10 w-full flex flex-col justify-between"
                                >
                                    {/* Subtle gradient glow effect inside the card */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-black/5 dark:from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

                                    {/* Top Content */}
                                    <div className="flex flex-col gap-2 relative z-10 w-full">
                                        <h3 className="text-base md:text-lg font-semibold tracking-tight text-black/90 dark:text-white/90 leading-tight">
                                            {item.degree}
                                        </h3>
                                        {item.subtitle && (
                                            <p className="text-sm md:text-base font-light text-black/60 dark:text-white/60">
                                                {item.subtitle}
                                            </p>
                                        )}
                                    </div>

                                    {/* Bottom Content */}
                                    <div className="flex items-end justify-between mt-6 relative z-10 w-full">
                                        <span className="text-sm md:text-base font-medium text-black/80 dark:text-white/80">
                                            {item.institution}
                                        </span>
                                        <span className="text-xs md:text-sm font-mono text-black/40 dark:text-white/40 group-hover:text-black/60 dark:group-hover:text-white/60 transition-colors">
                                            {item.year}
                                        </span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
