import { Link } from "react-router-dom";

const footerCols = [
  {
    title: "Product",
    links: [
      { label: "Sample Management", href: "/products/sample-management" },
      { label: "Reporting Engine", href: "/products/reporting" },
      { label: "Client Portal", href: "/products/client-portal" },
      { label: "Analytics", href: "/products/analytics" },
      { label: "Pricing", href: "/#pricing" },
      { label: "Changelog", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", href: "#" },
      { label: "API Reference", href: "#" },
      { label: "USP 797 Guide", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Community", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/company" },
      { label: "Customers", href: "/#testimonials" },
      { label: "Careers", href: "/company" },
      { label: "Contact Sales", href: "#" },
      { label: "Privacy Policy", href: "#" },
    ],
  },
];

const Footer = () => (
  <footer className="border-t border-border pt-14 pb-8 px-6 bg-background">
    <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
      <div>
        <img src="/BiosureLab-logo.svg" alt="BioSureLab" className="h-7 w-auto" />
        <p className="text-sm text-muted-foreground leading-relaxed mt-3 max-w-[220px]">
          The modern LIMS for environmental monitoring laboratories.
        </p>
      </div>
      {footerCols.map((col) => (
        <div key={col.title}>
          <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground mb-4">{col.title}</h4>
          {col.links.map((link) => (
            <Link key={link.label} to={link.href} className="block text-sm text-muted-foreground hover:text-foreground transition-colors mb-2.5">
              {link.label}
            </Link>
          ))}
        </div>
      ))}
    </div>
    <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-center justify-between pt-6 border-t border-border text-xs text-muted-foreground gap-3">
      <span>© 2026 BioSure · All rights reserved</span>
      <span>Built for the labs that keep compounding pharmacies safe</span>
    </div>
  </footer>
);

export default Footer;
