"use client";

import { motion } from "framer-motion";
import { Palette, Users, Terminal, Sparkles } from "lucide-react";

export default function TechnicalSkills() {
    const skillCategories = [
        {
            category: "Design",
            icon: <Palette className="w-5 h-5 mb-4 text-black/50 dark:text-white/50" />,
            skills: ["Figma", "Sketch App", "Adobe Suite"]
        },
        {
            category: "Collaboration",
            icon: <Users className="w-5 h-5 mb-4 text-black/50 dark:text-white/50" />,
            skills: ["Miro", "Mural", "Google Suite", "Microsoft Suite"]
        },
        {
            category: "Vibe Coding",
            icon: <Terminal className="w-5 h-5 mb-4 text-black/50 dark:text-white/50" />,
            skills: ["Antigravity", "Claude", "Github", "Vercel"]
        },
        {
            category: "AI Tools",
            icon: <Sparkles className="w-5 h-5 mb-4 text-black/50 dark:text-white/50" />,
            skills: ["Google Whisk", "Google Gemini", "Adobe Firefly", "ChatGPT", "Microsoft Copilot"]
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
                            Technical Skills
                        </motion.h2>
                    </div>

                    {/* Right Column: 4 Cards */}
                    <div className="w-full lg:w-2/3">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
                            {skillCategories.map((group, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
                                    className="flex flex-col items-start justify-center p-6 md:p-8 lg:p-10 rounded-3xl border border-black/5 dark:border-white/5 bg-black/[0.02] dark:bg-white/[0.02] backdrop-blur-md shadow-2xl overflow-hidden relative group transition-all duration-300 hover:-translate-y-1 hover:bg-black/[0.04] dark:hover:bg-white/[0.04] hover:border-black/10 dark:hover:border-white/10 w-full"
                                >
                                    {/* Subtle gradient glow effect inside the card */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-black/5 dark:from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

                                    <div className="relative z-10 text-left w-full">
                                        {group.icon}
                                        <h3 className="text-base md:text-lg font-semibold tracking-tight text-black/90 dark:text-white mb-4">
                                            {group.category}
                                        </h3>
                                    </div>
                                    <ul className="flex flex-col items-start gap-y-2 relative z-10 text-left w-full">
                                        {group.skills.map((skill, skillIndex) => (
                                            <li
                                                key={skillIndex}
                                                className="text-sm md:text-base font-light text-black/60 dark:text-white/60"
                                            >
                                                {skill}
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
