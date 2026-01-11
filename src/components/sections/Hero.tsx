'use client';

import Image from "next/image";
import Button from "../ui/Button";
import { useModal } from '@/context/ModalContext';
// import { motion } from "framer-motion";

export default function Hero() {
  const { openSignUp } = useModal();
  return (
    <section className="relative w-full overflow-hidden sm:overflow-visible h-[600px] sm:h-[720px] lg:h-[800px] py--12 sm:py--20 lg:py--24">
      {/* ================= BACKGROUND LAYER ================= */}
      <div className="absolute inset-0 pointer-events-none mx-20 2xl:mx-50">
        {/* Radial Gradient 1 */}
        <div className="absolute left--[420px] left-0 top-[80px]- -top-9">
          <div className="size-[482px] bg-radial from-[#e7f1f2] to-[#f8eae8]/0 rounded-full" />
        </div>

        {/* Radial Gradient 2 + Map */}
        <div className="absolute right-[120px]- -left-10 sm:left-30 lg:left-100 xl:left-170 2xl:left-177 right--0 top-[120px]- top-65 sm:top-20 xl:-top-10 2xl:top-0">
          <div className="relative size-60.25 sm:size-[482px] animate-[gradientShift_6s_ease_infinite] bg-radial from-[#5f787a]/50 to-[#e5e9f4]/0 to--transparent rounded-full">
            {/* Hero Map */}
            <Image
              src="/images/heroMap.svg"
              alt="Credit landscape map"
              fill
              priority
              className="object-contain"
            />

            {/* Credit Cards */}
            <Image
              src="/images/creditCard.svg"
              alt="Credit card"
              width={240}
              height={150}
              // fill
              priority
              className="absolute w-30 lg:w-60 right-0 top-[27px]- top-17.5"
            />

            <Image
              src="/images/creditCardTranslucent.svg"
              alt="Credit card"
              width={240}
              height={150}
              // fill
              priority
              className="absolute w-30 lg:w-60 right-[40px] top-[140px]"
            />
          </div>
        </div>
      </div>

      {/* ================= CONTENT LAYER ================= */}
      <div className="relative z-10 px--6 mx-4 lg:mx-25 xl:mx-43 hidden- lg:block">
        <div className="absolute left-0 top-0 2xl:top-9.5 w-176.5 max-w-full">
          {/* Heading */}
          <h1 className="text-2xl sm:text-[32px] lg:text-5xl sm:leading-15 font-medium text-green-darker">
            Empowering{" "}
            <span className="text-green-normal-hover">Immigrants and Young Americans</span>
            {" "}to{" "}
            <span className="relative inline-block">
              <span className="relative z-10">Navigate</span>

              <svg
                className="
                  absolute animate--[spin_6s_linear_infinite]
                  -left-[0.35em]
                  -top-[0.15em]
                  w-[calc(100%+0.7em)]
                  h-[1.38em]
                  pointer-events-none
                "
                viewBox="0 0 158.75 66.04"
                fill="none"
              >
                <ellipse
                  cx="79.375"
                  cy="33.02"
                  rx="79.375"
                  ry="33.02"
                  stroke="#255f82"
                  strokeWidth="1"
                />
              </svg>
            </span>{" "}
            the{" "}
            <span className="text-green--normal animate--[gradientShift_6s_ease_infinite] bg--[length:200%_200%] bg-linear-to-r from-green-normal from-72% via-green-normal/0 via-99% to-black/43.38 to-100% bg-clip-text text-transparent">Credit Landscape</span>
          </h1>

          {/* Description */}
          <p className="mt-[24px] w-[471px] max-w-full text-[#333333] text-base leading-8 font-normal">
            Explore educational modules, track your credit journey, and get
            personalized AI assistance. Your journey to financial well-being
            starts here.
          </p>

          {/* CTA Buttons */}
          <div className="mt-[48px] flex flex-wrap gap-6">
            <Button
              variant="primary"
              width="md"
              onClick={openSignUp}
            >
              Sign up for free
            </Button>
              <Button variant="outline" width="md">
            Login
          </Button>
        </div>
        </div>
      </div>

      {/* ================= MOBILE FALLBACK ================= */}
      {/* <div className="relative z-10 mt-[480px] px-6 lg:hidden">
        <h1 className="text-3xl font-medium text-[#0c1e20]">
          Empowering{" "}
          <span className="text-[#204e52]">
            Immigrants and Young Americans
          </span>{" "}
          to Navigate the{" "}
          <span className="text-[#23575b]">Credit Landscape</span>
        </h1>

        <p className="mt-4 text-[#333333]">
          Explore educational modules, track your credit journey, and get
          personalized AI assistance.
        </p>

        <div className="mt-6 flex gap-4">
          <button className="flex-1 h-12 rounded-[30px] bg-[#23575b] text-white">
            Sign up
          </button>
          <button className="flex-1 h-12 rounded-[30px] border border-[#23575b] text-[#23575b]">
            Login
          </button>
        </div>
      </div> */}
    </section>
  );
}
