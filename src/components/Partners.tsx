"use client";

import { motion, Variants } from "framer-motion";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const CORE_TOOLS = [
    { name: "Figma", src: "/Figma.png" },
    { name: "Miro", src: "/Miro.png" },
    { name: "Adobe Creative Cloud", src: "/Adobe_Creative_Cloud_rainbow_icon.svg.png" },
    { name: "Google Workspace", src: "/Google-Workspace.png" },
    { name: "Antigravity", src: "/Antigravity.png" },
    { name: "Sketch", src: "/Sketch.png" },
];

const CLIENTS = [
    { 
        name: "Microsoft", 
        light: "/Microsoft-logo-black.png", 
        dark: "/Microsoft-logo-white.png",
        opticalScale: 1.0
    },
    { 
        name: "Google", 
        light: "/Google-logo.png", 
        dark: "/Google-logo.png",
        opticalScale: 1.0
    },
    { 
        name: "Citrix", 
        light: "/Citrix-Logo-Black.png", 
        dark: "/Citrix-Logo-White.png",
        opticalScale: 1.05
    },
    { 
        name: "Hologic", 
        light: "/Hologic-Logo-Blue.png", 
        dark: "/Hologic-Logo-White.png",
        opticalScale: 0.85
    },
    { 
        name: "The Standard", 
        light: "/the-standard-standard-insurance-logo.png", 
        dark: "/the-standard-standard-insurance-logo.png",
        opticalScale: 0.95
    },
    { 
        name: "Grange Insurance", 
        light: "/grange-Logo-dark.png", 
        dark: "/grange-Logo-White.png",
        opticalScale: 0.9
    },
    { 
        name: "Western Union", 
        light: "/WU-Logo-Black.png", 
        dark: "/WU-Logo-White.png",
        opticalScale: 1.1
    }
];

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function Partners() {
    const { theme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const currentTheme = resolvedTheme || theme;
    const [hoveredTool, setHoveredTool] = useState<string | null>(null);

    return (
        <section className="bg-background pt-16 pb-32 px-6 md:px-12 relative z-10 text-foreground flex flex-col items-center justify-center transition-colors duration-300">
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400;500&display=swap');
            `}</style>
            <div className="max-w-5xl mx-auto w-full flex flex-col items-center text-center">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="mb-12"
                >
                    <h3 className="text-sm md:text-base font-semibold tracking-[0.3em] uppercase mb-4 text-black/50 dark:text-white/50">
                        Partners & Platforms
                    </h3>
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight leading-[1.1] mb-6 text-black/50 dark:text-white/50">
                        Trusted by <span className="text-black dark:text-white">Industry Leaders.</span><br className="hidden md:block" /> Powered by <span className="text-black dark:text-white">Modern Tools.</span>
                    </h2>
                    <p className="text-lg md:text-xl text-black/60 dark:text-white/60 font-light max-w-2xl mx-auto">
                        Collaborating with Global Brands. Building with Best-in-Class Tools.
                    </p>
                </motion.div>

                {/* Clients Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-50px" }}
                    className="w-full mb-32"
                >
                    <p className="text-xs tracking-widest text-black/40 dark:text-white/40 uppercase mb-8 border-b border-black/10 dark:border-white/10 pb-4 inline-block">Select Clients</p>
                    <div className="flex flex-wrap justify-center items-center gap-x-8 md:gap-x-12 lg:gap-x-20 gap-y-10">
                        {CLIENTS.map((client) => {
                            const isObject = typeof client === 'object';
                            const clientName = isObject ? client.name : client;
                            const opticalScale = isObject ? (client.opticalScale || 1) : 1;
                            
                            return (
                                <motion.div
                                    key={clientName}
                                    variants={itemVariants}
                                    className="flex items-center justify-center transition-all duration-300 h-10 md:h-14"
                                >
                                    {isObject && mounted ? (
                                        <img 
                                            src={currentTheme === 'dark' ? client.dark : client.light} 
                                            alt={clientName}
                                            className="h-7 md:h-9 w-auto object-contain hover:scale-110 transition-transform duration-300"
                                            style={{ height: `calc(100% * ${opticalScale})` }}
                                        />
                                    ) : (
                                        <span className="text-xl md:text-3xl font-bold tracking-tighter mix-blend-screen opacity-50 hover:opacity-100 transition-opacity duration-300 leading-none">{clientName}</span>
                                    )}
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>

                {/* Tools Grid - Redesigned */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-50px" }}
                    className="w-full flex flex-col items-center"
                >
                    <p className="text-xs tracking-widest text-black/40 dark:text-white/40 uppercase mb-8 border-b border-black/10 dark:border-white/10 pb-4 inline-block">Core Tools</p>

                    <div className="flex flex-nowrap md:flex-wrap lg:flex-nowrap justify-center items-center max-w-full overflow-x-auto md:overflow-x-visible pb-4 md:pb-0 gap-x-2 md:gap-x-0">
                        {CORE_TOOLS.map(({ name, src }, i) => (
                            <div key={name} className="flex items-center shrink-0">
                                <motion.div
                                    variants={itemVariants}
                                    onMouseEnter={() => setHoveredTool(name)}
                                    onMouseLeave={() => setHoveredTool(null)}
                                    className="flex flex-col items-center gap-3 px-6 md:px-8 py-4 cursor-pointer"
                                >
                                    <div className={`transition-all duration-200 ${hoveredTool === name ? 'opacity-100 scale-[1.15]' : 'opacity-100 scale-100'}`}>
                                        <img 
                                            src={src} 
                                            alt={name} 
                                            className="h-8 w-auto object-contain"
                                        />
                                    </div>
                                    <span className="font-['DM_Mono'] text-[13px] md:text-sm tracking-[0.12em] uppercase transition-colors duration-200 whitespace-nowrap text-black dark:text-white opacity-100">
                                        {name}
                                    </span>
                                </motion.div>

                                {i < CORE_TOOLS.length - 1 && (
                                    <div className="w-px h-8 bg-black/10 dark:bg-white/10 shrink-0" />
                                )}
                            </div>
                        ))}
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
