import AnimatedSection from "../AnimatedSection";
import PremiumCard from "@/components/common/PremiumCard";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    desc: "For solo practitioners exploring BioSure.",
    features: ["1 lab user", "1 client company", "10 reports/month", "5 CoC forms/month", "1 GB storage", "Unlimited portal users"],
    cta: "Get started free",
    filled: false,
  },
  {
    name: "Starter",
    price: "$99",
    period: "per user / month",
    desc: "Small labs getting started with digital workflows.",
    features: ["Up to 5 lab users", "Up to 15 client companies", "Unlimited reports & CoC", "25 GB storage", "Scheduling & calendar", "Historical trending", "Real-time notifications", "Unlimited portal users"],
    cta: "Start 14-day trial",
    filled: false,
  },
  {
    name: "Professional",
    price: "$149",
    period: "per user / month",
    desc: "Growing labs that need full features and scale.",
    features: ["Up to 25 lab users", "Unlimited clients", "100 GB storage", "Template builder", "Advanced analytics", "API access & webhooks", "Priority support", "Billing & invoicing"],
    cta: "Start 14-day trial",
    filled: true,
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "contact sales",
    desc: "Large labs, networks, hospitals with compliance mandates.",
    features: ["Unlimited users", "SSO / SAML", "White-label branding", "Custom integrations", "Multi-lab hierarchy", "Dedicated account manager", "ISO 17025 / 21 CFR", "Phone + Slack support"],
    cta: "Contact sales",
    filled: false,
  },
];

const PricingSection = () => (
  <section id="pricing" className="py-24 px-6">
    <div className="container">
      <AnimatedSection className="text-center max-w-[600px] mx-auto">
        <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.1] tracking-tight">
          Simple, transparent pricing
        </h2>
        <p className="mt-4 text-base text-muted-foreground">
          Client portal access is always free. You only pay for lab users. 60–70% below enterprise LIMS pricing.
        </p>
      </AnimatedSection>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-14">
        {plans.map((p, i) => (
          <AnimatedSection key={p.name} delay={i * 0.08}>
            <PremiumCard
              hoverLiftY={-4}
              enableSpotlight={!p.featured}
              spotlightColor="rgba(88, 101, 242, 0.10)"
              className={`bg-background border rounded-2xl p-7 relative transition-all h-full flex flex-col ${
                p.featured
                  ? "border-primary shadow-lg shadow-primary/10"
                  : "border-border hover:border-foreground/20 hover:shadow-md"
              }`}
            >
              {p.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-[0.68rem] font-bold px-3 py-0.5 rounded-full whitespace-nowrap">
                  Most Popular
                </span>
              )}
              <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{p.name}</div>
              <div className="text-4xl font-bold mt-3 mb-1 text-foreground">
                {p.price}
              </div>
              <div className="text-xs text-muted-foreground mb-5">{p.period}</div>
              <div className="text-sm text-muted-foreground leading-relaxed mb-5 pb-5 border-b border-border">{p.desc}</div>
              <ul className="flex flex-col gap-2.5 mb-6 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground leading-snug">
                    <span className="text-primary font-bold shrink-0">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-2.5 rounded-lg text-sm font-semibold transition-all ${
                  p.filled
                    ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-md shadow-primary/20"
                    : "bg-muted text-foreground hover:bg-muted/80 border border-border"
                }`}
              >
                {p.cta}
              </button>
            </PremiumCard>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection delay={0.3} className="mt-8 text-center text-sm text-muted-foreground">
        <strong className="text-foreground">Early Adopter Offer:</strong> First 50 paying customers get 25% off for 12 months. Annual saves ~10%. Non-profits: 30% discount.
      </AnimatedSection>
    </div>
  </section>
);

export default PricingSection;
