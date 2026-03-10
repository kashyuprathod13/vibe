"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";

const FRAME_COUNT = 120; // Depending on how many frames are available
const PADDING = 3; // For zero padding

// Format the file string properly: frame_000_delay-0.066s.png
const getFrameSrc = (index: number) => {
    const paddedIndex = index.toString().padStart(PADDING, "0");
    return `/sequence/frame_${paddedIndex}_delay-0.066s.png`;
};

export default function ScrollyCanvas() {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);

    // Calculate the scroll progress for this specific container
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // Preload all images on mount
    useEffect(() => {
        const loadedImages: HTMLImageElement[] = [];
        for (let i = 0; i < FRAME_COUNT; i++) {
            const img = new Image();
            img.src = getFrameSrc(i);
            loadedImages.push(img);
        }
        setImages(loadedImages);
    }, []);

    // Update canvas when scrolling changes
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        if (images.length === 0 || !canvasRef.current) return;

        requestAnimationFrame(() => {
            if (!canvasRef.current) return;
            const ctx = canvasRef.current.getContext("2d");
            if (!ctx) return;

            // Map 0 -> 1 progress to 0 -> FRAME_COUNT - 1
            const frameIndex = Math.min(
                FRAME_COUNT - 1,
                Math.floor(latest * FRAME_COUNT)
            );

            const img = images[frameIndex];
            if (img && img.complete) {
                renderToCanvas(ctx, img, canvasRef.current.width, canvasRef.current.height);
            }
        });
    });

    // Draw the correct frame as soon as images are ready or when navigating
    useEffect(() => {
        if (images.length > 0 && canvasRef.current) {
            const ctx = canvasRef.current.getContext("2d");
            if (ctx) {
                // Ensure dimensions are set correctly before first render
                if (canvasRef.current.width !== window.innerWidth) {
                    canvasRef.current.width = window.innerWidth;
                    canvasRef.current.height = window.innerHeight;
                }
                
                const frameIndex = Math.min(
                    FRAME_COUNT - 1,
                    Math.floor(scrollYProgress.get() * FRAME_COUNT)
                );
                const img = images[frameIndex];
                if (img && img.complete) {
                    renderToCanvas(ctx, img, canvasRef.current.width, canvasRef.current.height);
                }
            }
        }
    }, [images, scrollYProgress]);

    // Ensure window resizes recalculate canvas dimensions
    useEffect(() => {
        const resizeCanvas = () => {
            if (canvasRef.current) {
                canvasRef.current.width = window.innerWidth;
                canvasRef.current.height = window.innerHeight;
                // Redraw current frame
                if (images.length > 0) {
                    const frameIndex = Math.min(
                        FRAME_COUNT - 1,
                        Math.floor(scrollYProgress.get() * FRAME_COUNT)
                    );
                    const img = images[frameIndex];
                    const ctx = canvasRef.current.getContext("2d");
                    if (img && img.complete && ctx) {
                        renderToCanvas(ctx, img, canvasRef.current.width, canvasRef.current.height);
                    }
                }
            }
        };

        window.addEventListener("resize", resizeCanvas);
        resizeCanvas(); // initial setup

        return () => window.removeEventListener("resize", resizeCanvas);
    }, [images, scrollYProgress]);

    // Object-fit: cover equivalent for canvas rendering
    const renderToCanvas = (
        ctx: CanvasRenderingContext2D,
        img: HTMLImageElement,
        canvasWidth: number,
        canvasHeight: number
    ) => {
        const imgRatio = img.width / img.height;
        const canvasRatio = canvasWidth / canvasHeight;
        let drawWidth, drawHeight, xOffset, yOffset;

        if (canvasRatio > imgRatio) {
            drawWidth = canvasWidth;
            drawHeight = canvasWidth / imgRatio;
            xOffset = 0;
            yOffset = (canvasHeight - drawHeight) / 2;
        } else {
            drawWidth = canvasHeight * imgRatio;
            drawHeight = canvasHeight;
            xOffset = (canvasWidth - drawWidth) / 2;
            yOffset = 0;
        }

        ctx.clearRect(0, 0, canvasWidth, canvasHeight);
        ctx.drawImage(img, xOffset, yOffset, drawWidth, drawHeight);
    };

    // Fade out and scale up slightly at the very end of the scroll to transition smoothly
    const canvasOpacity = useTransform(scrollYProgress, [0.85, 1], [1, 0]);
    const canvasScale = useTransform(scrollYProgress, [0.85, 1], [1, 1.1]);

    return (
        <section ref={containerRef} className="h-[500vh] relative w-full bg-background transition-colors duration-300">
            <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#121212]">
                <motion.canvas
                    ref={canvasRef}
                    style={{ opacity: canvasOpacity, scale: canvasScale }}
                    className="absolute inset-0 w-full h-full object-cover origin-center"
                />
                {/* Gradient fade to seamlessly blend into the next section */}
                <div className="absolute inset-x-0 bottom-0 h-48 md:h-64 bg-gradient-to-t from-[#121212] via-[#121212]/80 to-transparent pointer-events-none z-10" />
                {/* We can place the Overlay here later or outside using the same scroll hook */}
            </div>
        </section>
    );
}
