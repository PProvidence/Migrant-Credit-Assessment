import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import WhatShouldIKnow from "@/components/sections/WhatShouldIKnow";
import Reviews from "@/components/sections/Reviews";
import Newsletter from "@/components/sections/Newsletter";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans">
      <main className="flex min-h-screen w-full flex-col items-center justify-between py-6 sm:py-17 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-18 2xl:px-24 bg-white sm:items-start">
        <Hero />
        <Features />
        <WhatShouldIKnow />
        <Reviews />
        <Newsletter />
      </main>
    </div>
  );
}
