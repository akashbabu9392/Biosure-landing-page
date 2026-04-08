import { ArrowRight } from "lucide-react";
import AnimatedSection from "../AnimatedSection";

const CTASection = () => (
  <section className="py-24 px-6">
    <div className="container">
      <AnimatedSection>
        <div className="relative overflow-hidden rounded-2xl border border-border bg-background shadow-[0_18px_70px_rgba(15,23,42,0.08)]">
          <div className="pointer-events-none absolute -top-24 left-1/2 h-[320px] w-[760px] -translate-x-1/2 bg-[radial-gradient(ellipse,rgba(88,101,242,0.18)_0%,transparent_70%)] blur-2xl" />
          <div className="pointer-events-none absolute -bottom-28 left-16 h-[260px] w-[520px] bg-[radial-gradient(ellipse,rgba(168,85,247,0.16)_0%,transparent_70%)] blur-2xl" />

          <div className="relative grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center p-8 sm:p-10 lg:p-14">
            <div className="text-left">
              <h2 className="text-[clamp(1.9rem,3.4vw,2.6rem)] font-bold leading-[1.08] tracking-tight text-foreground">
                Start now, <br className="hidden sm:block" />
                no strings attached
              </h2>
              <p className="mt-4 max-w-[46ch] text-sm sm:text-base leading-relaxed text-muted-foreground">
                Integrate complete lab management in minutes. Free for your first users. No credit card required, client portal always included.
              </p>

              <div className="flex gap-3 mt-7 flex-wrap">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-all shadow-md shadow-primary/20"
                >
                  Start building <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right illustration */}
            <div className="relative min-h-[220px] lg:min-h-[260px]">
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_40%_40%,rgba(88,101,242,0.10),transparent_55%)]" />
              <svg
                viewBox="0 0 520 320"
                className="absolute -right-10 -top-12 w-[520px] max-w-none opacity-[0.92]"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient id="ringGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#A855F7" stopOpacity="0.55" />
                    <stop offset="0.45" stopColor="#5865F2" stopOpacity="0.35" />
                    <stop offset="1" stopColor="#FFFFFF" stopOpacity="0.10" />
                  </linearGradient>
                  <linearGradient id="strokeGrad" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0" stopColor="#5865F2" stopOpacity="0.18" />
                    <stop offset="0.5" stopColor="#A855F7" stopOpacity="0.18" />
                    <stop offset="1" stopColor="#000000" stopOpacity="0" />
                  </linearGradient>
                  <filter id="softGlow" x="-40%" y="-40%" width="180%" height="180%">
                    <feGaussianBlur stdDeviation="10" result="blur" />
                    <feColorMatrix
                      in="blur"
                      type="matrix"
                      values="1 0 0 0 0.2  0 1 0 0 0.25  0 0 1 0 0.9  0 0 0 0.45 0"
                      result="glow"
                    />
                    <feMerge>
                      <feMergeNode in="glow" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* Blueprint grid */}
                <g opacity="0.55">
                  <path d="M55 78H460" stroke="url(#strokeGrad)" strokeWidth="1" />
                  <path d="M55 128H460" stroke="url(#strokeGrad)" strokeWidth="1" />
                  <path d="M55 178H460" stroke="url(#strokeGrad)" strokeWidth="1" />
                  <path d="M55 228H460" stroke="url(#strokeGrad)" strokeWidth="1" />
                  <path d="M140 52V276" stroke="url(#strokeGrad)" strokeWidth="1" />
                  <path d="M220 52V276" stroke="url(#strokeGrad)" strokeWidth="1" />
                  <path d="M300 52V276" stroke="url(#strokeGrad)" strokeWidth="1" />
                  <path d="M380 52V276" stroke="url(#strokeGrad)" strokeWidth="1" />
                </g>

                {/* Ring */}
                <g filter="url(#softGlow)">
                  <path
                    d="M320 74a120 120 0 1 0 0 240"
                    fill="none"
                    stroke="url(#ringGrad)"
                    strokeWidth="56"
                    strokeLinecap="round"
                  />
                  <path
                    d="M320 74a120 120 0 0 1 90 42"
                    fill="none"
                    stroke="#ffffff"
                    strokeOpacity="0.25"
                    strokeWidth="56"
                    strokeLinecap="round"
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default CTASection;
