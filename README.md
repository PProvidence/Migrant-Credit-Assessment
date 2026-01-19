# Migrant Credit Assessment – Frontend Implementation

A high-fidelity, performance-optimized landing page built for the Tredbase technical assessment. This project evaluates the translation of product requirements and designs into a clean, scalable, and pixel-perfect frontend application implementation.

> Goal: Deliver a quality pixel-accurate, accessible, high-performance frontend using Next.js 16.1.1 + Tailwind v4, demonstrating senior decision-making, modern React patterns, and security awareness.


## Overview
- Repository: [[GitHub Link](https://github.com/PProvidence/Migrant-Credit-Assessment.git)]

- Live Demo: [[Vercel/Netlify Link](https://migrant-credit-assessment.vercel.app/)]

Tech Stack: Next.js 16.1.1, Tailwind CSS v4.1.18, TypeScript, Framer Motion.

---

## 🏗️ Architectural Decision Log (ADR)

### 1. Typography & Visual Fidelity
* **Context:** The design uses `Helvetica Neue` (proprietary). The assessment strictly requires "pixel-perfect" fidelity.
* **Decision:** Implemented a **Metric-Compatible Font Stack**.
    * **Primary:** `Helvetica Neue` (for macOS/iOS users) to utilize system fonts for 0ms loading time.
    * **Fallback:** `Arimo` (via `next/font`) for Windows/Android users.
* **Rationale:** Unlike `Inter`, `Arimo` is metric-compatible with Helvetica. This guarantees that line breaks, container widths, and text wrapping match the Figma file exactly on Windows, preventing layout shifts that occur with wider modern fonts.

### 2. Component Architecture
* **Context:** Need for a reusable, accessible design system without "junior" dependencies.
* **Decision:** **"Headless" Atomic Design** (Manual Implementation).
    * Declined using full `shadcn/ui` library to avoid fighting opinionated default styles.
    * Adopted the **CVA (Class Variance Authority)** pattern using `clsx` and `tailwind-merge` for the `Button` and `Input` components.
* **Result:** A lightweight, 100% custom component set that matches the Figma design tokens exactly, with zero unused CSS bloat.

### 3. State Management
* **Context:** The "What Should I Know?" section requires switching content panes.
* **Decision A:** **URL-Driven State** (`useSearchParams`).
* **Rationale A:** Instead of local `useState`, the active tab is synced to the URL (e.g., `?tab=building-credit`). This improves UX by making specific educational modules shareable and bookmarkable.
* **Decision B (Modals):** **Polymorphic Context Pattern**.
    * **Implementation:** Created a global `ModalContext` that manages a single `<SignUpModal />` component.
    * The modal is **polymorphic**: it accepts a `mode` prop ('login' | 'signup') and dynamically swaps titles, inputs, and logic paths based on that prop, reducing code duplication.
    * **Rationale B:** This avoids code duplication between two nearly identical modals.


### 4. Performance & Core Web Vitals
* **Logo Strategy:** Exported as SVG and implemented via `next/image` with `priority={true}`. Using a web font (Chakra Petch) was rejected to save a network request and prevent CLS (Cumulative Layout Shift).
* **LCP Optimization:** The Hero image is explicitly prioritized to ensure it loads in the first packet.
* **Server Components:** The Hero, Features, and Footer sections are kept as React Server Components (RSC) to minimize client-side bundle size.

### 5. Security & Data Integrity
* **Context:** Newsletter submission form.
* **Decision:** **Server Actions + Zod Validation**.
* **Rationale:**
    * Using React 19 `useActionState` and Server Actions keeps API logic off the client.
    * **Zod Schema** enforces strict email validation on the server boundary, preventing injection attacks or malformed data before it reaches any database logic.

### 6. Mock Data & API Transition Strategy
* **Context:** No live backend exists for the newsletter subscription.
* **Implementation:** The `subscribeToNewsletter` Server Action currently implements a **Mock Adapter pattern**. It simulates network latency (1.5s), success states, and specific error codes (e.g., duplicate emails).
* **Transition Plan:** The mock logic is isolated in a specifically marked comment block within `src/actions/newsletter.ts`. The contract (`NewsletterState` input/output) is strict, ensuring that swapping the mock block for a real `fetch()` call will require **zero changes** to the frontend UI components.
---

### 📂 Project Structure

```bash
src/
 ├─ actions/             # Server Actions (Backend logic & validation)
 │   └─ newsletter.ts
 ├─ app/                 # Next.js App Router
 │   ├─ layout.tsx
 │   ├─ page.tsx
 │   └─ globals.css
 ├─ components/
 │   ├─ layout/          # Global layout components
 │   │   ├─ Header.tsx
 │   │   ├─ Navbar.tsx
 │   │   └─ Footer.tsx
 │   ├─ sections/        # Major page blocks
 │   │   ├─ Hero.tsx
 │   │   ├─ Features.tsx
 │   │   ├─ WhatShouldIKnow.tsx
 │   │   ├─ Testimonials.tsx 
 │   │   ├─ Reviews.tsx
 │   │   └─ Newsletter.tsx
 │   └─ ui/              # Atomic primitives
 │       ├─ Button.tsx
 │       ├─ Input.tsx
 │       └─ Icons.tsx
 ├─ constants/           # Static data contracts
 │   └─ data.ts
 └─ lib/                 # Shared utilities
     ├─ schemas.ts       # Zod definitions
     └─ utils.ts         # Tailwind merger

public/
 ├─ icons/               # SVG UI icons
 ├─ images/              # Raster assets
 │   └─ avatars/         # Testimonial user images
 └─ logos/               # Brand assets
```
---

## Requirements
**Core Assessment Criteria:**
- Design fidelity: Pixel-accuracy and attention to spacing, typography, and layout
- Component structure: Reusable, well-organized components
- State management: Clear, intentional handling of form state and UI flows
- Accessibility & UX: Sensible defaults, keyboard support, and user-friendly interactions
- Code quality: Readability, structure, and scalability
- Responsiveness: Mobile and desktop behavior

- _Performance: Fast load times, optimized assets, and minimal bundle size_

**Technical Expectations**
- Framework: React (or Next.js) + TypeScript

- Styling: Tailwind CSS (preferred), or a clean alternative

- Data: You may mock API responses where/if needed

- Submission: GitHub repository + short README explaining your approach and trade-offs

> ***Tip:***
> You do not need to build a backend. Focus on the frontend experience and assume API endpoints exist. Where logic is implied (e.g., credit assessment steps, validation, progress), implement reasonable assumptions and document them.

## Getting Started

1. Clone the repo: 
```bash
git clone ...
```
2. Navigate to the project directory:
```bash
cd migrant-credit
```
3. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```
4. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

5. Build for Production:

```Bash

npm run build
# or
yarn build
# or
pnpm build
# or
bun build
```
