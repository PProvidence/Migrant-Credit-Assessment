import React from "react";
import { cn } from "@/lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  startIcon?: React.ReactNode;
  error?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, startIcon, error, ...props }, ref) => {
    return (
      <div className="relative w-full">
        {startIcon && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-4 pointer-events-none">
            {startIcon}
          </div>
        )}
        <input
          className={cn(
            "flex h-12 w-full rounded-[30px] border border-transparent bg-white/70 px-4 py-2 xl:py-3 text-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-[#BDBDBD] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#23575b] disabled:cursor-not-allowed disabled:opacity-50",
            startIcon && "pl-12", // Add padding if icon exists
            error && "ring-2 ring-red-500 bg-red-50",
            className
          )}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };