"use client";

import React from 'react';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'About', href: '#' },
  { name: 'What should I know?', href: '#' },
  { name: 'Ask a Question', href: '#' },
];

export function Navbar() {
  return (
    <nav className="hidden md:flex items-center justify-between gap-8 md:gap-3.5 lg:gap-12.5 xl:gap-20">
      {/* Navigation Links Group */}
      <div className="flex items-center gap-6 sm:gap-4.5 md:gap-5 lg:gap-12.5">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="text-gray-3 text-base font-medium hover:text-green-normal transition-colors"
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Button Group Div */}
      <div className="flex items-center gap-2.5 lg:gap-4">
        <Button variant="primary" width="sm">
          Subscribe
        </Button>
        <Button variant="outline" width="sm">
          Login
        </Button>
      </div>
    </nav>
  );
}

export function MobileNav({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <div
      className={cn(
        "fixed inset-0 z-40 bg-black bg-opacity-50 transition-opacity md:hidden",
        isOpen ? "opacity-100" : "pointer-events-none opacity-0"
      )}
      onClick={onClose}
      aria-hidden={!isOpen}
    >
      <nav
        className={cn(
          "absolute right-0 top-20 w-64 bg-white shadow-lg transition-transform duration-300 md:hidden",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col space-y-4 p-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-gray-3 text-base font-medium hover:text-green-normal transition-colors"
              onClick={onClose}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex flex-col gap-3 border-t pt-4">
            <Button variant="primary" width="md" className="w-full">
              Subscribe
            </Button>
            <Button variant="outline" width="md" className="w-full">
              Login
            </Button>
          </div>
        </div>
      </nav>
    </div>
  );
}
