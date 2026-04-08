import AnimatedSection from "../AnimatedSection";
import { partners } from "@/constants/partners";

const getInitials = (name: string) =>
  name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase())
    .join("");

const LogosSection = () => (
  <div className="py-14 px-6 border-y border-border">
    <AnimatedSection>
      <div className="text-center text-xs uppercase tracking-widest text-muted-foreground font-medium mb-8">
        {partners.trustedByHeadline}
      </div>

      <div className="relative max-w-[1100px] mx-auto overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent" />

        <div className="flex w-max animate-marquee">
          {[...partners.list, ...partners.list].map((p, idx) => (
            <div key={`${p.id}-${idx}`} className="flex items-center gap-3 px-6 py-2">
              <div className="h-9 w-9 rounded-full border border-border bg-muted/40 flex items-center justify-center text-[0.7rem] font-semibold text-foreground/60">
                {getInitials(p.name)}
              </div>
              <div className="text-sm sm:text-base font-semibold text-foreground/40 hover:text-foreground/60 transition-colors whitespace-nowrap tracking-tight">
                {p.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  </div>
);

export default LogosSection;
