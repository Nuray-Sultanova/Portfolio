"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, FileText } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (pathname !== "/") return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-50% 0px", threshold: 0 }
    );
    ["about", "projects", "contact"].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [pathname]);

  const navLinks = [
    { name: "About", href: "/#about" },
    { name: "Projects", href: "/#projects" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled ? "py-4 bg-zinc-950/80 backdrop-blur-lg border-b border-white/5" : "py-6 bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="w-10 h-10 flex items-center justify-center rounded-full border border-rose-500/50 bg-rose-500/5 text-rose-500 font-black hover:bg-rose-500 hover:text-black transition-all">
          N
        </Link>

        {/* Desktop Menyu */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-6 text-[11px] font-bold uppercase tracking-widest">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link href={link.href} className={`transition-colors ${activeSection === link.name.toLowerCase() ? "text-rose-500" : "text-zinc-400 hover:text-white"}`}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/#resume" className="px-5 py-2 bg-rose-500 text-white rounded-full text-[11px] font-bold uppercase tracking-widest hover:bg-rose-600 transition-all">
            Resume
          </Link>
        </div>

        {/* Hamburger Düyməsi */}
        <button className="md:hidden text-white transition-transform active:scale-90" onClick={() => setMobileMenu(!mobileMenu)}>
          {mobileMenu ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Kompakt Mobil Menyu */}
      {mobileMenu && (
        <div className="absolute top-full left-0 w-full px-6 py-4 md:hidden">
          <div className="bg-zinc-900/95 border border-white/10 backdrop-blur-2xl rounded-2xl p-6 shadow-2xl flex flex-col gap-5 animate-in slide-in-from-top-4 duration-300">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                onClick={() => setMobileMenu(false)}
                className={`text-sm font-bold uppercase tracking-widest flex items-center justify-between ${
                  activeSection === link.name.toLowerCase() ? "text-rose-500" : "text-zinc-300"
                }`}
              >
                {link.name}
                <ArrowUpRight size={14} className="opacity-50" />
              </Link>
            ))}
            <div className="h-px bg-white/5 my-1" />
            <Link 
              href="/#resume" 
              onClick={() => setMobileMenu(false)}
              className="flex items-center justify-center gap-2 py-3 bg-rose-500 text-white rounded-xl text-xs font-bold uppercase tracking-widest shadow-lg shadow-rose-500/20"
            >
              <FileText size={14} /> Resume
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;