"use client";

import { motion } from "framer-motion";

export default function Recognition() {
    const awards = [
        {
            title: "Silver Star Award",
            organization: "HDFC Bank",
            year: "2019"
        },
        {
            title: "Silver Star Award",
            organization: "HDFC Bank",
            year: "2018"
        },
        {
            title: "App Contest Finalist",
            organization: "Google + Prime Minister’s Office App Innovation Challenge",
            year: "2015"
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
                            Community & Recognition
                        </motion.h2>
                    </div>

                    {/* Right Column: Awards List */}
                    <div className="w-full lg:w-2/3">
                        <div className="flex flex-col w-full">
                            {awards.map((award, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.05 }}
                                    className="flex flex-col sm:flex-row items-start sm:items-center justify-between py-6 md:py-8 border-b first:border-t border-black/10 dark:border-white/10 group cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:bg-black/[0.03] dark:hover:bg-white/[0.03] -mx-4 md:-mx-6 px-4 md:px-6"
                                >
                                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-8 w-full pr-4 md:pr-8">

                                        {/* Award Title */}
                                        <div className="w-full sm:w-64 xl:w-72 shrink-0 flex flex-col items-start gap-1">
                                            <span className="font-semibold text-base md:text-lg tracking-tight text-black/90 dark:text-white/90 leading-none">
                                                {award.title}
                                            </span>
                                        </div>

                                        {/* Organization & Year */}
                                        <div className="flex-grow flex gap-1 w-full sm:w-auto mt-2 sm:mt-0 flex-col lg:flex-row lg:justify-between lg:items-center">
                                            <span className="text-sm md:text-base font-light text-black/80 dark:text-white/80 pr-4">
                                                {award.organization}
                                            </span>
                                            <span className="text-xs md:text-[13px] font-mono text-black/40 dark:text-white/40 mt-2 lg:mt-0 shrink-0">
                                                {award.year}
                                            </span>
                                        </div>
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
