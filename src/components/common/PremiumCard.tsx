import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import type { MouseEvent, ReactNode } from "react";
import { useMemo } from "react";
import { motionTransitions } from "@/constants/motion";

type PremiumCardProps = {
  children: ReactNode;
  className?: string;
  /**
   * Extra wrapper class for the inner surface element.
   * Use this when you want to keep existing backgrounds (e.g. featured gradient).
   */
  surfaceClassName?: string;
  /**
   * Enables cursor spotlight like the Clerk grid cards.
   */
  enableSpotlight?: boolean;
  /**
   * CSS color stops used for the spotlight.
   */
  spotlightColor?: string;
  /**
   * Hover lift in px (negative moves upward).
   */
  hoverLiftY?: number;
};

const defaultSpotlightColor = "rgba(255,255,255,0.10)";

export default function PremiumCard({
  children,
  className = "",
  surfaceClassName = "",
  enableSpotlight = true,
  spotlightColor = defaultSpotlightColor,
  hoverLiftY = -3,
}: PremiumCardProps) {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const opacity = useMotionValue(0);

  const background = useMotionTemplate`radial-gradient(220px circle at ${mx}px ${my}px, ${spotlightColor}, transparent 55%)`;

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set(e.clientX - rect.left);
    my.set(e.clientY - rect.top);
  };

  const handleMouseEnter = () => {
    opacity.set(1);
  };

  const handleMouseLeave = () => {
    opacity.set(0);
  };

  const hover = useMemo(
    () => ({
      y: hoverLiftY,
    }),
    [hoverLiftY],
  );

  return (
    <motion.div
      onMouseMove={enableSpotlight ? handleMouseMove : undefined}
      onMouseEnter={enableSpotlight ? handleMouseEnter : undefined}
      onMouseLeave={enableSpotlight ? handleMouseLeave : undefined}
      whileHover={hover}
      transition={motionTransitions.hoverLift}
      className={`relative overflow-hidden ${className}`}
    >
      {enableSpotlight && (
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity"
          style={{
            background,
            opacity,
          }}
        />
      )}

      <div className={`relative z-10 ${surfaceClassName}`}>{children}</div>
    </motion.div>
  );
}

