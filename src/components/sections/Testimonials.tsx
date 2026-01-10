'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { TESTIMONIALS } from '@/constants/data';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  // --- Logic: Circular Navigation ---
  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  // Helper to get visible items centered around activeIndex
  const getVisibleTestimonials = () => {
    const total = TESTIMONIALS.length;
    const indices = [];
    for (let i = -2; i <= 2; i++) {
      const index = (activeIndex + i + total) % total;
      indices.push(TESTIMONIALS[index]);
    }
    return indices;
  };

  const visibleItems = getVisibleTestimonials();
  const activeTestimonial = TESTIMONIALS[activeIndex];

  return (
    <section className=" bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
        
        {/* 1. Header & Stars */}
        <h2 className="text-2xl 2xl:text-3xl font-bold text-green-darker mb-4 lg:mb-6">Game Changer</h2>
        <div className="flex gap-2 mb-6">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-6 h-6 fill-green-normal text-green-normal" />
          ))}
        </div>

        {/* 2. MAIN ROW: Control < Quote Box > Control */}
        <div className="flex items-center justify-between gap-4 sm:gap-8 xl:gap-16 md:gap-16 w-full max-w-5xl xl:max-x--260 relative mb-6">
            
            {/* Left Control (Beside Box) */}
            <button 
                onClick={handlePrev}
                className="size-8 sm:size-12 rounded-full border border-green-darker flex items-center justify-center hover:bg-green-light-hover/50 transition-colors flex-shrink-0"
                aria-label="Previous testimonial"
            >
                <ChevronLeft className="w-6 h-6 text-green-darker" />
            </button>

            {/* THE QUOTE BOX */}
            <div className="relative w-full max-w-[467px] min-h-[156px]"> 
               
               {/* A. Background: 3px Gradient Border on all 4 sides (SVG) */}
               <div className="absolute inset-0 pointer-events-none">
                  <svg width="100%" height="100%" viewBox="0 0 467 156" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                    {/* The Path draws a full rectangle (M...Z) with 3px stroke */}
                    <path 
                        d="M465.5 1.5V154.5H1.5V1.5H465.5Z" 
                        fill="white" 
                        stroke="url(#paint0_linear_1_4335)" 
                        strokeWidth="3"
                    />
                    <defs>
                        <linearGradient id="paint0_linear_1_4335" x1="233.5" y1="0" x2="426" y2="140.5" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#23575B"/>
                            <stop offset="1" stopColor="#23575B" stopOpacity="0"/>
                        </linearGradient>
                    </defs>
                  </svg>
               </div>
                
               {/* B. Content Layer */}
               <div className="relative z-10 px-8 py-8 flex flex-col justify-center min-h-[156px]">
                  {/* Quote Icon (Fixed Top-Left) */}
                  <div className="absolute top-[12px] left-[12px]">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3.13335 11.7999C2.46668 11.0666 2.06668 10.2666 2.06668 8.93322C2.06668 6.59989 3.73335 4.53322 6.06668 3.46655L6.66668 4.33322C4.46668 5.53322 4.00001 7.06655 3.86668 8.06655C4.20001 7.86655 4.66668 7.79989 5.13335 7.86655C6.33335 7.99989 7.26668 8.93322 7.26668 10.1999C7.26668 10.7999 7.00001 11.3999 6.60001 11.8666C6.13335 12.3332 5.60001 12.5332 4.93335 12.5332C4.20001 12.5332 3.53335 12.1999 3.13335 11.7999ZM9.80001 11.7999C9.13335 11.0666 8.73335 10.2666 8.73335 8.93322C8.73335 6.59989 10.4 4.53322 12.7333 3.46655L13.3333 4.33322C11.1333 5.53322 10.6667 7.06655 10.5333 8.06655C10.8667 7.86655 11.3333 7.79989 11.8 7.86655C13 7.99989 13.9333 8.93322 13.9333 10.1999C13.9333 10.7999 13.6667 11.3999 13.2667 11.8666C12.8667 12.3332 12.2667 12.5332 11.6 12.5332C10.8667 12.5332 10.2 12.1999 9.80001 11.7999Z" fill="#23575B"/>
                    </svg>
                  </div>
                  
                  {/* Text (Animated) */}
                  <AnimatePresence mode="wait">
                    <motion.p 
                      key={activeIndex}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="ml--5 text-green-darker text-sm leading-relaxed font-normal text-left"
                    >
                      {activeTestimonial.text}
                    </motion.p>
                  </AnimatePresence>
               </div>

               {/* C. The Triangle Pointer (Attached to Bottom Center) */}
               <div className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-10/12 w-14 h-7 z-20">
                    <svg 
                        width="56" 
                        height="28" 
                        viewBox="0 0 56 28" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        {/* V-Shape pointing down */}
                        <path 
                            d="M0 0L28 28L56 0" 
                            fill="white" 
                            stroke="#23575B" 
                            strokeWidth="3"
                            strokeLinecap="round" 
                            strokeLinejoin="round"
                        />
                        {/* Mask to hide the box's bottom border behind the V */}
                        <rect x="2.5" y="-1.5" width="52" height="6" fill="white" />
                    </svg>
               </div>
            </div>

            {/* Right Control (Beside Box) */}
            <button 
                onClick={handleNext}
                className="size-8 sm:size-12 rounded-full border border-green-darker flex items-center justify-center hover:bg-green-light-hover/50 transition-colors flex-shrink-0"
                aria-label="Next testimonial"
            >
                <ChevronRight className="w-6 h-6 text-green-darker" />
            </button>
        </div>

        {/* 3. Avatars (Moved Below) */}
        <div className="relative flex items-center justify-center h-32 w-full mt-2">
            <div className="flex items-center gap-4 md:gap-6">
                {visibleItems.map((item, index) => {
                    const isCenter = index === 2;
                    const isNeighbor = index === 1 || index === 3;
                    const isEnd = index === 0 || index === 4;

                    return (
                        <motion.div
                            key={`${item.id}-${index}`}
                            layout
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ 
                                scale: isCenter ? 1 : isNeighbor ? 0.9 : 0.8,
                                opacity: 1 
                            }}
                            className={cn(
                                "relative rounded-full overflow--hidden ease-in-out transition-all duration-300",
                                // Center: 100px + Ring
                                isCenter ? "w-[100px] h-[100px] hover:ring-[6px] hover:ring-green-normal/20 ring-[6px] ring-[#23575b14] z-20" : "",
                                // Neighbors: 90px
                                isNeighbor ? "w-[90px] h-[90px] z-10 grayscale-[0.5]" : "",
                                // Ends: 80px (Hidden on mobile)
                                isEnd ? "w-[80px] h-[80px] z-0 grayscale opacity-70 hidden md:block" : ""
                            )}
                        >
                            <Image 
                                src={item.avatar} 
                                alt={item.author}
                                fill
                                className="object-cover"
                            />
                        </motion.div>
                    );
                })}
            </div>
        </div>

        {/* 4. Name Display */}
        <div className="mt-2 text-center">
            <h3 className="text-2xl font-medium text-green-darker">{activeTestimonial.author}</h3>
            {/* <p className="text-gray-500">{activeTestimonial.role}</p> */}
        </div>

      </div>
    </section>
  );
}