import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Features", href: "/#features" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Customers", href: "/#testimonials" },
  { label: "Company", href: "/company" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-[900] flex items-center justify-between px-6 md:px-10 h-16 bg-background/90 backdrop-blur-xl border-b border-border">
      <Link to="/">
        <img src="/BiosureLab-logo.svg" alt="BioSureLab" className="h-7 w-auto" />
      </Link>

      {/* Desktop Nav */}
      <ul className="hidden md:flex gap-0.5 items-center">
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
