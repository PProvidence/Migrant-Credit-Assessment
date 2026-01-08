import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { InstagramIcon, TwitterIcon, LinkedinIcon, ArrowUpIcon } from '@/components/ui/Icons';

export function Footer() {
   // Localized Utility Styles
  const linkStyle = "text-white text-sm font-normal leading-relaxed opacity-50 hover:opacity-100 transition-opacity duration-300";
  const titleStyle = "text-white text-base font-bold mb-6 block";
  
  // social icons with group feature
  const socialLinkStyle = "group transition-transform hover:scale-110 duration-300";

  const navGroups = [
    { title: 'Products', links: ['What should I know', 'Ask a Question'] },
    { title: 'Legal', links: ['Terms of Use', 'Privacy policies'] },
    { title: 'Company', links: ['About Us', 'Contact Us'] },
    { title: 'Support', links: ['FAQs'] },
  ];

  return (
    <footer className="bg-green-darker text-white py-16 md:py-24">
      <h2 id="footer-heading" className="sr-only">Footer</h2>

      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-10 xl:px-5">
        
        {/* Main Content Area (Top section) */}
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:flex gap-8 xl:gap-12 mb-16">
          
          {/* Left Column: Logo and Description */}
          <section className="space-y-6 mb-8 lg:mb-0 lg:w-1/3" aria-label="Footer Logo and Description">
            {/* Logo Div Container */}
            <div className="shrink-0" aria-label="TMC Home">
              <Link href="/">
                <Image
                  src="/TMC-logoWhite.svg"
                  alt="TMC Migrant Credit Logo"
                  width={100}
                  height={40}
                  className="w-15 xl:w-20 h-auto"
                  priority
                />
              </Link>
            </div>
            <p className={`${linkStyle} max-w-80`}>
              The Migrant credit is focused on helping immigrants and young Americans understand the credit system
            </p>
          </section>

          {/* Middle Column: Nav Quick Links */}
          <nav className="md:col-span-1" aria-label="Footer Nav Links">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 space-y-8 md:gap-8 xl:gap-13">
              {navGroups.map((group) => (
                <div key={group.title} className="flex flex-col gap-5">
                  <div className={titleStyle}>{group.title}</div>
                  <ul className="flex flex-col space-y-5">
                    {group.links.map((link) => (
                      <a 
                        key={link} 
                        href="#" 
                        className={linkStyle}
                      >
                        {link}
                      </a>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </nav>

          {/* Right Column: Socials & Email */}
          <section className="md:col-span-1 lg:text-right">
            <div className="space-y-6">
              <div className={titleStyle}>Connect with us</div>
              <div className="flex flex-wrap justify-start lg:justify-end gap-6">
                <a href="#" className={socialLinkStyle} aria-label="Instagram"><InstagramIcon /></a>
                <a href="#" className={socialLinkStyle} aria-label="Twitter"><TwitterIcon /></a>
                <a href="#" className={socialLinkStyle} aria-label="LinkedIn"><LinkedinIcon /></a>
              </div>
              <address className="not-italic">
                <a href="mailto:hi@themigrantcredit.com" className={linkStyle}>
                  hi@themigrantcredit.com
                </a>
              </address>
            </div>
          </section>
        </div>

        {/* Separator Line */}
        <hr className="border-none h-px bg-white opacity-10 mb-8 w-full" />

        {/* Bottom Section: Copyright and Back to Top */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="opacity-50 text-xs font-normal">
            Copyright © 2024 • All Rights Reserved
          </p>
          <a href="#top" className="group flex items-center gap-2 text-white text-sm font-normal">
             <ArrowUpIcon className="rotate-180" />
             <span className="opacity-50 group-hover:opacity-100 transition-opacity">Back to Top</span>
          </a>
        </div>
      </div>
    </footer>
  );
};