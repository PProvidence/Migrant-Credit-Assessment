'use client';

import dynamic from "next/dynamic";
import Image from "next/image";

// lazy load the Testimonials component
const TestimonialsSection = dynamic(
  () => import('@/components/sections/Testimonials'), 
  { 
    loading: () => <TestimonialsSkeleton />, // Shows this while loading
    ssr: false // Optional: Disable SSR if it causes hydration mismatch with complex carousels
  }
);

// Fallback loader
function TestimonialsSkeleton() {
  return (
    <div className="py-12 bg-white text-center flex flex-col items-center justify-center">
      {/* Skeleton mimicking the quote box */}
      <div className="h-40 w-full max-w-[467px] bg-gray-100 rounded-[20px] animate-pulse mb-8" />
      {/* Skeleton mimicking the avatar row */}
      <div className="flex gap-4 items-center justify-center opacity-50">
         <div className="w-16 h-16 rounded-full bg-gray-200 animate-pulse" />
         <div className="w-20 h-20 rounded-full bg-gray-200 animate-pulse" />
         <div className="w-16 h-16 rounded-full bg-gray-200 animate-pulse" />
      </div>
    </div>
  );
}

export default function Reviews() {
  return (
    <section className="relative w-full py-18 mb-7.5">
      {/* container */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-1 sm:px-4 md:px-6 py--12 space-y-6">
        {/* map background */}
        <div className="pointer-events-none absolute right-0 -top-38 size-87 max-w-96 opacity--20">
          <Image
            src="/images/mapReview.svg"
            alt=""
            fill
            className="object-contain"
          />
        </div>
        {/* Section Header Container */}
        <div className="mb-12 2xl:mb-12.5 space-y-3 lg:space-y-4 xl:space-y-6">
          {/* Eyebrow */}
          <h4 className="text-base font-bold tracking-wider text-tmc-blue uppercase">
            Reviews
          </h4>
          {/* Heading */}
          <h2 className="mb-4 text-3xl font-bold text-green-darker">
            What others say about us ?
          </h2>
        </div>

        {/* Dynamic Testimonials Container */}
        <TestimonialsSection />
      </div>
    </section>
  );  
}