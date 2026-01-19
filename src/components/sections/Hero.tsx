'use client';

import Image from "next/image";
import Button from "../ui/Button";
import { useModal } from '@/context/ModalContext';

export default function Hero() {
  const { openSignUp, openLogin } = useModal();

  return (
    <section className="relative w-full overflow-hidden bg-white pt-0 pb-20 lg:pt-4 lg:pb-32">
      
      {/* ================= BACKGROUND GRADIENTS ================= */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        {/* Left Gradient Blob */}
        <div className="absolute -left-20 top-0 lg:-left-16 lg:-top-10">
           <div className="w-[300px] h-[300px] lg:w-[600px] lg:h-[600px] bg-radial from-[#E7F2F3] via-[#F8EAE800] to-[#F8EAE800] rounded-full blur-2xl" />
        </div>
        
        {/* Right Gradient Blob */}
        <div className="absolute -right-20 top-20 lg:-right-20 lg:-top-12 opacity-60">
           <div className="w-[300px] h-[300px] lg:w-[700px] lg:h-[700px] bg-radial from-[#60797B] via-[#E5E9F400] to-[#E5E9F400] rounded-full blur-xl" />
        </div>
      </div>

      {/* ================= MAIN CONTAINER ================= */}
      <div className="relative z-10 mx--auto lg:mx-0 w-full max-w--[1040px] px-4 sm:px-6 lg:px-0">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-0 items-center w-full">

          {/* 1. LEFT CONTENT (Text) */}
          <div className="max-w-176.5 w-full col-span-7 md:row-span-1 flex flex-col items-center md:items-start text-center md:text-left order-2 md:order-1">
             {/* Heading */}
            <h1 className="text-2xl sm:text-[32px] lg:text-5xl leading-[1.2] sm:leading-15 font-medium text-green-darker tracking--tight">
              Empowering{" "}
              <span className="text-green-normal-hover">Immigrants and Young Americans</span>
              {" "}to{" "}
              <span className="relative inline-block whitespace-nowrap">
                <span className="relative z-10">Navigate</span>
                {/* Oval SVG behind Navigate */}
                <svg
                  className="absolute -left-[10%] top-[5%] w-[120%] h-[110%] origin-top-left rotate-[-5.43deg] pointer-events-none"
                  viewBox="0 0 158 66"
                  fill="none"
                >
                  <ellipse cx="79" cy="33" rx="78" ry="32" stroke="#255F82" strokeWidth="1" />
                </svg>
              </span>{" "}
              the{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-green-normal from-72% to-black/43.38 to-100% whitespace-nowrap">
                Credit Landscape
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 text-gray-600 text-base sm:text-lg leading-relaxed max-w-lg">
              Explore educational modules, track your credit journey, and get
              personalized AI assistance. Your journey to financial well-being
              starts here.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4">
              <Button
                variant="primary"
                width="md"
                onClick={openSignUp}
              >
                Sign up for free
              </Button>
              <Button 
                variant="outline" 
                width="md"
                onClick={openLogin}
              >
                Login
              </Button>
            </div>
          </div>

          {/* 2. RIGHT CONTENT (Map + Cards) */}
          <div className="relative w-full col-span-5 max-w-[482px] flex justify-center lg:justify-end order-1 lg:order-2 h-[350px] lg:h-[450px] xl:h-[482px]">
             
             {/* This container anchors the cards to the map */}
             <div className="relative w-full max-w-[500px] h-full">
                
                {/* 2a. Map Background */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image
                    src="/images/heroMap.svg"
                    alt="World Map"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>

                {/* 2b. Dark Credit Card (Top Right) */}
                <div className="absolute top-[10%] right-0 w-[55%] max-w-[280px] animate-float-slow shadow-xl rounded-[20px] z-20">
                   <Image
                     src="/images/creditCard.svg"
                     alt="Credit Card"
                     width={280}
                     height={176}
                     className="w-full h-auto drop-shadow-xl"
                   />
                </div>

                {/* 2c. Glass/Translucent Card (Bottom Left - overlapping) */}
                <div className="absolute bottom-[15%] left-[25%] w-[55%] max-w-[280px] animate-float-delayed rounded-xl z-30">
                   <Image
                     src="/images/creditCardTranslucent.svg"
                     alt="Translucent Credit Card"
                     width={280}
                     height={176}
                     className="w-full h-auto drop-shadow-xl"
                   />
                </div>

             </div>
          </div>

        </div>
      </div>
    </section>
  );
}