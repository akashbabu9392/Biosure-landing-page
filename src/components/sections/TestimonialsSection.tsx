import { motion } from "framer-motion";
import AnimatedSection from "../AnimatedSection";
import { testimonialsContent } from "@/constants/testimonials";

const CompanyMark = ({ company }: { company: string }) => (
  <div className="flex items-center gap-2 text-[0.78rem] font-semibold text-foreground/70">
    <span className="inline-flex h-5 w-5 items-center justify-center rounded-md bg-foreground/10 text-[0.7rem] font-bold text-foreground/70">
      {company.slice(0, 1).toUpperCase()}
    </span>
    <span className="truncate">{company}</span>
  </div>
);

const TestimonialCard = ({
  company,
  quote,
  name,
  role,
  initials,
  variant = "default",
}: {
  company: string;
  quote: string;
  name: string;
  role: string;
  initials: string;
  variant?: "default" | "featured" | "logo";
}) => (
  <motion.div
    whileHover={{
      y: -3,
      boxShadow:
        variant === "featured"
          ? "0 18px 50px rgba(0,0,0,0.18)"
          : variant === "logo"
            ? "0 14px 44px rgba(0,0,0,0.12)"
            : "0 14px 44px rgba(0,0,0,0.12)",
    }}
    className={`rounded-2xl border transition-all h-full hover:-translate-y-[1px] ${
      variant === "featured"
        ? "bg-gradient-to-br from-[#5B5FF6] via-primary to-[#7C3AED] text-primary-foreground border-white/15 shadow-lg shadow-primary/20"
        : variant === "logo"
          ? "bg-background border-border shadow-sm"
          : "bg-background border-border shadow-sm"
    }`}
  >
    <div className={`p-7 flex flex-col h-full ${variant === "logo" ? "gap-5" : ""}`}>
      <div className="flex items-center justify-between gap-4">
        <CompanyMark company={company} />
        <div className={`text-[0.7rem] tracking-widest ${variant === "featured" ? "text-primary-foreground/80" : "text-yellow-500"}`}>★★★★★</div>
      </div>

      {variant === "logo" ? (
        <div className="flex-1">
          <div className="mt-2 text-[1.05rem] sm:text-[1.15rem] font-semibold tracking-tight text-foreground">
            {quote}
          </div>
          <div className="mt-2 text-sm text-muted-foreground leading-relaxed">
            {role}
          </div>
        </div>
      ) : (
        <p
          className={`mt-4 leading-relaxed flex-1 ${
            variant === "featured" ? "text-[1.02rem] sm:text-[1.08rem] text-primary-foreground/92" : "text-sm text-foreground/80"
          }`}
        >
          “{quote}”
        </p>
      )}

      <div className="mt-6 flex items-center justify-between gap-4">
        <div>
          <div className={`text-sm font-semibold ${variant === "featured" ? "text-primary-foreground" : "text-foreground"}`}>{name}</div>
          <div className={`text-xs ${variant === "featured" ? "text-primary-foreground/75" : "text-muted-foreground"}`}>{role}</div>
        </div>
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
            variant === "featured" ? "bg-primary-foreground/15 text-primary-foreground" : "bg-primary/10 text-primary"
          }`}
        >
          {initials}
        </div>
      </div>
    </div>
  </motion.div>
);

const TestimonialsSection = () => (
  <section id="testimonials" className="py-24 px-6">
    <div className="container">
      <AnimatedSection className="text-center max-w-[600px] mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-xs font-medium text-primary mb-5">
          {testimonialsContent.eyebrow}
        </div>
        <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.1] tracking-tight">
          Trusted by startups and the world's <span className="text-gradient">leading labs</span>
        </h2>
        <p className="mt-4 text-base text-muted-foreground">
          {testimonialsContent.subhead}
        </p>
      </AnimatedSection>

      <div className="mt-14 max-w-[1100px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-min">
          <AnimatedSection className="lg:row-span-2" delay={0.06}>
            <TestimonialCard
              company={testimonialsContent.items[2].company}
              quote={testimonialsContent.items[2].quote}
              name={testimonialsContent.items[2].name}
              role={`${testimonialsContent.items[2].role} · ${testimonialsContent.items[2].company}`}
              initials={testimonialsContent.items[2].initials}
              variant="featured"
            />
          </AnimatedSection>

          <AnimatedSection delay={0.12}>
            <TestimonialCard
              company={testimonialsContent.items[0].company}
              quote={testimonialsContent.items[0].quote}
              name={testimonialsContent.items[0].name}
              role={`${testimonialsContent.items[0].role} · ${testimonialsContent.items[0].company}`}
              initials={testimonialsContent.items[0].initials}
            />
          </AnimatedSection>

          <AnimatedSection delay={0.18}>
            <TestimonialCard
              company={testimonialsContent.companyHighlights[0].company}
              quote={testimonialsContent.companyHighlights[0].company}
              name="Customer"
              role={testimonialsContent.companyHighlights[0].blurb}
              initials={testimonialsContent.companyHighlights[0].company.slice(0, 2).toUpperCase()}
              variant="logo"
            />
          </AnimatedSection>

          <AnimatedSection delay={0.24}>
            <TestimonialCard
              company={testimonialsContent.items[1].company}
              quote={testimonialsContent.items[1].quote}
              name={testimonialsContent.items[1].name}
              role={`${testimonialsContent.items[1].role} · ${testimonialsContent.items[1].company}`}
              initials={testimonialsContent.items[1].initials}
            />
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <TestimonialCard
              company={testimonialsContent.companyHighlights[1].company}
              quote={testimonialsContent.companyHighlights[1].company}
              name="Customer"
              role={testimonialsContent.companyHighlights[1].blurb}
              initials={testimonialsContent.companyHighlights[1].company.slice(0, 2).toUpperCase()}
              variant="logo"
            />
          </AnimatedSection>

          <AnimatedSection delay={0.36}>
            <TestimonialCard
              company={testimonialsContent.items[5].company}
              quote={testimonialsContent.items[5].quote}
              name={testimonialsContent.items[5].name}
              role={`${testimonialsContent.items[5].role} · ${testimonialsContent.items[5].company}`}
              initials={testimonialsContent.items[5].initials}
            />
          </AnimatedSection>

          <AnimatedSection delay={0.42}>
            <TestimonialCard
              company={testimonialsContent.items[3].company}
              quote={testimonialsContent.items[3].quote}
              name={testimonialsContent.items[3].name}
              role={`${testimonialsContent.items[3].role} · ${testimonialsContent.items[3].company}`}
              initials={testimonialsContent.items[3].initials}
            />
          </AnimatedSection>

          <AnimatedSection delay={0.48}>
            <TestimonialCard
              company={testimonialsContent.items[4].company}
              quote={testimonialsContent.items[4].quote}
              name={testimonialsContent.items[4].name}
              role={`${testimonialsContent.items[4].role} · ${testimonialsContent.items[4].company}`}
              initials={testimonialsContent.items[4].initials}
            />
          </AnimatedSection>
        </div>
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
