'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import SignUpModal from '@/components/sections/SignUpModal';
import { AnimatePresence } from 'framer-motion';

interface ModalContextType {
  openSignUp: () => void;
  closeSignUp: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ModalContext.Provider value={{ 
      openSignUp: () => setIsOpen(true), 
      closeSignUp: () => setIsOpen(false) 
    }}>
      {children}
      
      {/* The Modal at the root level */}
      <AnimatePresence>
        {isOpen && <SignUpModal isOpen={isOpen} onClose={() => setIsOpen(false)} />}
      </AnimatePresence>
      
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (!context) throw new Error('useModal must be used within a ModalProvider');
  return context;
}