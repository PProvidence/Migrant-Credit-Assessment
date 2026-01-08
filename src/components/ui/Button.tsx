"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

// Define semantic width types
type ButtonWidth = "xs" | "sm" | "md" | "lg" | "full" | string;

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost" | "secondary";
  width?: ButtonWidth;
  loading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, variant = "primary", width = "md", loading, disabled, ...props }, ref) => {
    const isDisabled = disabled || loading;

    // Width Mapping based on Figma (127px/180px) and Responsive needs
    const getWidthClass = (w: ButtonWidth) => {
      switch (w) {
        case "xs": return "w-[100px]";     // Appropriate for tight mobile grids
        case "sm": return "w-[127px]";     // Figma: Variant 2/3 (Small)
        case "md": return "w-[180px]";     // Figma: Variant 2/3 (Large)
        case "lg": return "w-[240px]";     // Appropriate for tablets/prominent CTAs
        case "full": return "w-full";      // Standard for mobile-first block buttons
        default: return `w-[${w}]`;        // Support for arbitrary strings (e.g., "300px")
      }
    };

    return (
      <button
        ref={ref}
        disabled={isDisabled}
        className={cn(
          // BASE STYLES
          "inline-flex items-center justify-center h-12 rounded-[30px] transition-all duration-200",
          "text-[13px] font-medium leading-4.5 antialiased",
          "focus:outline-none focus-visible:ring-2 focus-visible:ring-green-normal focus-visible:ring-offset-2",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          
          // Apply Width Class
          getWidthClass(width),

          // VARIANT LOGIC
          variant === "primary" && "bg-green-normal text-white border-[0.5px] border-green-normal hover:bg-green-normal-hover",
          variant === "outline" && "bg-transparent text-green-normal border-[1.5px] border-green-normal hover:bg-green-light-hover active:bg-green-light-active",
          variant === "secondary" && "bg-green-light text-green-normal hover:bg-green-light-hover",
          variant === "ghost" && "bg-transparent text-gray-1 hover:bg-green-light",

          className
        )}
        {...props}
      >
        {loading ? (
          <span className="flex items-center gap-2">
            <svg className="animate-spin h-4 w-4 text-current" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
            </svg>
            Loading...
          </span>
        ) : (
          children
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
