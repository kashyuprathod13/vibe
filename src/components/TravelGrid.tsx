"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

// Full list of images from /public/travel
const TRAVEL_IMAGES = [
    "cappadocia-cover.jpg", "IMG_3927.jpg", "IMG_3940.jpg", "IMG_3942.jpg", "IMG_3956.JPG",
    "IMG_3974.JPG", "IMG_3978.JPG", "IMG_3984.jpg", "IMG_3989.jpg", "IMG_3994.jpg",
    "IMG_3997-2.jpg", "IMG_4026-2.jpg", "IMG_4064-2.jpg", "IMG_4082.jpg", "IMG_4100.jpg",
    "IMG_4102.jpg", "IMG_4106-2.jpg", "IMG_4107.jpg", "IMG_4119-2.jpg", "IMG_4122-2.jpg",
    "IMG_4123-2.jpg", "IMG_4123.jpg", "IMG_4126-2.jpg", "IMG_4132-2.jpg", "IMG_4138.jpg",
    "IMG_4155.jpg", "IMG_4158.jpg", "IMG_4198.jpg", "IMG_4209.jpg", "IMG_4234.jpg",
    "IMG_4276.JPG", "IMG_4278.jpg", "IMG_4280.jpg", "IMG_4282.jpg", "IMG_4298.jpg",
    "IMG_4305.jpg", "IMG_4364.jpg", "IMG_4484.jpg", "IMG_4485.jpg", "IMG_4486.jpg",
    "IMG_4487.jpg", "IMG_4542.jpg", "IMG_4954-2-1.jpg", "IMG_4997-2.jpg", "IMG_5043.jpg",
    "IMG_5779.jpg", "IMG_5793.jpg", "IMG_5819.jpg", "IMG_5827.jpg", "IMG_5950.jpg",
    "IMG_5960.jpg", "IMG_5992.jpg", "IMG_6004.jpg", "IMG_6062.jpg", "IMG_6064.jpg",
    "IMG_6088.jpg"
].map(img => `/travel/${img}`);

export default function TravelGrid() {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    // Navigation functions
    const nextImage = () => {
        if (selectedIndex !== null) {
            setSelectedIndex((selectedIndex + 1) % TRAVEL_IMAGES.length);
        }
    };

    const prevImage = () => {
        if (selectedIndex !== null) {
            setSelectedIndex((selectedIndex - 1 + TRAVEL_IMAGES.length) % TRAVEL_IMAGES.length);
        }
    };

    // Keyboard controls
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (selectedIndex === null) return;
            
            if (e.key === "Escape") setSelectedIndex(null);
            if (e.key === "ArrowRight") nextImage();
            if (e.key === "ArrowLeft") prevImage();
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [selectedIndex]);

    // Prevent scroll when lightroom is open
    useEffect(() => {
        if (selectedIndex !== null) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [selectedIndex]);

    return (
        <section className="w-full bg-background py-24 px-6 md:px-12 relative z-10">
            <div className="max-w-[1400px] mx-auto">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                    className="mb-24 flex flex-col items-center text-center max-w-[1200px] mx-auto"
                >
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-light leading-[1.1] tracking-tight text-black/90 dark:text-white/90 mb-8">
                        Travel sparks my creativity
                        <br />
                        <span className="text-black/30 dark:text-white/25">and continuously inspires new ideas.</span>
                    </h1>
                </motion.div>

                {/* Masonry-style Grid */}
                <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
                    {TRAVEL_IMAGES.map((src, idx) => (
                        <motion.div
                            key={src}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: (idx % 10) * 0.05 }}
                            className="relative group cursor-zoom-in break-inside-avoid rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 bg-black/5 dark:bg-white/5"
                            onClick={() => setSelectedIndex(idx)}
                        >
                            <Image
                                src={src}
                                alt={`Travel photo ${idx + 1}`}
                                width={800}
                                height={1200}
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                                loading={idx < 4 ? undefined : "lazy"}
                                priority={idx < 4}
                            />
                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Lightroom Modal */}
            <AnimatePresence>
                {selectedIndex !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-12"
                        onClick={() => setSelectedIndex(null)}
                    >
                        <motion.div
                            key={selectedIndex}
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            className="relative max-w-7xl max-h-full w-full h-full flex items-center justify-center p-4 md:p-12 cursor-default"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="relative w-full h-full flex items-center justify-center">
                                <Image
                                    src={TRAVEL_IMAGES[selectedIndex]}
                                    alt="Selected travel photo"
                                    fill
                                    className="object-contain rounded-lg drop-shadow-2xl"
                                    quality={95}
                                    priority
                                />
                            </div>

                            {/* Navigation Arrows (Visible on hover or mobile) */}
                            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 md:-px-16 pointer-events-none">
                                <button
                                    onClick={(e) => { e.stopPropagation(); prevImage(); }}
                                    className="w-12 h-12 flex items-center justify-center rounded-full bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 transition-colors text-foreground pointer-events-auto"
                                    aria-label="Previous"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
                                </button>
                                <button
                                    onClick={(e) => { e.stopPropagation(); nextImage(); }}
                                    className="w-12 h-12 flex items-center justify-center rounded-full bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 transition-colors text-foreground pointer-events-auto"
                                    aria-label="Next"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                                </button>
                            </div>
                        </motion.div>

                        {/* Close button */}
                        <button
                            onClick={() => setSelectedIndex(null)}
                            className="absolute top-8 right-12 w-12 h-12 flex items-center justify-center rounded-full bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 transition-colors text-foreground z-[110]"
                            aria-label="Close"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
