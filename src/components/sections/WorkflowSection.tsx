import { motion } from "framer-motion";
import AnimatedSection from "../AnimatedSection";

const steps = [
  { num: "01", title: "Client Submits CoC", desc: "Pharmacy submits a digital chain-of-custody form through their self-service portal. All data captured automatically." },
  { num: "02", title: "Lab Receives Samples", desc: "Lab technicians review incoming CoC forms, enter incubation data, CFU counts, and organism identifications." },
  { num: "03", title: "Report Generated", desc: "Lab admin reviews results and clicks Generate. A professional PDF report is created in seconds." },
  { num: "04", title: "Client Notified", desc: "Client receives a real-time notification and email. They log in, view the report, and download instantly." },
];

const WorkflowSection = () => (
  <section id="workflow" className="py-24 px-6 border-y border-border bg-muted/30">
    <div className="container">
      <AnimatedSection className="text-center max-w-[600px] mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-xs font-medium text-primary mb-5">
          How it works
        </div>
        <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.1] tracking-tight">
          From intake to report — <span className="text-gradient">automated</span>
        </h2>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          BioSure maps your real-world workflow into a clean, sequential process.
        </p>
      </AnimatedSection>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14 relative">
        {/* Connecting line */}
        <div className="hidden lg:block absolute top-8 left-[calc(12.5%+24px)] right-[calc(12.5%+24px)] h-px bg-gradient-to-r from-primary/40 via-primary/20 to-transparent" />

        {steps.map((s, i) => (
          <AnimatedSection key={s.num} delay={i * 0.1} className="flex flex-col items-center text-center">
            <motion.div
              whileHover={{ scale: 1.1, borderColor: "hsl(262 83% 58%)" }}
              className="w-14 h-14 rounded-full bg-background border-2 border-border flex items-center justify-center text-sm font-bold text-primary mb-5 relative z-10 shadow-sm"
            >
              {s.num}
            </motion.div>
            <h3 className="text-base font-semibold mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default WorkflowSection;
