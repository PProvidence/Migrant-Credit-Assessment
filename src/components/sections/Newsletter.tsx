import Image from "next/image";
import { Input } from "@/components/ui/Input";
import Button from "../ui/Button";
import { cn } from "@/lib/utils";
import { section } from "framer-motion/m";

export default function Newsletter() {
  return (
    <section className="pb-36.25 sm:px-4 flex w-full justify-center">
      <div className="relative w-full max-w-[1040px] h--[259px] px-3 py-8 bg-green-light-active rounded-[20px] overflow-hidden flex flex-col items-center justify-center text-center">

        {/* --- Background Maps (Absolute Positioned) --- */}
        <div className="absolute top-0 left-[9px] w-full h-full opacity-40 pointer-events-none select-none">
          <Image src="/images/newsMap-left.svg" alt="" fill className="object-contain object-left-top" />
        </div>

        <div className="absolute top-[5px] right-[8px] w-[300px] h-full opacity-40 pointer-events-none select-none">
          <Image src="/images/newsMap-right.svg" alt="" fill className="object-contain object-right-top" />
        </div>

        {/* --- Content Content (Relative z-10) --- */}
        <div className="relative z-10 flex flex-col items-center">
          {/* Label */}
          <h4 className="text-tmc-blue text-base font-bold font-uppercase tracking-wide mb-2">
            NEWSLETTER
          </h4>

          {/* Title */}
          <h2 className="text-green-darker text-2xl lg:text-[32px] font-medium mb-4">
            STAY UP TO DATE
          </h2>

          {/* Description */}
          <p className="text-gray-1 text-base font-normal leading-8 mb-10">
            Be the first to know about releases and industry news and insights.
          </p>

          {/* Form Container */}
          <form className="w-full px-4 max--w-[547px] relative flex flex-col items-center sm:flex-row gap-4">
            {/* Reusable Input Component */}
            <div className="flex-1">
              <Input
                placeholder="Enter your email address"
                type="email"
                className="bg-white/70 border-gray-4 text-gray-1 placeholder:text-[#BDBDBD] h-12"
                startIcon={
                  <Image
                    src="/icons/Message.svg"
                    alt="Email Icon"
                    width={24}
                    height={24}
                    className="inset-0 pointer-events-none"
                  />
                }
              />
            </div>

            {/* Subscribe Button */}
            <Button variant="primary" width="md">
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}