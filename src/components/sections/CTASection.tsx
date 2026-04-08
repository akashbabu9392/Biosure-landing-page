import { ArrowRight } from "lucide-react";
import AnimatedSection from "../AnimatedSection";

const CTASection = () => (
  <section className="py-24 px-6">
    <div className="container">
      <AnimatedSection>
        <div className="dark-section rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
          {/* Subtle glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[radial-gradient(ellipse,hsl(262_83%_58%/0.15)_0%,transparent_70%)] pointer-events-none" />
          <div className="relative z-10">
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.1] tracking-tight max-w-[600px] mx-auto text-white">
              Start now, no strings attached
            </h2>
            <p className="mt-5 max-w-[480px] mx-auto leading-relaxed text-white/60">
              Integrate complete lab management in minutes. Free for your first users. No credit card required, client portal always included.
            </p>
            <div className="flex gap-3 mt-8 justify-center flex-wrap">
              <a href="#" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-all shadow-lg shadow-primary/25">
                Start building <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg border border-white/15 text-white text-sm font-medium hover:bg-white/5 transition-all">
                Schedule a demo
              </a>
            </div>
            <div className="mt-8 text-[0.78rem] text-white/25">
              14-day free trial · No credit card · Setup in under a day · Cancel anytime
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default CTASection;
