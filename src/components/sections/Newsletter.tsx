'use client';

import { useActionState } from "react";
import Image from "next/image";
import { CheckCircle2, AlertCircle } from "lucide-react";
import { Input } from "@/components/ui/Input";
import Button from "../ui/Button";
import { subscribeToNewsletter } from "@/actions/newsletter";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

// Initial state must match NewsletterState type
const initialState = {
  success: false,
  message: "",
  errors: {},
};


export default function Newsletter() {
  const [state, formAction, isPending] = useActionState(subscribeToNewsletter, initialState);

  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="pb-36.25 sm:px-4 flex w-full justify-center">
      <div className="relative w-full max-w-260  px-3 py-8 bg-green-light-active rounded-[20px] overflow-hidden flex flex-col items-center justify-center text-center">

        {/* --- Background Maps (Absolute Positioned) --- */}
        <div className="absolute top-0 left-2.25 w-full h-full opacity-40 pointer-events-none select-none">
          <Image src="/images/newsMap-left.svg" alt="" fill className="object-contain object-top-left" />
        </div>
        <div className="absolute top-1.25 right-2 w-75 h-full opacity-40 pointer-events-none select-none">
          <Image src="/images/newsMap-right.svg" alt="" fill className="object-contain object-top-right" />
        </div>

        {/* --- Content Container (Relative z-10) --- */}
        <div className="relative w-full z-10 flex flex-col items-center">
          {/* Label */}
          <h4 className="text-tmc-blue text-base font-bold uppercase tracking-wide mb-2">
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
          <form action={formAction} className="w-full px-4 max-w-137 relative flex flex-col items-center gap-2">
            <div className="relative w-full flex flex-col sm:flex-row items-center gap-4">
              {/* Reusable Input Component */}
              <div className="flex-1 w-full">
                <Input
                  placeholder="Enter your email address"
                  type="email"
                  name="email"
                  error={!!state.errors?.email?.[0]}
                  disabled={isPending || state.success}
                  className={cn(
                    "bg-white/70 border-gray-4 text-gray-1 placeholder:text-gray-4 h-12 w-full",
                    state.success && "bg-green-light/50 ring-1 ring-green-normal border-green-normal text-green-darker placeholder:text-green-darker"
                  )}
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
              <Button variant="primary" width="md"
                type="submit"
                loading={isPending}
                loadingText="Subscribing..."
                disabled={isPending || state.success}
                className={cn("outline-[0.5px] outline-offset-[-0.5px] shadow-sm",
                  state.success
                    ? "outline-green-normal hover:outline-green-normal active:outline-green-normal shadow-green-normal/30 cursor-default"
                    : "outline-gray-4 hover:outline-gray-5 active:outline-gray-6 shadow-gray-400/30",
                )}
              >
                {state.success ? (
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                    Subscribed!
                  </span>
                ) : (
                  "Subscribe"
                )}
              </Button>
            </div>
            {/* Status Message */}
            <div className="min-h-6 text-left pl-4 mt-1 transition-all duration-300">
              {/* 1. Validation Error (Client-side Zod check) */}
              {state?.errors?.email && (
                <p className="flex items-center text-red-600 text-sm font-medium animate-in slide-in-from-top-1 fade-in">
                  <AlertCircle className="w-3 h-3 mr-1.5" />
                  {state.errors.email[0]}
                </p>
              )}

              {/* 2. Server Error (e.g. "Duplicate Email") */}
              {state?.message && !state.success && !state.errors?.email && (
                <p className="flex items-center text-red-600 text-sm font-medium animate-in slide-in-from-top-1 fade-in">
                  <AlertCircle className="w-3 h-3 mr-1.5" />
                  {state.message}
                </p>
              )}

              {/* 3. Success Message */}
              {state?.success && (
                <p className="flex items-center text-green-700 text-sm font-medium animate-in slide-in-from-top-1 fade-in">
                  {state.message}
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </motion.section>
  );
}