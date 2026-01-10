import Image from "next/image";
import { FEATURES } from "@/constants/data";

export default function Features() {
  return (
    <section className="relative w-full overflow--hidden mb-25">
      

      {/* ================= CONTENT WRAPPER ================= */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-12 space-y-6">
        {/* ================= MAP BACKGROUND ================= */}
        <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 opacity--20">
          <Image
            src="/images/MapFeature.svg"
            alt=""
            fill
            className="object-contain"
          />
        </div>
        {/* ================= HEADER SECTION ================= */}
        <div className="mb--20">
          {/* Eyebrow */}
          <p className="mb-6 text-base font-bold tracking-wider text-tmc-blue uppercase">
            Empowering Your Financial Journey
          </p>

          {/* Heading */}
          <h2 className="mb-8 max-w-3xl text-5xl font-semibold leading-tight text-green-darker">
            Explore the Key Features of Migrant Credit
          </h2>

          {/* Description */}
          <p className="max-w-2xl text-base leading-8 text-gray-1">
            Explore educational modules, track your credit journey, and get personalized AI assistance. Your journey to financial well-being starts here.
          </p>
        </div>

        {/* ================= FEATURE CARDS ================= */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-3">
          {/* Card 1 - Educational Modules (Green Border) */}
          <div
            className="relative h-80 overflow-hidden rounded-3xl bg-white p-6 shadow-md"
            style={{
              border: "3px solid #204e52",
            }}
          >
            {/* Icon Container */}
            <div className="mb-6 flex h-16 w-16 items-center justify-center">
              <Image
                src={FEATURES[0].iconPath}
                alt={FEATURES[0].title}
                width={60}
                height={60}
                className="h-full w-full object-contain"
              />
            </div>

            {/* Content (positioned at bottom) */}
            <div className="absolute bottom-6 left-6 right-6">
              {/* Title */}
              <h3 className="mb-3 text-xl font-semibold text-green-darker">
                {FEATURES[0].title}
              </h3>

              {/* Description */}
              <p className="text-sm leading-6 text-gray-1">
                {FEATURES[0].description}
              </p>
            </div>
          </div>

          {/* Card 2 - Credit Tracking (Pink/Red Border) */}
          <div
            className="relative h-80 overflow-hidden rounded-3xl bg-white p-6 shadow-md"
            style={{
              border: "3px solid #c41263",
            }}
          >
            {/* Icon Container */}
            <div className="mb-6 flex h-16 w-16 items-center justify-center">
              <Image
                src={FEATURES[1].iconPath}
                alt={FEATURES[1].title}
                width={60}
                height={60}
                className="h-full w-full object-contain"
              />
            </div>

            {/* Content (positioned at bottom) */}
            <div className="absolute bottom-6 left-6 right-6">
              {/* Title */}
              <h3 className="mb-3 text-xl font-semibold text-[#0c1e20]">
                {FEATURES[1].title}
              </h3>

              {/* Description */}
              <p className="text-sm leading-6 text-[#333]">
                {FEATURES[1].description}
              </p>
            </div>
          </div>

          {/* Card 3 - AI-Driven Support (Blue Border) */}
          <div
            className="relative h-80 overflow-hidden rounded-3xl bg-white p-6 shadow-md"
            style={{
              border: "3px solid #2b7098",
            }}
          >
            {/* Icon Container */}
            <div className="mb-6 flex h-16 w-16 items-center justify-center">
              <Image
                src={FEATURES[2].iconPath}
                alt={FEATURES[2].title}
                width={60}
                height={60}
                className="h-full w-full object-contain"
              />
            </div>

            {/* Content (positioned at bottom) */}
            <div className="absolute bottom-6 left-6 right-6">
              {/* Title */}
              <h3 className="mb-3 text-xl font-semibold text-green-darker">
                {FEATURES[2].title}
              </h3>

              {/* Description */}
              <p className="text-sm leading-6 text-gray-1">
                {FEATURES[2].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
