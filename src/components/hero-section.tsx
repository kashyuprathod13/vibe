import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils'; // Assuming you have a `cn` utility for classnames
import { Button } from '@/components/ui/button'; // Assuming shadcn Button component

// Define the props for the component
interface FinancialHeroProps {
  title: React.ReactNode;
  description: string;
  buttonText: string;
  buttonLink: string;
  imageUrl1: string;
  imageUrl2: string;
  className?: string;
}

// Reusable animation variants for Framer Motion
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

const cardsVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      staggerChildren: 0.3,
    },
  },
};

const cardItemVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};

/**
 * A responsive hero section component with animated text and card images.
 */
export const FinancialHero = ({
  title,
  description,
  buttonText,
  buttonLink,
  imageUrl1,
  imageUrl2,
  className,
}: FinancialHeroProps) => {
  // Inline style for the grid background to easily use CSS variables
  const gridBackgroundStyle = {
    backgroundImage:
      'linear-gradient(hsl(var(--border)) 1px, transparent 1px), linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px)',
    backgroundSize: '3rem 3rem',
  };

  return (
    <section
      className={cn(
        'relative w-full overflow-hidden text-foreground',
        className
      )}
    >
      <div
        className="absolute inset-0 opacity-20"
        style={gridBackgroundStyle}
      />
      {/* Removed the solid background gradient to allow ScrollyCanvas to show through */}

      <motion.div
        className="relative container mx-auto flex min-h-[60vh] md:min-h-[80vh] items-center justify-center lg:justify-between px-6 py-10 md:py-20 lg:flex-row flex-col gap-4 md:gap-8 lg:gap-12"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Left: Text Content */}
        <div className="flex flex-col items-start w-full text-left lg:w-1/2">
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-white leading-[1.1] font-sans"
            variants={itemVariants}
          >
            {title}
          </motion.h1>
          {description && (
            <motion.p
              className="mt-6 max-w-xl text-lg text-muted-foreground"
              variants={itemVariants}
            >
              {description}
            </motion.p>
          )}
          <motion.div variants={itemVariants} className="mt-8">
            <a href={buttonLink}>
              <button className="flex items-center text-white text-lg font-light tracking-wide px-6 py-2 rounded-full backdrop-blur-xl shadow-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors duration-300">
                {buttonText}
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </a>
          </motion.div>
        </div>

        {/* Right: Card Images */}
        <motion.div
          className="relative lg:w-1/2 h-[280px] md:h-[400px] lg:h-full w-full flex items-center justify-center mt-4 md:mt-0"
          variants={cardsVariants}
        >
          <a href={buttonLink} className="relative w-full h-full flex items-center justify-center cursor-pointer hover:opacity-90 transition-opacity">
            {/* Back Card */}
            <motion.img
              src={imageUrl2}
              alt="Travel Moment 2"
              variants={cardItemVariants}
              whileHover={{ y: -10, rotate: -5, transition: { duration: 0.3 } }}
              className="absolute h-48 md:h-80 rounded-2xl shadow-2xl object-cover transform rotate-[-6deg] translate-x-12 md:translate-x-24"
            />
            {/* Front Card */}
            <motion.img
              src={imageUrl1}
              alt="Travel Moment 1"
              variants={cardItemVariants}
              whileHover={{ y: -10, rotate: 5, transition: { duration: 0.3 } }}
              className="absolute h-48 md:h-80 rounded-2xl shadow-2xl object-cover transform rotate-[6deg] -translate-x-8 md:-translate-x-16"
            />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};