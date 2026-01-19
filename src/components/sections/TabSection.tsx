'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import { TABS_CONTENT } from '@/constants/data';
import { cn } from '@/lib/utils';
import Button from '@/components/ui/Button';
import { motion, AnimatePresence } from 'framer-motion';

export default function TabSection() {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  // Default to first tab
  const activeTabId = searchParams.get('tab') || TABS_CONTENT[0].id;
  const activeContent = TABS_CONTENT.find(t => t.id === activeTabId) || TABS_CONTENT[0];

  const handleTabClick = (id: string) => {
    const params = new URLSearchParams(searchParams);
    params.set('tab', id);
    router.replace(`?${params.toString()}`, { scroll: false });
  };

  return (
    <section className="mt-3 mb-7 w-full sm:max-w--11/12 2xl:max-w-260 mx-auto bg-white">
      {/* Tab Navigation */}
      <div className="grid sm:grid-cols-12 sm:gap-6 lg:gap-8 xl:gap-10 items-center pt-8 sm:pt-12 xl:pt-16.5">
        {/* --- LEFT COLUMN: Navigation --- */}
        <div className="sm:col-span-6 flex flex-col space-y-2 xl:space-y-2.5 px-1 sm:px-3 lg:px-6">
          {TABS_CONTENT.map((tab) => {
            const isActive = activeTabId === tab.id;
            
            return (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                className={cn(
                  "group flex items-center gap-4 xl:gap-5  p-4 xl:p-6 rounded-[10px] transition-all duration-300 text-left border border-transparent w-full",
                  isActive ? "bg-white shadow-lg border-green-normal" : "hover:bg-gray-50"
                )}
              >
                {/* Custom Icon Component (The one you styled) */}
                <div className="size-11 relative flex-shrink-0">
                    <div 
                      className={cn(
                        "size-11 left-0 top-0 absolute rounded-full bg-linear-0 opacity-90 transition-opacity",
                        tab.gradientClass
                        // Only show the colored gradient background if Active
                        // isActive ? tab.gradientClass : "bg-gray-200 opacity-50"
                      )} 
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <Image 
                          src={tab.iconPath} 
                          alt="" 
                          width={24} 
                          height={24}
                          // Make icon white if active, gray if inactive (optional visual polish)
                          // className={isActive ? "brightness-100 invert-0" : "brightness-0 invert-[0.6]"} 
                        />
                    </div>
                </div>

                <span className={cn(
                  "font-medium 2xl:font-semibold text-xl",
                  isActive ? "text-green-darker" : "text-gray-medium group-hover:text-green-normal-hover"
                )}>
                  {tab.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* --- RIGHT COLUMN: Content (Text Only) --- */}
        <div className="sm:col-span-6 sm:col-start-7 pt-4 px-2 sm:px-0 lg:px--3 max-w-122 ">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTabId}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="text-2xl md:text-3xl xl:text-[32px] font-bold mb-6 text-green-darker">
                  {activeContent.title}
                </h3>
                
                <p className="text-gray-1 leading-8 mb-8 text-base 2xl:text-lg">
                  {activeContent.content}
                </p>

                <Button variant="outline" width='md'>
                  {activeContent.cta}
                </Button>
              </motion.div>
            </AnimatePresence>
        </div>
      </div>
    </section>
  );
}