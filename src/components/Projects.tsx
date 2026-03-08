"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { GlareCard } from "@/components/ui/glare-card";

import { PROJECTS } from "@/lib/constants";

interface ProjectsProps {
    limit?: number;
    hideSeeAll?: boolean;
}

export default function Projects({ limit, hideSeeAll }: ProjectsProps = {}) {
    const displayedProjects = limit ? PROJECTS.slice(0, limit) : PROJECTS;
    return (
        <section id="work" className="min-h-screen bg-background text-foreground py-24 px-6 md:px-12 relative z-10 overflow-hidden transition-colors duration-300">
            <div className="max-w-[1200px] mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-16 flex flex-col items-center text-center"
                >
                    <h2 className="text-sm md:text-base font-semibold tracking-[0.3em] uppercase mb-4 text-black/50 dark:text-white/50">
                        Selected Work
                    </h2>
                </motion.div>

                <div className="flex flex-col md:flex-row flex-wrap justify-center items-stretch gap-5 w-full">
                    {displayedProjects.map((project, idx) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: idx * 0.12, ease: "easeOut" }}
                            className="w-full md:w-[32%] h-[360px] md:h-[440px] cursor-pointer"
                        >
                            <Link href={`/work/${project.slug}`} className="block w-full h-full">
                                <GlareCard className="relative w-full h-full">
                                    {/* Project image | full cover */}
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        quality={100}
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                        className="object-cover object-center opacity-90"
                                    />

                                    {/* Bottom dark gradient */}
                                    <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#0d0d0d] to-transparent z-10" />

                                    {/* Content layer */}
                                    <div className="absolute inset-0 p-8 flex flex-col justify-between z-20">
                                        {/* Top: Title & NDA Chip */}
                                        <div className="flex flex-col gap-3 items-start">
                                            {project.isNDA && (
                                                <div className="px-3 py-1 rounded-lg bg-white/90 backdrop-blur-sm border border-black/5 text-[9px] font-bold tracking-[0.05em] text-black">
                                                    NDA
                                                </div>
                                            )}
                                            <h3 className="text-base font-medium tracking-wide text-white leading-snug max-w-[85%]">
                                                {project.title}
                                            </h3>
                                        </div>

                                        {/* Bottom section: Stats + Year */}
                                        <div className="mt-auto flex flex-col gap-6">
                                            {project.stat && (
                                                <div className="flex flex-col items-start gap-1">
                                                    <span className="text-4xl md:text-5xl font-extralight tracking-tighter text-white">
                                                        {project.stat.value}
                                                    </span>
                                                    <span className="text-[10px] md:text-xs font-medium tracking-[0.1em] text-white/70 uppercase max-w-[140px] leading-tight">
                                                        {project.stat.label}
                                                    </span>
                                                </div>
                                            )}

                                            <div className="text-white/60 text-sm font-medium tracking-[0.2em]">
                                                {project.year}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Right side: vertical category + plus */}
                                    <div className="absolute right-6 top-8 bottom-8 flex flex-col justify-between items-center z-20 pointer-events-none">
                                        <span
                                            className="text-white/50 text-[10px] font-medium tracking-[0.22em] uppercase whitespace-nowrap"
                                            style={{ writingMode: "vertical-rl", textOrientation: "mixed", transform: "rotate(180deg)" }}
                                        >
                                            {project.category}
                                        </span>
                                        <span className="text-white/50 text-2xl font-light leading-none">+</span>
                                    </div>
                                </GlareCard>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* See All button */}
                {!hideSeeAll && (
                    <div className="flex justify-center mt-12">
                        <Link
                            href="/work"
                            className="text-xs font-semibold tracking-[0.2em] uppercase text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white transition-colors border-b border-black/20 dark:border-white/20 hover:border-black dark:hover:border-white pb-0.5"
                        >
                            See All →
                        </Link>
                    </div>
                )}
            </div>
        </section>
    );
}

