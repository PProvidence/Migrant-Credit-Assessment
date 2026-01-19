'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import SignUpModal from '@/components/sections/SignUpModal';
import { AnimatePresence } from 'framer-motion';

interface ModalContextType {
  openSignUp: () => void;
  // closeSignUp: () => void;
  openLogin: () => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [view, setView] = useState<'signup' | 'login' | null>(null);

  const openSignUp = () => setView('signup');
  const openLogin = () => setView('login');
  const closeModal = () => setView(null);

  return (
    <ModalContext.Provider value={{ openSignUp, openLogin, closeModal }}>
      {children}
      
      {/* The Modal at the root level */}
      <AnimatePresence>
        {view && (
          <SignUpModal isOpen={!!view} onClose={closeModal} mode={view} />
        )}
      </AnimatePresence>
      
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (!context) throw new Error('useModal must be used within a ModalProvider');
  return context;
}