import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import BiosureLogo from "./BiosureLogo";

const products = [
  { label: "Sample Management", desc: "Chain of custody & sample tracking", href: "/products/sample-management" },
  { label: "Reporting Engine", desc: "One-click PDF report generation", href: "/products/reporting" },
  { label: "Client Portal", desc: "Self-service portal for your clients", href: "/products/client-portal" },
  { label: "Analytics", desc: "Historical trending & z-score analysis", href: "/products/analytics" },
];

const navLinks = [
  { label: "Features", href: "/#features" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Customers", href: "/#testimonials" },
  { label: "Company", href: "/company" },
];

const Navbar = () => {
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-[900] flex items-center justify-between px-6 md:px-10 h-16 bg-background/90 backdrop-blur-xl border-b border-border">
      <Link to="/">
        <BiosureLogo />
      </Link>

      {/* Desktop Nav */}
      <ul className="hidden md:flex gap-0.5 items-center">
        {/* Products dropdown */}
        <li
          className="relative"
          onMouseEnter={() => setProductsOpen(true)}
          onMouseLeave={() => setProductsOpen(false)}
        >
          <button className="flex items-center gap-1 text-muted-foreground hover:text-foreground text-sm font-medium px-3.5 py-1.5 rounded-lg transition-colors">
            Products <ChevronDown className="w-3.5 h-3.5" />
          </button>
          <AnimatePresence>
            {productsOpen && (
              <motion.div
                initial={{ opacity: 0, y: 8, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 8, scale: 0.96 }}
                transition={{ duration: 0.18 }}
                className="absolute top-full left-0 mt-1 w-80 bg-background border border-border rounded-xl shadow-xl overflow-hidden p-2"
              >
                <div className="text-[0.65rem] font-semibold uppercase tracking-wider text-muted-foreground px-3 py-2">Products</div>
                {products.map((p) => (
                  <Link
                    key={p.href}
                    to={p.href}
                    className="flex items-start gap-3 px-3 py-2.5 rounded-lg hover:bg-muted transition-colors group"
                    onClick={() => setProductsOpen(false)}
                  >
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-sm mt-0.5 shrink-0">⚡</div>
                    <div>
                      <div className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">{p.label}</div>
                      <div className="text-xs text-muted-foreground">{p.desc}</div>
                    </div>
                  </Link>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </li>
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              to={link.href}
              className={`text-sm font-medium px-3.5 py-1.5 rounded-lg transition-colors ${
                location.pathname === link.href ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      <div className="hidden md:flex gap-2.5 items-center">
        <Link to="#" className="px-4 py-2 rounded-lg text-foreground text-sm font-medium hover:text-primary transition-colors">
          Sign in
        </Link>
        <Link to="#" className="px-5 py-2 rounded-lg bg-foreground text-background text-sm font-semibold hover:bg-foreground/90 transition-all border border-foreground">
          Start building →
        </Link>
      </div>

      {/* Mobile toggle */}
      <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
        {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-16 left-0 right-0 bg-background border-b border-border p-6 flex flex-col gap-4 md:hidden shadow-lg"
          >
            {products.map((p) => (
              <Link key={p.href} to={p.href} className="text-sm text-muted-foreground hover:text-foreground" onClick={() => setMobileOpen(false)}>
                {p.label}
              </Link>
            ))}
            {navLinks.map((link) => (
              <Link key={link.href} to={link.href} className="text-sm text-muted-foreground hover:text-foreground" onClick={() => setMobileOpen(false)}>
                {link.label}
              </Link>
            ))}
            <Link to="#" className="px-5 py-2.5 rounded-lg bg-foreground text-background text-sm font-semibold text-center">
              Start building →
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
