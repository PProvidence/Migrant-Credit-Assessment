import type { Metadata } from "next";
import { Arimo } from "next/font/google";
import "./globals.css";

const arimo = Arimo({
  variable: "--font-arimo",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Migrant Credit | Empowering Financial Journeys",
    template: "%s | Migrant Credit",
  },
  description: "Navigate the U.S. credit landscape with confidence. Educational modules, AI-driven support, and credit building tools for immigrants and young Americans. | Assessment project for Migrant Credit application by Providence Oduok for Tredbase.",
  keywords: ["credit score", "immigrant finance", "credit history", "financial literacy", "AI credit help"],
  authors: [{ name: "Tredbase Team" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${arimo.variable}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
