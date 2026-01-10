import React from "react";
import Image from "next/image";
import TabSection from "./TabSection";

export default function WhatShouldIKnow() {
  return (
    <section className="relative w-full">
      {/* Content Container */}
      <div className="relative flex flex--col sm:flex-row items-center sm:space-x-11 mx-auto w-full max-w-7xl py-8 px-2.5">
        {/* Text Container */}
        <div className="space-y-3 lg:space-y-4 xl:space-y-6">
          {/* Eyebrow */}
          <h4 className="text-base font-bold tracking-wider text-tmc-blue uppercase">
            Empower Your Financial Journey
          </h4>
          {/* Heading */}
          <h2 className="text-[32px] 2xl:text-4xl font-medium text-green-darker">
            What Should I Know?
          </h2>
          {/* Description */}
          <p className="max-w-xl mb-3 text-gray-1 text-base 2xl:text-lg font-normal leading-8">
            Discover essential information to navigate the U.S. credit landscape confidently. Whether new to credit or aiming to boost financial literacy, our resources empower you on the path to financial success.
          </p>
        </div>
        {/* Image Container */}
        <div className="my-9 size-[205.97] relative">
          <Image
            src="/images/creditCardIcon.svg"
            alt="Credit Card Icon"
            fill
            className="object-contain"
          />
        </div>
      </div>
      <TabSection />
    </section>
  );
}