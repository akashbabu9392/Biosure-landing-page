import { motion } from "framer-motion";
import AnimatedSection from "../AnimatedSection";

const features = [
  { icon: "📋", title: "Chain of Custody, Fully Digital", desc: "Create, submit, and track CoC forms electronically. Every sample is tracked from submission through result entry with a complete audit trail.", tag: "Full CRUD · Audit Trail", large: true },
  { icon: "📄", title: "One-Click PDF Reports", desc: "Generate professional lab reports instantly — complete with organism IDs, plate images, floor plans, and historical trending.", tag: "USP 797 Aligned" },
  { icon: "🏢", title: "Free Client Portal", desc: "Your pharmacy clients get their own self-service portal to submit CoC forms, access reports, and track sample status.", tag: "Always Free" },
  { icon: "📊", title: "Historical Trending", desc: "Z-score analysis surfaces contamination patterns across sampling events before they become action-level excursions.", tag: "Z-score Analysis" },
  { icon: "🔔", title: "Real-Time Notifications", desc: "Live alerts and email queues keep lab staff and clients in sync the moment a report is uploaded or approved.", tag: "Socket.IO + Email" },
  { icon: "🔐", title: "Granular Permissions", desc: "Role-based access control with per-user overrides across five roles and three organization tiers.", tag: "Electronic Signatures" },
];

const FeaturesSection = () => (
  <section id="features" className="py-24 px-6">
    <div className="container">
      <AnimatedSection className="text-center max-w-[600px] mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-xs font-medium text-primary mb-5">
          Everything you need for lab management
        </div>
        <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.1] tracking-tight">
          Everything you need for{" "}
          <span className="text-gradient">compliance</span>
        </h2>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          Complete lab management with built-in USP 797 workflows, automated reporting, and a client portal — all in one platform.
        </p>
      </AnimatedSection>

      {/* Bento grid like clerk.com */}
      <div className="mt-16 dark-section rounded-3xl p-6 md:p-8">
        <div className="text-center mb-8">
          <div className="text-xs uppercase tracking-wider text-muted-foreground font-medium mb-2">Built-in features</div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f, i) => (
            <AnimatedSection key={f.title} delay={i * 0.06}>
              <motion.div
                whileHover={{ y: -2 }}
                className={`bg-white/[0.04] border border-white/[0.08] rounded-2xl p-6 group transition-all hover:border-white/[0.14] hover:bg-white/[0.06] ${f.large ? "lg:col-span-2 lg:row-span-1" : ""}`}
              >
                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center text-lg mb-4">
                  {f.icon}
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
  </section>
);

export default FeaturesSection;
