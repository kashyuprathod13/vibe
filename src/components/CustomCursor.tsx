"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
    const [isMounted, setIsMounted] = useState(false);
    const [isHovering, setIsHovering] = useState(false);

    // Exact position for the small dot
    const mouseX = useMotionValue(-100);
    const mouseY = useMotionValue(-100);

    // Spring position for the trailing outer circle
    const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
    const cursorXSpring = useSpring(mouseX, springConfig);
    const cursorYSpring = useSpring(mouseY, springConfig);

    useEffect(() => {
        setIsMounted(true);

        // Disable custom cursor on touch devices to prevent stuck pointers
        if (window.matchMedia("(pointer: coarse)").matches) {
            return;
        }

        const moveCursor = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            // Visually react when hovering over interactive elements
            if (
                target.tagName.toLowerCase() === 'a' ||
                target.tagName.toLowerCase() === 'button' ||
                target.closest('a') ||
                target.closest('button')
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener("mousemove", moveCursor);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, [mouseX, mouseY]);

    if (!isMounted) return null;

    // Don't render on touch/mobile devices
    if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
        return null;
    }

    return (
        <>
            <style>{`
        /* Hide system cursor on non-touch devices globally */
        @media (pointer: fine) {
          body, * {
            cursor: none !important;
          }
        }
      `}</style>

            {/* Primary Dot (Exact location) */}
            <motion.div
                className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[999999] mix-blend-difference"
                style={{
                    x: mouseX,
                    y: mouseY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                animate={{
                    scale: isHovering ? 0 : 1,
                    opacity: isHovering ? 0 : 1,
                }}
                transition={{ duration: 0.2 }}
            />

            {/* Trailing Circle (Spring effect) */}
            <motion.div
                className="fixed top-0 left-0 w-10 h-10 border border-white/50 bg-white/5 backdrop-blur-[2px] rounded-full pointer-events-none z-[999998] flex items-center justify-center mix-blend-difference"
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                animate={{
                    scale: isHovering ? 1.5 : 1,
                    backgroundColor: isHovering ? "rgba(255, 255, 255, 0.1)" : "rgba(255, 255, 255, 0.05)",
                }}
                transition={{ duration: 0.2 }}
            />
        </>
    );
}
