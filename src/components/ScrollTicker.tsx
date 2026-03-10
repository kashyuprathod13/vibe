"use client";

import { useScroll, motion, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export default function ScrollTicker() {
    const { scrollYProgress } = useScroll();
    const [percentage, setPercentage] = useState(0);

    // Smooth the value for a premium feel
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    useEffect(() => {
        return scrollYProgress.on("change", (latest) => {
            setPercentage(Math.round(latest * 100));
        });
    }, [scrollYProgress]);

    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="fixed bottom-8 right-8 z-[100] pointer-events-none"
        >
            <div className="bg-black/80 dark:bg-white/10 backdrop-blur-md border border-white/10 dark:border-black/10 px-4 py-2 rounded-full flex items-center gap-3 shadow-2xl">
                <div className="flex flex-col items-start leading-none">
                    <span className="text-[10px] font-bold tracking-widest uppercase text-white/40 dark:text-black/40 mb-1">
                        Scroll
                    </span>
                    <span className="text-xl font-mono font-medium text-white dark:text-black tabular-nums">
                        {percentage}%
                    </span>
                </div>
                
                {/* Visual Progress Ring */}
                <div className="relative w-10 h-10 flex items-center justify-center">
                    <svg className="w-full h-full -rotate-90">
                        <circle
                            cx="20"
                            cy="20"
                            r="18"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            className="text-white/10 dark:text-black/5"
                        />
                        <motion.circle
                            cx="20"
                            cy="20"
                            r="18"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeDasharray="113.1"
                            style={{ 
                                pathLength: smoothProgress,
                                stroke: "currentColor"
                            }}
                            className="text-white dark:text-black"
                        />
                    </svg>
                </div>
            </div>
        </motion.div>
    );
}
