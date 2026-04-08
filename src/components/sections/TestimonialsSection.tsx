import { motion } from "framer-motion";
import AnimatedSection from "../AnimatedSection";

const testimonials = [
  {
    quote: "We used to spend an entire Friday afternoon generating monthly EM reports for our 18 pharmacy clients. Now it takes under an hour — and the reports look more professional than anything we produced before.",
    name: "Dr. Sarah Chen",
    role: "Lab Director · Pacific EM Solutions",
    initials: "SC",
  },
  {
    quote: "The client portal is a game-changer. Our pharmacy clients used to call and email constantly asking for reports. Now they just log in and see everything themselves.",
    name: "Marcus Rodriguez",
    role: "Operations Manager · TrueTest Microbiology",
    initials: "MR",
  },
  {
    quote: "After the 2023 USP 797 revision, we needed to formalize our EM program fast. BioSure was live in two days and we walked into our next inspection completely confident.",
    name: "Jennifer Park, PharmD",
    role: "Quality Manager · ClearPath Compounding",
    initials: "JP",
  },
];

const TestimonialsSection = () => (
  <section id="testimonials" className="py-24 px-6">
    <div className="container">
      <AnimatedSection className="text-center max-w-[600px] mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-xs font-medium text-primary mb-5">
          Trusted by startups and enterprises
        </div>
        <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.1] tracking-tight">
          Trusted by startups and the world's <span className="text-gradient">leading labs</span>
        </h2>
        <p className="mt-4 text-base text-muted-foreground">
          Real feedback from lab directors and technicians who left spreadsheets behind.
        </p>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-14">
        {testimonials.map((t, i) => (
          <AnimatedSection key={t.name} delay={i * 0.1}>
            <motion.div
              whileHover={{ y: -3, boxShadow: "0 8px 30px rgba(0,0,0,0.08)" }}
              className="bg-background border border-border rounded-2xl p-7 h-full flex flex-col transition-all"
            >
              <div className="text-yellow-500 text-xs tracking-widest mb-3">★★★★★</div>
              <p className="text-sm leading-relaxed flex-1 mb-5 text-foreground/80">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary">
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
