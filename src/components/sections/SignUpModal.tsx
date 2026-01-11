'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, CheckCircle2, User, Briefcase, GraduationCap, Lock, Mail } from 'lucide-react';
import Button from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { cn } from '@/lib/utils';

interface SignUpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// THE STATE MACHINE (Step 1 -> 2 -> 3)
type Step = 1 | 2 | 3;

export default function SignUpModal({ isOpen, onClose }: SignUpModalProps) {
  const [step, setStep] = useState<Step>(1);
  const [loading, setLoading] = useState(false);
  const [role, setRole] = useState<string | null>(null);

  // Reset state when modal opens/closes
  useEffect(() => {
    if (isOpen) {
      setStep(1);
      setRole(null);
    }
  }, [isOpen]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  // Animation Variants for the "Wizard" slide effect
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 20 : -20,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 20 : -20,
      opacity: 0,
    }),
  };

  const handleNext = async () => {
    if (step === 2) {
      setLoading(true);
      // Simulate Secure API Handshake
      await new Promise(resolve => setTimeout(resolve, 1500));
      setLoading(false);
      setStep(3);
    } else {
      setStep((prev) => (prev + 1) as Step);
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center px-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Backdrop */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
      />

      {/* Modal Card */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 10 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 10 }}
        className="relative w-full max-w-[480px] bg-white rounded-[24px] shadow-2xl overflow-hidden p-6 md:p-8 z-10"
      >
        {/* Progress Header */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex gap-2" role="progressbar" aria-valuenow={step} aria-valuemin={1} aria-valuemax={3}>
            {[1, 2, 3].map((i) => (
              <div 
                key={i} 
                className={cn(
                  "h-1.5 rounded-full transition-all duration-500 ease-out",
                  i === step ? "w-8 bg-green-normal" : "w-2 bg-gray-200",
                  i < step && "bg-green-normal"
                )} 
              />
            ))}
          </div>
          <button 
            onClick={onClose} 
            className="text-gray-400 hover:text-gray-600 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-green-normal rounded-full p-1"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Dynamic Content Wizard */}
        <div className="relative min-h-[340px]">
          <AnimatePresence mode="wait" custom={step}>
            
            {/* STEP 1: CREDENTIALS */}
            {step === 1 && (
              <motion.div
                key="step1"
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.2 }}
                className="absolute inset-0 flex flex-col"
              >
                <h2 id="modal-title" className="text-2xl font-bold text-green-darker mb-2">Create account</h2>
                <p className="text-gray-500 mb-6">Start building your financial future in the UK.</p>
                
                <div className="flex flex-col gap-4 flex-1">
                  <Input 
                    placeholder="Full Name" 
                    startIcon={<User className="w-4 h-4 text-gray-400" />} 
                  />
                  <Input 
                    placeholder="Email Address" 
                    type="email" 
                    startIcon={<Mail className="w-4 h-4 text-gray-400" />}
                  />
                  <Input 
                    placeholder="Password" 
                    type="password" 
                    startIcon={<Lock className="w-4 h-4 text-gray-400" />}
                  />
                </div>

                <Button onClick={handleNext} width="full" className="mt-6">
                  Continue <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </motion.div>
            )}

            {/* STEP 2: ROLE SELECTION */}
            {step === 2 && (
              <motion.div
                key="step2"
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.2 }}
                className="absolute inset-0 flex flex-col"
              >
                <h2 className="text-2xl font-bold text-green-darker mb-2">Tell us about you</h2>
                <p className="text-gray-500 mb-6">This helps us personalize your credit journey.</p>
                
                <div className="flex flex-col gap-3 flex-1">
                  <RoleOption 
                    icon={<Briefcase size={20} />} 
                    label="Skilled Worker" 
                    selected={role === 'worker'} 
                    onClick={() => setRole('worker')} 
                  />
                  <RoleOption 
                    icon={<GraduationCap size={20} />} 
                    label="International Student" 
                    selected={role === 'student'} 
                    onClick={() => setRole('student')} 
                  />
                </div>

                <Button 
                  onClick={handleNext} 
                  loading={loading}
                  loadingText="Creating Account..."
                  disabled={!role} 
                  width="full" 
                  className="mt-6"
                >
                  Create Account
                </Button>
              </motion.div>
            )}

            {/* STEP 3: SUCCESS */}
            {step === 3 && (
              <motion.div
                key="step3"
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.2 }}
                className="absolute inset-0 flex flex-col items-center justify-center text-center"
              >
                <motion.div 
                  initial={{ scale: 0, rotate: -45 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: "spring", duration: 0.5 }}
                  className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-6"
                >
                  <CheckCircle2 className="w-8 h-8 text-green-normal" />
                </motion.div>
                <h2 className="text-2xl font-bold text-green-darker mb-2">You're all set!</h2>
                <p className="text-gray-500 mb-8 max-w-[80%] mx-auto">
                  We've sent a verification link to your email. Please check your inbox.
                </p>
                <Button onClick={onClose} variant="outline" width="full">
                  Close Window
                </Button>
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}

// Helper Sub-component for Step 2
function RoleOption({ icon, label, selected, onClick }: { icon: any, label: string, selected: boolean, onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex items-center p-4 rounded-xl border transition-all duration-200 w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-green-normal",
        selected 
          ? "border-green-normal bg-green-50/50 text-green-darker ring-1 ring-green-normal" 
          : "border-gray-200 hover:border-green-300 text-gray-600 bg-white"
      )}
    >
      <div className={cn("p-2 rounded-lg mr-4 transition-colors", selected ? "bg-white text-green-normal" : "bg-gray-50 text-gray-400")}>
        {icon}
      </div>
      <span className="font-medium">{label}</span>
    </button>
  );
}