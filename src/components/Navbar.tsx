"use client";

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

const navItems = ["HOME", "ABOUT", "WORK", "CONTACT"];

export default function Navbar() {
    const router = useRouter();
    const pathname = usePathname();
    const [active, setActive] = useState("HOME");
    const [isPastHero, setIsPastHero] = useState(false);

    // Set initial active state based on pathname
    useEffect(() => {
        if (pathname === "/about") {
            setActive("ABOUT");
            setIsPastHero(true); // Always solid background on other pages
        } else {
            setActive("HOME");
        }
    }, [pathname]);

    useEffect(() => {
        const handleScroll = () => {
            // If we are not on the home page, the background should always be "past hero" style
            if (pathname !== "/") {
                setIsPastHero(true);
                return;
            }

            const aboutSection = document.getElementById("about");
            if (aboutSection) {
                // Switch 50px before the About section hits the top
                setIsPastHero(window.scrollY >= aboutSection.offsetTop - 50);
            } else {
                setIsPastHero(window.scrollY >= window.innerHeight * 4);
            }
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll(); // Check on mount
        return () => window.removeEventListener("scroll", handleScroll);
    }, [pathname]);

    const handleNavClick = (item: string) => {
        setActive(item);

        if (item === "ABOUT") {
            router.push("/about");
            return;
        }

        if (item === "HOME") {
            if (pathname !== "/") {
                router.push("/");
            } else {
                window.scrollTo({ top: 0, behavior: "smooth" });
            }
            return;
        }

        // For WORK and CONTACT, if we are not on home page, go to home first
        if (pathname !== "/") {
            router.push(`/#${item.toLowerCase()}`);
        } else {
            const sectionId = item.toLowerCase();
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        }
    };

    return (
        <div className="fixed top-8 left-1/2 -translate-x-1/2 z-50">
            <nav className={`flex items-center gap-0.5 p-1 rounded-full backdrop-blur-xl shadow-2xl border transition-colors duration-300 ${isPastHero
                ? "bg-black/5 dark:bg-white/5 border-black/10 dark:border-white/10"
                : "bg-white/5 border-white/10"
                }`}>
                {navItems.map((item) => {
                    const isActive = active === item;
                    return (
                        <button
                            key={item}
                            onClick={() => handleNavClick(item)}
                            className={`relative px-4 md:px-6 py-1.5 md:py-2 text-xs md:text-sm font-medium tracking-wider transition-colors duration-300 rounded-full ${isActive
                                ? isPastHero
                                    ? "text-white bg-black shadow-sm dark:text-black dark:bg-white"
                                    : "text-black bg-white shadow-sm"
                                : isPastHero
                                    ? "text-black/70 hover:text-black dark:text-white dark:hover:text-white/80"
                                    : "text-white/80 hover:text-white"
                                }`}
                        >
                            {item}
                        </button>
                    );
                })}
            </nav>
        </div>
    );
}
