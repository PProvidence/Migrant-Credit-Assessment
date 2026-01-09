"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Navbar, MobileNav } from "./Navbar";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="mx--auto md:mx-auto flex h-20 w-full max-w-260 items-center justify-between lg:justify--evenly px-4 sm:px-6 lg:px-8 xl:px-0">
          {/* Logo Div Container */}
          <div className="shrink-0">
            <Link href="/">
              <Image
                src="/TMC-logo.svg"
                alt="TMC Migrant Credit Logo"
                width={100}
                height={40}
                className="w-16 sm:w-20 h-auto"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <Navbar />

          {/* Mobile Hamburger Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-3 hover:bg-green-light focus:outline-none focus-visible:ring-2 focus-visible:ring-green-normal"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle mobile menu"
          >
            <svg
              className="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileNav isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
}
