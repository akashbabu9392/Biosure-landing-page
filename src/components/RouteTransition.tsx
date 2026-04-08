import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { motionTransitions } from "@/constants/motion";

type RouteTransitionProps = {
  children: ReactNode;
};

export default function RouteTransition({ children }: RouteTransitionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={motionTransitions.enterFast}
    >
      {children}
    </motion.div>
  );
}

