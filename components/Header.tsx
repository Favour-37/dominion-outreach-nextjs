"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import MobileNav from "./MobileNav";

const LOGO_URL =
  "https://res.cloudinary.com/dxiefklmt/image/upload/v1774102552/Dominion_Outreach_ft0cc0.png";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.5, ease: "easeOut" }}
      className={`site-header ${scrolled ? "scrolled" : ""}`}
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <a href="#home" className="flex items-center gap-4">
          <img src={LOGO_URL} alt="Dominion Outreach" className="logo-img" />
          <div className="hidden sm:block">
            <h1 className="logo-title font-bold m-0">Dominion Outreach</h1>
            <p className="logo-scripture m-0 mt-1">
              Who will have all men to be saved and to come to the knowledge of the truth.
            </p>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="nav-link">
              {l.label}
            </a>
          ))}
        </nav>

        <MobileNav />
      </div>
    </motion.header>
  );
}