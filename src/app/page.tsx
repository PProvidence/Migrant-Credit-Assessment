// import Image from "next/image";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans">
      <main className="flex min-h-screen w-full flex-col items-center justify-between py-6 sm:py-14.5 px-6 sm:px-12 xl:px-0 bg-white sm:items-start">
        <Hero />
        <Features />
      </main>
    </div>
  );
}
