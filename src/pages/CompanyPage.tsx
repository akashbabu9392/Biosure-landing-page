import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";

const investors = [
  { name: "Pacific Ventures", desc: "Backing healthcare technology innovation since 2012." },
  { name: "LabTech Capital", desc: "Investing in the future of laboratory automation." },
  { name: "Meridian Fund", desc: "Supporting regulatory-compliant SaaS platforms." },
];

const team = [
  { name: "Alex Rivera", role: "Co-founder & CEO", initials: "AR" },
  { name: "Dr. Maya Singh", role: "Co-founder & CTO", initials: "MS" },
  { name: "James Okoro", role: "VP of Engineering", initials: "JO" },
  { name: "Emily Zhang", role: "Head of Product", initials: "EZ" },
  { name: "David Kim", role: "Head of Sales", initials: "DK" },
  { name: "Sarah Mitchell", role: "Customer Success Lead", initials: "SM" },
];

const values = [
  { icon: "🔬", title: "Purpose-Built", desc: "We build specifically for environmental monitoring labs — no generic solutions." },
  { icon: "🛡", title: "Compliance First", desc: "USP 797, 21 CFR Part 11, and ISO 17025 compliance built into every feature." },
  { icon: "⚡", title: "Speed Matters", desc: "From 1–3 day setup to sub-second report generation, we obsess over saving time." },
  { icon: "🤝", title: "Customer Obsession", desc: "Every feature starts with real feedback from real lab directors." },
];

const CompanyPage = () => (
  <Layout>
    {/* Dark Hero like clerk.com company page */}
    <section className="dark-section relative py-32 px-6 text-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(262_83%_58%/0.08)_0%,transparent_60%)] pointer-events-none" />
      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-[1.05] tracking-tight max-w-[800px] mx-auto text-white"
      >
        It all starts with the lab
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="mt-6 max-w-[600px] mx-auto text-white/60 leading-relaxed"
      >
        BioSure is on a mission to modernize environmental monitoring labs <strong className="text-white/90 underline decoration-primary/50">once and for all</strong>. We are a team dedicated to providing the best laboratory experience with obsessive attention to every detail.
      </motion.p>
    </section>

    {/* Investors */}
    <section className="py-24 px-6 border-b border-border">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <AnimatedSection>
            <h2 className="text-2xl font-bold leading-tight">
              Funded by industry-leading investors
            </h2>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              BioSure is backed by investors with decades of experience building laboratory tools.
            </p>
          </AnimatedSection>
          {investors.map((inv, i) => (
            <AnimatedSection key={inv.name} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -3, boxShadow: "0 8px 30px rgba(0,0,0,0.08)" }}
                className="bg-background border border-border rounded-2xl p-6 transition-all"
              >
                <h3 className="text-base font-semibold mb-2">{inv.name}</h3>
                <p className="text-sm text-muted-foreground">{inv.desc}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Quote */}
    <section className="py-20 px-6 border-b border-border">
      <AnimatedSection className="container max-w-[700px] mx-auto">
        <blockquote className="text-2xl md:text-3xl font-bold leading-snug tracking-tight">
          "We're big admirers of what the BioSure team are building and looking forward to working more closely with them."
        </blockquote>
        <div className="flex items-center gap-3 mt-6">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary">DR</div>
          <div className="text-left">
            <div className="text-sm font-semibold">Dr. Robert Lane</div>
            <div className="text-xs text-muted-foreground">Managing Partner · Pacific Ventures</div>
          </div>
        </div>
      </AnimatedSection>
    </section>

    {/* Values */}
    <section className="py-24 px-6 bg-muted/30 border-b border-border">
      <div className="container">
        <AnimatedSection className="text-center max-w-[600px] mx-auto mb-14">
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.1] tracking-tight">
            Our values
          </h2>
          <p className="mt-4 text-muted-foreground">
            The principles that guide everything we build.
          </p>
        </AnimatedSection>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {values.map((v, i) => (
            <AnimatedSection key={v.title} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -3 }}
                className="bg-background border border-border rounded-2xl p-7 transition-all hover:shadow-md"
              >
                <div className="text-2xl mb-4">{v.icon}</div>
                <h3 className="text-base font-semibold mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Team */}
    <section className="py-24 px-6">
      <div className="container">
        <AnimatedSection className="text-center max-w-[600px] mx-auto mb-14">
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.1] tracking-tight">
            The team
          </h2>
          <p className="mt-4 text-muted-foreground">
            Built by lab directors, quality managers, and regulatory experts.
          </p>
        </AnimatedSection>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
          {team.map((t, i) => (
            <AnimatedSection key={t.name} delay={i * 0.06} className="text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center text-lg font-bold text-primary mb-3">
                {t.initials}
              </div>
              <div className="text-sm font-semibold">{t.name}</div>
              <div className="text-xs text-muted-foreground">{t.role}</div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20 px-6 border-t border-border">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-6">
        <AnimatedSection>
          <motion.div whileHover={{ y: -3 }} className="bg-muted/50 border border-border rounded-2xl p-8 transition-all hover:shadow-md">
            <div className="text-xs text-primary font-semibold uppercase tracking-wider mb-2">Join BioSure</div>
            <h3 className="text-xl font-bold mb-3">Start now, no strings attached</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Integrate complete lab management in minutes. Free for your first users. No credit card required.
            </p>
            <a href="#" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-all">
              Start building <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </AnimatedSection>
        <AnimatedSection delay={0.1}>
          <motion.div whileHover={{ y: -3 }} className="bg-muted/50 border border-border rounded-2xl p-8 transition-all hover:shadow-md">
            <div className="text-xs text-primary font-semibold uppercase tracking-wider mb-2">Careers</div>
            <h3 className="text-xl font-bold mb-3">Join a team dedicated to their craft</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              At BioSure, we offer a collaborative environment where everyone has the freedom to take ownership.
            </p>
            <a href="#" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground text-sm font-medium hover:bg-muted transition-all">
              Apply today
            </a>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  </Layout>
);

export default CompanyPage;
