"use client";

import { motion } from "framer-motion";

export default function Process() {
    const methodologies = [
        {
            number: "01",
            title: <>Human-Centric<br />Strategy</>,
            description: "Rooting every product decision in deep user empathy. We don't just solve business problems; we eliminate human friction by understanding the emotional and behavioral drivers behind every interaction."
        },
        {
            number: "02",
            title: <>Cross-Functional<br />Synergy</>,
            description: "True innovation doesn't happen in silos. I bridge the gap between design, engineering, and product management, fostering a collaborative environment where diverse perspectives converge into unified solutions."
        },
        {
            number: "03",
            title: <>Data-Informed<br />Intuition</>,
            description: "Marrying qualitative insights with quantitative metrics. I leverage data to validate hypotheses and measure impact, while trusting seasoned design intuition to take necessary creative leaps."
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
                            Process & Philosophy
                        </motion.h2>
                    </div>

                    {/* Right Column: 3-Column Grid */}
                    <div className="w-full lg:w-2/3">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                            {methodologies.map((method, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.15 }}
                                    className="flex flex-col gap-4 relative group pt-2"
                                >
                                    <h3 className="text-lg md:text-xl font-semibold tracking-tight text-black/90 dark:text-white/90">
                                        {method.title}
                                    </h3>

                                    <p className="text-sm md:text-base font-light leading-relaxed text-black/60 dark:text-white/60">
                                        {method.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
