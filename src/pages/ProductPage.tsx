import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";

const products = [
  {
    slug: "sample-management",
    title: "Sample Management",
    subtitle: "Chain of Custody & Sample Tracking",
    desc: "Create, submit, and track chain-of-custody forms electronically. Every sample is tracked from submission through result entry with a complete audit trail.",
    features: [
      { title: "Digital CoC Forms", desc: "Replace paper chain-of-custody with smart digital forms that auto-populate client, location, and media lot data." },
      { title: "Sample Lifecycle Tracking", desc: "Track every sample from intake to report delivery with real-time status updates and full audit trails." },
      { title: "Incubation & CFU Entry", desc: "Lab technicians enter incubation data, CFU counts, and organism identifications directly from the bench." },
      { title: "Plate Image Upload", desc: "Capture and attach plate images directly to sample records for complete documentation." },
      { title: "Bulk Operations", desc: "Process multiple samples simultaneously with batch entry and bulk status updates." },
      { title: "Audit Trail", desc: "Every action is logged with timestamps, user IDs, and change details for regulatory compliance." },
    ],
  },
  {
    slug: "reporting",
    title: "Reporting Engine",
    subtitle: "One-Click Professional PDF Reports",
    desc: "Generate professional lab reports instantly — complete with organism IDs, plate images, floor plans, and historical trending.",
    features: [
      { title: "One-Click Generation", desc: "Review results and click Generate. A professional PDF report is created in seconds." },
      { title: "Floor Plan Integration", desc: "Include facility floor plans with sampling location markers for clear visual documentation." },
      { title: "Historical Trending Charts", desc: "Automatically include trending data and z-score analysis in every report." },
      { title: "Electronic Signatures", desc: "Built-in e-signature support for lab directors and quality managers." },
      { title: "Custom Templates", desc: "Build unlimited report templates tailored to different clients or facility types." },
      { title: "Batch Report Generation", desc: "Generate reports for multiple clients or sampling events in a single operation." },
    ],
  },
  {
    slug: "client-portal",
    title: "Client Portal",
    subtitle: "Self-Service Portal — Always Free",
    desc: "Your pharmacy and facility clients get their own self-service portal to submit CoC forms, access reports, and track sample status.",
    features: [
      { title: "Self-Service CoC Submission", desc: "Clients submit chain-of-custody forms directly through their portal." },
      { title: "Real-Time Report Access", desc: "Clients view and download reports the moment they're approved." },
      { title: "Status Tracking", desc: "Real-time visibility into sample progress from intake through report delivery." },
      { title: "Comment & Communication", desc: "Clients leave comments and communicate directly within the platform." },
      { title: "Multi-Location Support", desc: "Manage multiple facilities and sampling locations from a single client account." },
      { title: "Always Free", desc: "Client portal access is free forever — unlimited users, no hidden costs." },
    ],
  },
  {
    slug: "analytics",
    title: "Analytics",
    subtitle: "Historical Trending & Z-Score Analysis",
    desc: "Statistical analysis with z-scores surfaces contamination patterns across sampling events before they become action-level excursions.",
    features: [
      { title: "Z-Score Analysis", desc: "Automatically calculate z-scores across sampling events to identify statistical outliers." },
      { title: "Pattern Detection", desc: "Surface patterns across locations, time periods, and organism types before they become problems." },
      { title: "Historical Trending", desc: "Track CFU counts and organism identifications over time with interactive charts." },
      { title: "Action Level Alerts", desc: "Automatic alerts when results approach or exceed action levels." },
      { title: "Custom Dashboards", desc: "Build custom analytics views for different stakeholders." },
      { title: "Export & Integration", desc: "Export data in CSV, PDF, or via API for integration with other systems." },
    ],
  },
];

interface ProductPageProps {
  slug: string;
}

const ProductPage = ({ slug }: ProductPageProps) => {
  const product = products.find((p) => p.slug === slug) || products[0];

  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-32 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.04] via-transparent to-transparent pointer-events-none" />
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-xs font-medium text-primary mb-6"
        >
          Product
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[clamp(2.5rem,5vw,4rem)] font-bold leading-[1.05] tracking-tight max-w-[800px] mx-auto"
        >
          {product.title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-2 text-lg text-primary font-medium"
        >
          {product.subtitle}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 max-w-[560px] mx-auto text-muted-foreground leading-relaxed"
        >
          {product.desc}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex gap-3 mt-8 justify-center"
        >
          <a href="#" className="inline-flex items-center gap-2 px-7 py-3 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-all shadow-md shadow-primary/25">
            Start free trial <ArrowRight className="w-4 h-4" />
          </a>
          <a href="#" className="inline-flex items-center gap-2 px-7 py-3 rounded-lg border border-border text-foreground text-sm font-medium hover:bg-muted transition-all">
            Learn more
          </a>
        </motion.div>
      </section>

      {/* Features Grid */}
      <section className="py-24 px-6 bg-muted/30 border-y border-border">
        <div className="container">
          <AnimatedSection className="text-center max-w-[600px] mx-auto mb-14">
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.1] tracking-tight">
              Everything you need
            </h2>
            <p className="mt-4 text-muted-foreground">
              Purpose-built features designed for environmental monitoring laboratories.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {product.features.map((f, i) => (
              <AnimatedSection key={f.title} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -3 }}
                  className="bg-background border border-border rounded-2xl p-7 group relative overflow-hidden h-full transition-all hover:shadow-md"
                >
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-primary/50 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <h3 className="text-base font-semibold mb-2">{f.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center">
        <AnimatedSection className="container">
          <div className="dark-section rounded-3xl p-12 md:p-16 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-[radial-gradient(ellipse,hsl(262_83%_58%/0.15)_0%,transparent_70%)] pointer-events-none" />
            <div className="relative z-10">
              <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.1] tracking-tight max-w-[600px] mx-auto text-white">
                Ready to get started with {product.title}?
              </h2>
              <p className="mt-4 text-white/50 max-w-[480px] mx-auto">
                Start your free trial today. No credit card required.
              </p>
              <div className="flex gap-3 mt-8 justify-center">
                <a href="#" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-all shadow-lg shadow-primary/25">
                  Start free trial <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </Layout>
  );
};

export default ProductPage;
