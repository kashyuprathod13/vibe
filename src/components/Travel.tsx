"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Location = {
    id: string;
    name: string;
    coverImage: string;
    gallery: string[];
};

const locations: Location[] = [
    {
        id: "istanbul",
        name: "Istanbul",
        coverImage: "https://images.unsplash.com/photo-1524231757912-21f4fe3dea98?q=80&w=800&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1526685827666-4f36a5649969?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1562916895-c2889279ea0b?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1533722709129-afcd81418721?q=80&w=800&auto=format&fit=crop"
        ]
    },
    {
        id: "cappadocia",
        name: "Cappadocia",
        coverImage: "/travel/cappadocia-cover",
        gallery: [
            "https://images.unsplash.com/photo-1620958742844-4b51a5509ba2?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1607548710893-68f44ff94e02?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1587841124239-2fe4ce7730ea?q=80&w=800&auto=format&fit=crop"
        ]
    },
    {
        id: "dubai",
        name: "Dubai",
        coverImage: "https://images.unsplash.com/photo-1512453979738-51411bf840b2?q=80&w=800&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1546412414-8035e1776c9a?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1528702748617-c64d49f918af?q=80&w=800&auto=format&fit=crop"
        ]
    },
    {
        id: "india",
        name: "India",
        coverImage: "https://images.unsplash.com/photo-1524492412937-b6f87b0142e0?q=80&w=800&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1514222134-b57cbb8ce073?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1506461883276-594540eb36ab?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1515091943-9d5c0ad475af?q=80&w=800&auto=format&fit=crop"
        ]
    },
    {
        id: "andaman",
        name: "Andaman & Nicobar",
        coverImage: "https://images.unsplash.com/photo-1590880449155-21e1d0549c40?q=80&w=800&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1588612158851-9f9392e21bb2?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1601614792618-971ef2fb2a83?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1536643292439-0d2976be4d80?q=80&w=800&auto=format&fit=crop"
        ]
    }
];

export default function Travel() {
    const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);

    // Lock body scroll when overlay is open
    if (typeof window !== "undefined") {
        if (selectedLocation) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }

    return (
        <section className="w-full flex flex-col items-center bg-background overflow-hidden py-16 md:py-24 relative z-10 transition-colors duration-300">
            {/* Text Section (Above the image) */}
            <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col items-center text-center pb-12 pt-0 h-full">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="max-w-4xl flex flex-col items-center"
                >
                    <h2 className="text-sm md:text-base font-semibold tracking-[0.3em] uppercase text-black/50 dark:text-white/50 text-center leading-relaxed">
                        Travel sparks my creativity<br className="hidden md:block" /> and continuously inspires new ideas.
                    </h2>
                </motion.div>
            </div>

            {/* 5-Card Gallery Layout */}
            <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 h-auto lg:h-[500px]">
                    {locations.map((loc, index) => (
                        <motion.div
                            key={loc.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
                            onClick={() => setSelectedLocation(loc)}
                            className="group relative w-full h-[300px] lg:h-full rounded-2xl overflow-hidden cursor-pointer"
                        >
                            <img
                                src={loc.coverImage}
                                alt={loc.name}
                                className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-110"
                            />
                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />

                            {/* Title */}
                            <div className="absolute bottom-6 left-6 right-6">
                                <h3 className="text-white font-medium text-lg lg:text-xl tracking-wide">
                                    {loc.name}
                                </h3>
                                <div className="h-px w-0 bg-white/50 mt-2 transition-all duration-500 group-hover:w-full" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Image Overlay Masonry Grid Modal */}
            <AnimatePresence>
                {selectedLocation && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-background/95 backdrop-blur-md overflow-y-auto"
                    >
                        {/* Sticky Close Button Header */}
                        <div className="sticky top-0 left-0 right-0 z-50 flex justify-between items-center p-6 md:px-12 md:py-8 bg-background/80 backdrop-blur-lg border-b border-black/10 dark:border-white/10">
                            <h3 className="text-xl md:text-3xl font-light text-foreground tracking-tight">
                                {selectedLocation.name} Gallery
                            </h3>
                            <button
                                onClick={() => setSelectedLocation(null)}
                                className="w-12 h-12 flex items-center justify-center rounded-full bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 transition-colors text-foreground"
                                aria-label="Close Gallery"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                </svg>
                            </button>
                        </div>

                        {/* Masonry Grid */}
                        <div className="max-w-[1400px] mx-auto p-6 md:p-12 pb-24">
                            <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
                                {/* Include the cover image in the gallery as well */}
                                <img
                                    src={selectedLocation.coverImage}
                                    alt={`${selectedLocation.name} main view`}
                                    className="w-full rounded-2xl break-inside-avoid shadow-lg"
                                />
                                {selectedLocation.gallery.map((img, i) => (
                                    <img
                                        key={i}
                                        src={img}
                                        alt={`${selectedLocation.name} view ${i + 1}`}
                                        className="w-full rounded-2xl break-inside-avoid shadow-lg"
                                    />
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
