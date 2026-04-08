import AnimatedSection from "../AnimatedSection";
import { Clock, PhoneOff, ShieldCheck } from "lucide-react";

const roiRows = [
  { label: "Report generation labor", sub: "5 hrs/week × $50/hr", manual: "$13,000/yr", biosure: "$0" },
  { label: "Client communication", sub: "3 hrs/week × $50/hr", manual: "$7,800/yr", biosure: "$0" },
  { label: "Data entry & tracking", sub: "Reduced 75%", manual: "$10,400/yr", biosure: "$2,600/yr" },
  { label: "Compliance risk", sub: "Per audit finding", manual: "$5–25k/yr", biosure: "$0" },
  { label: "Total Annual Cost", sub: "", manual: "~$56,200", biosure: "~$11,500*", bold: true },
];

const benefits = [
  { icon: Clock, title: "2–3 hours saved per report", desc: "Report generation drops from hours to seconds. At 48 reports/month, that's 96–144 hours freed every month." },
  { icon: PhoneOff, title: "Zero status-update calls", desc: "Client portal self-service eliminates the constant \"Is my report ready?\" phone calls and emails." },
  { icon: ShieldCheck, title: "Inspection-ready, always", desc: "Full audit trails and electronic signatures. Walk into any USP 797 inspection with complete confidence." },
];

const ROISection = () => (
  <section className="py-24 px-6 border-y border-border bg-muted/30">
    <div className="container">
      <AnimatedSection className="text-center max-w-[600px] mx-auto">
        <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.1] tracking-tight">
          BioSure pays for itself <span className="text-gradient">in the first month</span>
        </h2>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          For a typical 5-person lab, the hours saved on manual report generation and client communication alone exceed the cost of BioSure by 3–5×.
        </p>
      </AnimatedSection>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mt-14">
        <AnimatedSection>
          <div className="border border-border rounded-2xl overflow-hidden bg-background">
            <div className="grid grid-cols-3 border-b border-border bg-muted/50">
              <div className="px-4 py-3 text-xs font-semibold uppercase tracking-wider">Cost Category</div>
              <div className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-center text-destructive">Manual</div>
              <div className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-center text-primary">BioSure</div>
            </div>
            {roiRows.map((r) => (
              <div key={r.label} className={`grid grid-cols-3 border-b border-border last:border-b-0 ${r.bold ? "bg-muted/30" : ""}`}>
                <div className="px-4 py-3 text-sm">
                  <span className={r.bold ? "font-bold" : "font-medium"}>{r.label}</span>
                  {r.sub && <span className="block text-[0.7rem] text-muted-foreground">{r.sub}</span>}
                </div>
                <div className={`px-4 py-3 text-sm text-center ${r.bold ? "font-bold text-destructive" : "text-destructive"}`}>{r.manual}</div>
                <div className={`px-4 py-3 text-sm text-center ${r.bold ? "font-bold text-primary" : "text-primary"}`}>{r.biosure}</div>
              </div>
            ))}
          </div>
          <div className="text-[0.7rem] text-muted-foreground mt-2">* Includes $8,940/yr Professional plan (5 users) + reduced data entry</div>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div className="bg-primary/5 border border-primary/15 rounded-2xl p-6 flex items-center gap-4 mb-6">
            <span className="text-5xl font-bold text-primary leading-none">5×</span>
            <div className="text-sm text-muted-foreground leading-relaxed">
              <strong className="block text-foreground text-base">Average ROI for a 5-person lab</strong>
              BioSure customers recover $27,000–$47,000/year compared to manual processes.
            </div>
          </div>
          <div className="flex flex-col gap-5">
            {benefits.map((b) => (
              <div key={b.title} className="flex items-start gap-4">
                <div className="w-10 h-10 shrink-0 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <b.icon className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <div className="text-sm font-semibold mb-0.5">{b.title}</div>
                  <div className="text-sm text-muted-foreground">{b.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

export default ROISection;
