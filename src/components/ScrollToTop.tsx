"use client";

import { useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";

export default function ScrollToTop() {
    const [visible, setVisible] = useState(false);

    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setVisible(latest > 400);
    });

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <AnimatePresence>
            {visible && (
                <motion.button
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    onClick={scrollToTop}
                    aria-label="Scroll to top"
                    className="fixed right-6 bottom-10 z-50 flex flex-col items-center gap-3 group"
                >
                    {/* Glass circle with arrow */}
                    <div className="w-11 h-11 rounded-full bg-black/10 dark:bg-white/10 backdrop-blur-xl border border-black/20 dark:border-white/20 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-black/20 dark:group-hover:bg-white/20 transition-all duration-300">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-black dark:text-white"
                        >
                            <line x1="12" y1="19" x2="12" y2="5"></line>
                            <polyline points="5 12 12 5 19 12"></polyline>
                        </svg>
                    </div>

                    {/* Vertical "JUMP UP" text */}
                    <span
                        className="text-[10px] font-semibold tracking-[0.25em] text-black/60 dark:text-white/60 uppercase group-hover:text-black dark:group-hover:text-white group-hover:tracking-[0.35em] transition-all duration-300"
                        style={{ writingMode: "vertical-rl", textOrientation: "mixed", transform: "rotate(180deg)" }}
                    >
                        Jump Up
                    </span>
                </motion.button>
            )}
        </AnimatePresence>
    );
}
