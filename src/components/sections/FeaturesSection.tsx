import { motion } from "framer-motion";
import AnimatedSection from "../AnimatedSection";
import { Bell, FileText, LineChart, LockKeyhole, Package, UsersRound } from "lucide-react";
import { motionTransitions } from "@/constants/motion";

const features = [
  { icon: Package, title: "Chain of Custody, Fully Digital", desc: "Create, submit, and track CoC forms electronically. Every sample is tracked from submission through result entry with a complete audit trail.", tag: "Full CRUD · Audit Trail", large: true },
  { icon: FileText, title: "One-Click PDF Reports", desc: "Generate professional lab reports instantly — complete with organism IDs, plate images, floor plans, and historical trending.", tag: "USP 797 Aligned" },
  { icon: UsersRound, title: "Free Client Portal", desc: "Your pharmacy clients get their own self-service portal to submit CoC forms, access reports, and track sample status.", tag: "Always Free" },
  { icon: LineChart, title: "Historical Trending", desc: "Z-score analysis surfaces contamination patterns across sampling events before they become action-level excursions.", tag: "Z-score Analysis" },
  { icon: Bell, title: "Real-Time Notifications", desc: "Live alerts and email queues keep lab staff and clients in sync the moment a report is uploaded or approved.", tag: "Socket.IO + Email" },
  { icon: LockKeyhole, title: "Granular Permissions", desc: "Role-based access control with per-user overrides across five roles and three organization tiers.", tag: "Electronic Signatures" },
];

const FeaturesSection = () => (
  <section id="features" className="relative overflow-hidden py-20 sm:py-24">
    <AnimatedSection className="text-center max-w-[600px] mx-auto px-6">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-xs font-medium text-primary mb-5">
        Everything you need for lab management
      </div>
      <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.1] tracking-tight">
        Everything you need for <span className="text-gradient">compliance</span>
      </h2>
      <p className="mt-4 text-base leading-relaxed text-muted-foreground">
        Complete lab management with built-in USP 797 workflows, automated reporting, and a client portal — all in one platform.
      </p>
    </AnimatedSection>

    {/* FULL BLEED LAYER */}
    <div className="relative left-1/2 w-screen -translate-x-1/2 mt-12 sm:mt-14">
      <div className="premium-panel-bleed">
        <div className="premium-panel">
          <div className="premium-panel__surface dark-section">
            {/* INNER CONTENT (ONLY THIS IS CENTERED) */}
            <div className="max-w-[1200px] mx-auto px-6 py-12 sm:py-14 md:py-16">
              <div className="text-center mb-10">
                <div className="text-xs uppercase tracking-wider text-muted-foreground font-medium mb-2">Built-in features</div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {features.map((f, i) => (
                  <AnimatedSection key={f.title} delay={i * 0.06}>
                    <motion.div
                      whileHover={{ y: -2 }}
                      transition={motionTransitions.hoverLift}
                      className={`premium-card rounded-2xl p-6 group transition-all ${f.large ? "lg:col-span-2 lg:row-span-1" : ""}`}
                    >
                      <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center mb-4 text-primary">
                        <f.icon className="w-5 h-5" aria-hidden="true" />
                      </div>
                      <h3 className="text-base font-semibold mb-2 text-white/90">{f.title}</h3>
                      <p className="text-sm leading-relaxed text-white/50">{f.desc}</p>
                      <span className="inline-flex items-center mt-4 px-2.5 py-0.5 rounded-full text-[0.7rem] font-medium bg-primary/15 text-primary">
                        {f.tag}
                      </span>
                    </motion.div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default FeaturesSection;
