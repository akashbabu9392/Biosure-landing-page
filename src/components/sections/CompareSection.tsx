import AnimatedSection from "../AnimatedSection";

const rows = [
  { feature: "USP 797 Purpose-Built Workflows", biosure: "✓", qbench: "Generic", labware: "—" },
  { feature: "Integrated Client Portal", biosure: "✓ Free", qbench: "—", labware: "—" },
  { feature: "One-Click PDF Report Engine", biosure: "✓", qbench: "✓", labware: "Add-on" },
  { feature: "Real-Time Notifications", biosure: "✓", qbench: "Email only", labware: "—" },
  { feature: "Historical Trending (z-scores)", biosure: "✓", qbench: "Basic", labware: "✓" },
  { feature: "Starting Price", biosure: "$99/user/mo", qbench: "$275/user/mo", labware: "$7,900+" },
  { feature: "Time to Go Live", biosure: "1–3 days", qbench: "2–4 weeks", labware: "6–18 months" },
  { feature: "Cloud Native", biosure: "✓", qbench: "✓", labware: "Optional" },
];

const getCellClass = (val: string) => {
  if (val === "✓" || val === "✓ Free") return "text-primary font-semibold";
  if (val === "—") return "text-foreground/20";
  if (["Generic", "Basic", "Add-on", "Email only", "Optional"].includes(val)) return "text-yellow-600 text-xs font-semibold";
  if (val.includes("$275") || val.includes("$7,900") || val.includes("6–18")) return "text-destructive font-semibold";
  if (val.includes("$99") || val.includes("1–3")) return "text-primary font-bold";
  return "text-muted-foreground";
};

const CompareSection = () => (
  <section id="compare" className="py-24 px-6">
    <div className="container">
      <AnimatedSection className="text-center max-w-[600px] mx-auto">
        <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.1] tracking-tight">
          Why labs choose <span className="text-gradient">BioSure</span>
        </h2>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          Enterprise LIMS cost 5–10× more and take months. Spreadsheets don't scale. BioSure is purpose-built, affordable, and live in days.
        </p>
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <div className="mt-14 border border-border rounded-2xl overflow-hidden bg-background">
          <div className="grid grid-cols-4 bg-muted/50 border-b border-border">
            <div className="px-5 py-4 text-sm font-semibold text-muted-foreground text-left">Feature</div>
            <div className="px-5 py-4 text-sm font-semibold text-primary text-center bg-primary/[0.06] border-x border-primary/15">BioSure</div>
            <div className="px-5 py-4 text-sm font-semibold text-muted-foreground text-center">QBench</div>
            <div className="px-5 py-4 text-sm font-semibold text-muted-foreground text-center hidden md:block">LabWare</div>
          </div>
          {rows.map((r) => (
            <div key={r.feature} className="grid grid-cols-4 border-b border-border last:border-b-0 hover:bg-muted/30 transition-colors">
              <div className="px-5 py-3.5 text-sm font-medium">{r.feature}</div>
              <div className={`px-5 py-3.5 text-sm text-center bg-primary/[0.03] border-x border-primary/10 ${getCellClass(r.biosure)}`}>{r.biosure}</div>
              <div className={`px-5 py-3.5 text-sm text-center ${getCellClass(r.qbench)}`}>{r.qbench}</div>
              <div className={`px-5 py-3.5 text-sm text-center hidden md:block ${getCellClass(r.labware)}`}>{r.labware}</div>
            </div>
          ))}
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default CompareSection;
