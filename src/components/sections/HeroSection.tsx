import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "../AnimatedSection";
import { assets } from "@/constants/assets";

const HeroSection = () => (
  <section className="relative pt-16 sm:pt-20 pb-20 px-6 text-center overflow-hidden">
    {/* Subtle gradient background */}
    <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.04] via-transparent to-transparent pointer-events-none" />

    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-xs font-medium text-primary mb-7"
    >
      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
      Purpose-built for Environmental Monitoring Labs
    </motion.div>

    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="text-[clamp(2.5rem,5.5vw,4.5rem)] font-bold leading-[1.08] tracking-tight max-w-[820px] mx-auto"
    >
      From sample intake to <span className="text-gradient">signed report</span> in minutes
    </motion.h1>

    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="mt-6 max-w-[540px] mx-auto text-base leading-relaxed text-muted-foreground"
    >
      Simple and secure lab management, ready to use out of the box. Automate your entire sample-to-report workflow — with a free client portal
      included.
    </motion.p>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="flex gap-3 mt-8 flex-wrap justify-center"
    >
      <a
        href="#"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-all shadow-md shadow-primary/25"
      >
        Start building for free <ArrowRight className="w-4 h-4" />
      </a>
    </motion.div>

    {/* Dashboard preview (same position as before) */}
    <AnimatedSection className="mt-16 w-full max-w-[1100px] mx-auto" delay={0.5}>
      <div className="relative isolate">
        <div className="relative z-10 rounded-2xl border border-border bg-card shadow-2xl shadow-black/20 overflow-hidden">
          <div className="flex items-center gap-2 px-5 py-3 bg-muted/50 border-b border-border">
            <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
            <div className="ml-3 bg-background rounded-md px-3.5 py-0.5 text-[0.72rem] text-muted-foreground border border-border">
              Dashboard
            </div>
          </div>
          <img
            src={assets.dashboardPreviewSrc}
            alt={assets.dashboardPreviewAlt}
            loading="lazy"
            width={1600}
            height={736}
            className="w-full h-auto block select-none"
          />
        </div>
      </div>
    </AnimatedSection>
  </section>
);

export default HeroSection;
