import Image from "next/image";
import Testimonials from "./Testimonials";

export default function Reviews() {
  return (
    <section className="relative w-full py-18 mb-7.5">
      {/* container */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-2 sm:px-4 md:px-6 py--12 space-y-6">
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

        {/* Testimonials Container */}
        <Testimonials />
      </div>
    </section>
  );  
}