import AnimatedSection from "../AnimatedSection";

const logos = ["RxPlus Pharmacy", "ClearMed Compounding", "Summit Health Labs", "PureLife Analytics", "NovaBio Testing", "CrestPath Labs"];

const LogosSection = () => (
  <div className="py-14 px-6 border-y border-border">
    <AnimatedSection>
      <div className="text-center text-xs uppercase tracking-widest text-muted-foreground font-medium mb-8">
        Trusted by independent labs and compounding pharmacies
      </div>
      <div className="flex gap-12 items-center justify-center flex-wrap">
        {logos.map((l) => (
          <span key={l} className="text-base font-semibold text-foreground/20 hover:text-foreground/40 transition-colors whitespace-nowrap tracking-tight">
            {l}
          </span>
        ))}
      </div>
    </AnimatedSection>
  </div>
);

export default LogosSection;
