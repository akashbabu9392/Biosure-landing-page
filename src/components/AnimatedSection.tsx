import { motion } from "framer-motion";
import { ReactNode } from "react";
import { motionTransitions, motionVariants } from "@/constants/motion";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: keyof typeof motionVariants;
}

const AnimatedSection = ({
  children,
  className = "",
  delay = 0,
  variant = "fadeUp",
}: AnimatedSectionProps) => (
  <motion.div
    variants={motionVariants[variant]}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-60px" }}
    transition={{ ...motionTransitions.enter, delay }}
    className={className}
  >
    {children}
  </motion.div>
);

export default AnimatedSection;
