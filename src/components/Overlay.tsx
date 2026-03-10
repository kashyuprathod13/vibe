"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useState, useEffect } from "react";

function TypingText({ message, progress }: { message: string, progress: MotionValue<number> }) {
    const [displayContent, setDisplayContent] = useState("");

    useEffect(() => {
        const unsubscribe = progress.on("change", (latest) => {
            setDisplayContent(message.slice(0, Math.floor(latest)));
        });
        // Initial sync
        setDisplayContent(message.slice(0, Math.floor(progress.get())));
        return () => unsubscribe();
    }, [message, progress]);

    return <span>{displayContent}</span>;
}

export default function Overlay() {
    const { scrollYProgress } = useScroll();

    // Section 1: 0% to 10% Fade out for the name
    // Explicitly keep it 0 after 0.1 to avoid any persistence
    const opacity1 = useTransform(scrollYProgress, [0, 0.05, 0.1, 1], [1, 1, 0, 0]);
    const display1 = useTransform(opacity1, (o) => o <= 0 ? "none" : "flex");
    const y1 = useTransform(scrollYProgress, [0, 0.1], [0, -50]);

    // Typing Message
    const message = "I design with the assumption that people are busy, tired, and deserve better.";
    // Ensure visibility only between 11% and 25%
    const messageOpacity = useTransform(scrollYProgress, [0.08, 0.11, 0.22, 0.25, 0.3], [0, 1, 1, 0, 0]);
    const messageDisplay = useTransform(messageOpacity, (o) => o <= 0 ? "none" : "flex");
    const typingProgress = useTransform(scrollYProgress, [0.11, 0.16], [0, message.length]);
    
    // We make the pointer-events-none so it doesn't block scrolling on the canvas
    return (
        <div className="absolute inset-0 pointer-events-none z-20 font-sans">
            <div className="sticky top-0 h-screen w-full flex flex-col justify-center items-center text-white p-8">

                {/* Typing Message Reveal at 11% */}
                <motion.div
                    style={{ opacity: messageOpacity, display: messageDisplay }}
                    className="absolute inset-0 flex items-center justify-center p-8 text-center pointer-events-none z-50"
                >
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-white max-w-5xl leading-[1.1] relative font-sans">
                        <TypingText message={message} progress={typingProgress} />
                    </h2>
                </motion.div>

                {/* Hero Layout Container - Concentrated on the Name */}
                <motion.div
                    style={{ opacity: opacity1, y: y1, display: display1 }}
                    className="absolute inset-0 flex flex-col justify-center items-center p-6 md:p-12"
                >
                    {/* Massive "SEKO" style title */}
                    <div className="overflow-visible w-full flex justify-center text-center">
                        <h1 className="text-[4rem] sm:text-[6rem] lg:text-[10rem] xl:text-[12rem] font-bold tracking-tighter uppercase leading-[0.8] text-white font-sans">
                            Kashyap <br /> Rathod
                        </h1>
                    </div>
                </motion.div>

            </div>
        </div>
    );
}
