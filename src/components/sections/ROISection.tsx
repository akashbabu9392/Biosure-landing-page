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
  <section className="relative overflow-hidden py-24">
    {/* FULL BLEED LAYER (premium panel, different internal layout vs Features) */}
    <div className="relative w-full">
      <div className="premium-panel-bleed">
        <div className="premium-panel">
          <div className="premium-panel__surface dark-section">
            <div className="max-w-[1200px] mx-auto px-6 py-12 sm:py-14 md:py-16">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
                <AnimatedSection className="lg:col-span-7">
                  <div className="text-center lg:text-left">
                    <div className="text-xs uppercase tracking-widest text-white/55 mb-4">ROI calculator</div>
                    <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.1] tracking-tight text-white/95">
                      BioSure pays for itself <span className="text-gradient">in the first month</span>
                    </h2>
                    <p className="mt-4 text-base leading-relaxed text-white/55 max-w-[58ch] mx-auto lg:mx-0">
                      For a typical 5-person lab, the hours saved on manual report generation and client communication alone exceed the cost of BioSure by 3–5×.
                    </p>
                  </div>
                </AnimatedSection>

                <AnimatedSection className="lg:col-span-5" delay={0.08}>
                  <div className="premium-card rounded-2xl p-6">
                    <div className="flex items-end justify-between gap-4">
                      <div>
                        <div className="text-xs uppercase tracking-wider text-white/55">Average ROI</div>
                        <div className="mt-2 text-4xl font-bold text-primary leading-none">5×</div>
                      </div>
                      <div className="text-right text-sm text-white/55 leading-relaxed">
                        <div className="text-white/85 font-semibold">Typical 5‑person lab</div>
                        $27k–$47k/year recovered
                      </div>
                    </div>
                    <div className="mt-5 grid grid-cols-3 gap-3">
                      {[
                        { label: "Reports/mo", value: "48" },
                        { label: "Hours saved", value: "96–144" },
                        { label: "Payback", value: "< 30d" },
                      ].map((s) => (
                        <div key={s.label} className="rounded-xl border border-white/[0.06] bg-white/[0.02] px-3 py-2.5">
                          <div className="text-[0.68rem] uppercase tracking-wider text-white/45">{s.label}</div>
                          <div className="mt-1 text-sm font-semibold text-white/85">{s.value}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </AnimatedSection>
              </div>

              <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-6">
                <AnimatedSection className="lg:col-span-7">
                  <div className="premium-card rounded-2xl overflow-hidden">
                    <div className="grid grid-cols-3 border-b border-white/[0.08] bg-white/[0.03]">
                      <div className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-white/70">Cost Category</div>
                      <div className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-center text-red-300">Manual</div>
                      <div className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-center text-primary">BioSure</div>
                    </div>
                    {roiRows.map((r) => (
                      <div
                        key={r.label}
                        className={`grid grid-cols-3 border-b border-white/[0.06] last:border-b-0 ${r.bold ? "bg-white/[0.03]" : ""}`}
                      >
                        <div className="px-4 py-3 text-sm">
                          <span className={r.bold ? "font-bold text-white/90" : "font-medium text-white/85"}>{r.label}</span>
                          {r.sub && <span className="block text-[0.7rem] text-white/45">{r.sub}</span>}
                        </div>
                        <div className={`px-4 py-3 text-sm text-center ${r.bold ? "font-bold text-red-300" : "text-red-300"}`}>{r.manual}</div>
                        <div className={`px-4 py-3 text-sm text-center ${r.bold ? "font-bold text-primary" : "text-primary"}`}>{r.biosure}</div>
                      </div>
                    ))}
                  </div>
                  <div className="text-[0.7rem] text-white/45 mt-2">* Includes $8,940/yr Professional plan (5 users) + reduced data entry</div>
                </AnimatedSection>

                <AnimatedSection className="lg:col-span-5" delay={0.12}>
                  <div className="grid grid-cols-1 gap-4">
                    <div className="premium-card rounded-2xl p-6">
                      <div className="text-xs uppercase tracking-wider text-white/55 mb-1">What you get back</div>
                      <div className="text-sm text-white/55">Time, clarity, and inspection confidence — without extra headcount.</div>
                    </div>
                    <div className="premium-card rounded-2xl p-6">
                      <div className="flex flex-col gap-5">
                        {benefits.map((b) => (
                          <div key={b.title} className="flex items-start gap-4">
                            <div className="w-10 h-10 shrink-0 rounded-xl bg-primary/15 flex items-center justify-center text-primary">
                              <b.icon className="w-5 h-5" aria-hidden="true" />
                            </div>
                            <div>
                              <div className="text-sm font-semibold mb-0.5 text-white/90">{b.title}</div>
                              <div className="text-sm text-white/55">{b.desc}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ROISection;
