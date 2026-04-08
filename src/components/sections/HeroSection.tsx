import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "../AnimatedSection";

const HeroSection = () => (
  <section className="relative pt-32 pb-20 px-6 text-center overflow-hidden">
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
      From sample intake to{" "}
      <span className="text-gradient">signed report</span> in minutes
    </motion.h1>

    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="mt-6 max-w-[540px] mx-auto text-base leading-relaxed text-muted-foreground"
    >
      Simple and secure lab management, ready to use out of the box. Automate your entire sample-to-report workflow — with a free client portal included.
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

    {/* Dashboard mockup */}
    <AnimatedSection className="mt-16 w-full max-w-[1100px] mx-auto" delay={0.5}>
      <div className="rounded-2xl border border-border bg-card shadow-2xl shadow-black/10 overflow-hidden">
        {/* Top bar */}
        <div className="flex items-center gap-2 px-5 py-3 bg-muted/50 border-b border-border">
          <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
          <div className="ml-3 bg-background rounded-md px-3.5 py-0.5 text-[0.72rem] text-muted-foreground border border-border">
            app.biosure.io/dashboard
          </div>
        </div>
        {/* Body */}
        <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] min-h-[420px]">
          {/* Sidebar */}
          <div className="hidden md:block bg-muted/30 border-r border-border py-5">
            <div className="px-4 mb-2 text-[0.7rem] uppercase tracking-wider text-muted-foreground font-semibold">Lab Workspace</div>
            {[
              { label: "Dashboard", active: true },
              { label: "Chain of Custody" },
              { label: "Sample Results" },
              { label: "Reports" },
              { label: "Clients" },
              { label: "Schedule" },
              { label: "Analytics" },
            ].map((item) => (
              <div
                key={item.label}
                className={`flex items-center gap-2.5 px-4 py-2.5 text-[0.8rem] transition-colors ${
                  item.active
                    ? "bg-primary/10 text-primary border-r-2 border-primary font-semibold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <div className="w-4 h-4 rounded bg-border" />
                <span>{item.label}</span>
              </div>
            ))}
          </div>
          {/* Main */}
          <div className="p-6 flex flex-col gap-4 bg-background">
            <div className="flex items-center justify-between flex-wrap gap-3">
              <h3 className="text-lg font-semibold">Dashboard</h3>
              <div className="flex gap-2">
                <span className="px-3 py-1 rounded-full text-[0.72rem] font-semibold bg-primary/10 text-primary">● 12 Active</span>
                <span className="px-3 py-1 rounded-full text-[0.72rem] font-semibold bg-blue-50 text-blue-600">4 Pending</span>
                <span className="px-3 py-1 rounded-full text-[0.72rem] font-semibold bg-red-50 text-red-500">1 Action</span>
              </div>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              {[
                { label: "Reports This Month", value: "48", delta: "↑ 12 vs. last month" },
                { label: "Active Clients", value: "23", delta: "↑ 3 new this month" },
                { label: "Samples Pending", value: "7", delta: "Due in 3 days" },
                { label: "Pass Rate", value: "98.2%", delta: "↑ 1.4% vs. avg" },
              ].map((s) => (
                <div key={s.label} className="bg-muted/40 border border-border rounded-xl p-3.5">
                  <div className="text-[0.7rem] text-muted-foreground font-medium uppercase tracking-wide">{s.label}</div>
                  <div className="text-2xl font-bold mt-1 text-foreground">{s.value}</div>
                  <div className="text-[0.7rem] text-primary mt-0.5">{s.delta}</div>
                </div>
              ))}
            </div>
            {/* Table */}
            <div className="border border-border rounded-xl overflow-hidden">
              <div className="grid grid-cols-5 px-3.5 py-2.5 border-b border-border text-[0.68rem] uppercase tracking-wider text-muted-foreground font-semibold bg-muted/30">
                <span>Sample ID</span><span>Client / Location</span><span>Test Type</span><span>Collected</span><span>Status</span>
              </div>
              {[
                { id: "EM-2026-0482", client: "RxPlus Pharmacy", test: "USP 797 EM", date: "Apr 07", status: "Pass", color: "bg-green-50 text-green-600" },
                { id: "EM-2026-0481", client: "ClearMed Comp", test: "USP 797 EM", date: "Apr 07", status: "Pending", color: "bg-yellow-50 text-yellow-600" },
                { id: "EM-2026-0479", client: "Summit Hospital", test: "USP 797 EM", date: "Apr 06", status: "Review", color: "bg-blue-50 text-blue-600" },
                { id: "EM-2026-0477", client: "PureLife Labs", test: "USP 797 EM", date: "Apr 05", status: "Pass", color: "bg-green-50 text-green-600" },
              ].map((r) => (
                <div key={r.id} className="grid grid-cols-5 px-3.5 py-2.5 border-b border-border last:border-b-0 text-[0.78rem] items-center">
                  <span className="font-medium text-[0.75rem]">{r.id}</span>
                  <span className="text-muted-foreground text-[0.75rem]">{r.client}</span>
                  <span className="text-[0.75rem]">{r.test}</span>
                  <span className="text-muted-foreground text-[0.72rem]">{r.date}</span>
                  <span className={`inline-flex w-fit px-2.5 py-0.5 rounded-full text-[0.68rem] font-semibold ${r.color}`}>{r.status}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  </section>
);

export default HeroSection;
