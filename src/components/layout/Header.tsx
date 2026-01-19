"use client";

import { useModal } from "@/context/ModalContext";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Navbar, MobileNav } from "./Navbar";
import Button from '@/components/ui/Button';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { openLogin } = useModal();
  const scrollToNewsletter = () => {
    const newsletterSection = document.getElementById('newsletter');
    if (newsletterSection) {
      newsletterSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="mx--auto md:mx-auto gap-4  flex h-20 w-full sm:max-w--11/12 xl:max-w-260 items-center justify-between lg:justify--evenly px-6 md:px-12 lg:px-16 xl:px-0">
          {/* Logo Div Container */}
          <div className="shrink-0">
            <Link href="/">
              <Image
                src="/logos/TMC-logo.svg"
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

          {/* Button Group Div */}
          <div className="hidden md:flex items-center gap-2.5 lg:gap-4">
            <Button onClick={scrollToNewsletter} variant="primary" width="sm">
              Subscribe
            </Button>
            <Button onClick={openLogin} variant="outline" width="sm">
              Login
            </Button>
          </div>

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
