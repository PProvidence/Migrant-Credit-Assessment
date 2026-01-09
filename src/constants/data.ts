export interface Feature {
  title: string;
  description: string;
  iconPath: string;
  gradientClass: string;
}

export interface TabContent {
  id: string;
  label: string;
  title: string;
  content: string;
  cta: string;
  iconPath: string;
  gradientClass: string;
}

export interface Testimonial {
  id: number;
  text: string;
  author: string;
  role: string;
  avatar: string;
}

export const FEATURES: Feature[] = [
  {
    title: "Educational Modules",
    description: "Curated modules covering credit basics, building credit history, and managing debt.",
    iconPath: "/icons/eduMod.svg", 
    gradientClass: "from-[#369D49] to-[#A6ABA7]/0", 
  },
  {
    title: "Credit Tracking",
    description: "Access to detailed credit reports with explanations of key elements.",
    iconPath: "/icons/credTrack.svg",
    gradientClass: "from-tmc-blue to-[#a6aba7]/0", 
  },
  {
    title: "AI-Driven Support",
    description: "Instant support for common credit-related queries through a user-friendly chatbot.",
    iconPath: "/icons/AIdriven.svg",
    gradientClass: "from-green-normal to-[#a6aba7]/0",
  },
];

export const TABS_CONTENT: TabContent[] = [
  {
    id: "credit-scores",
    label: "Understanding Credit Scores",
    iconPath: "/icons/credit-score.svg",
    title: "Understanding Credit Scores",
    content: "Learn about the components that make up a credit score, such as payment history, credit utilization, and length of credit history.",
    cta: "Learn More",
    gradientClass: "from-[#369D49] to-[#A6ABA7]/0"
  },
  {
    id: "building-history",
    label: "Building Credit History",
    iconPath: "/icons/credHistory.svg",
    title: "Building Strong History",
    content: "Discover strategies to build a robust credit profile from scratch, perfect for immigrants and young adults.",
    cta: "Start Building",
    gradientClass: "from-[#2a1d47] to-[#2a1d47]/0"
  },
  {
    id: "credit-reports",
    label: "Accessing Credit Reports",
    iconPath: "/icons/credReport.svg",
    title: "Understanding Your Reports",
    content: "Learn how to access your free annual credit report and what to look for when reviewing it for errors or inaccuracies.",
    cta: "View Reports",
    gradientClass: "from-[#ff9c00] to-[#ff9c00]/0"
  },
  {
    id: "managing-debt",
    label: "Managing Debt Effectively",
    iconPath: "/icons/debt.svg",
    title: "Manage Debt Effectively",
    content: "Strategies to minimize debt and improve your credit utilization ratio, a key factor in your score calculation.",
    cta: "Get Started",
    gradientClass: "from-[#2a6f97] to-[#2a6f97]/0"
  },
  {
    id: "financial-goal",
    label: "Financial Goal Setting",
    iconPath: "/images/goals.svg",
    title: "Achieve Your Financial Goals",
    content: "Set clear objectives for homeownership, car loans, or starting a business, with a tailored plan for success.",
    cta: "Set Goals",
    gradientClass: "from-[#d61651] to-[#d61651]/0"
  },

];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    text: "Migrant Credit has been a game-changer for me! The educational modules are clear and easy to follow, helping me understand the complexities of the U.S. credit system.",
    author: "Ayomide",
    role: "Recent Graduate",
    avatar: "/images/avatars/avatar1.svg"
  },
  {
    id: 2,
    text: "I was lost when I first arrived. This platform gave me the roadmap I needed to secure my first car loan within 6 months.",
    author: "Sarah",
    role: "Healthcare Worker",
    avatar: "/images/avatars/avatar2.svg"
  },
  {
    id: 3,
    text: "The AI support answered questions my bank couldn't. I went from no score to 720 in less than a year thanks to these modules.",
    author: "Carlos",
    role: "Software Engineer",
    avatar: "/images/avatars/avatar3.svg"
  },
  {
    id: 4,
    text: "A genuine game-changer. The clear tracking and steps provided made something daunting feel achievable. Highly recommend for any new American.",
    author: "Fatima",
    role: "Small Business Owner",
    avatar: "/images/avatars/avatar4.svg"
  },
  {
    id: 5,
    text: "Within a few months of using Migrant Credit, I saw a significant jump in my score. The modules are excellent.",
    author: "David",
    role: "Student",
    avatar: "/images/avatars/avatar5.svg"
  }

];

// export const NEWSLETTER_SECTION = {
//   title: "Stay Up To Date",
//   description: "Subscribe to our newsletter for the latest tips on building credit and managing your finances effectively.",
//   placeholder: "Enter your email address",
//   cta: "Subscribe",
//   backgroundImage: "/images/footer-map-bg.svg" 
// }