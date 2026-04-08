import type { Transition, Variants } from "framer-motion";

export const motionEasings = {
  // Matches the Clerk-like feel from `public/clerk.md` (ease-[cubic-bezier(0.4,0.36,0,1)])
  clerkStandard: [0.4, 0.36, 0, 1] as const,
  softOut: [0.25, 0.46, 0.45, 0.94] as const,
} as const;

export const motionTransitions = {
  enter: { duration: 0.7, ease: motionEasings.clerkStandard } satisfies Transition,
  enterFast: { duration: 0.5, ease: motionEasings.clerkStandard } satisfies Transition,
  hoverLift: { duration: 0.25, ease: motionEasings.clerkStandard } satisfies Transition,
} as const;

export const motionVariants = {
  fadeUp: {
    hidden: { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0 },
  } satisfies Variants,
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  } satisfies Variants,
  stagger: {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.05,
      },
    },
  } satisfies Variants,
} as const;

