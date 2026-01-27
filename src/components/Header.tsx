import { Search, Menu, X } from "lucide-react";
import { useState, useEffect, useMemo, useRef } from "react";
import { Link, useLocation } from "react-router";

// ✅ Use relative import (NOT C:/...)
import waterInstituteLogo from "C:/Users/PNW_checkout/Downloads/Water Institute website/src/assets/Water Institute logo.jpg";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const location = useLocation();
  const searchRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  // Close mobile menu when route changes
  useEffect(() => setIsMenuOpen(false), [location]);

  const navigationLinks = useMemo(
    () => [
      { name: "Mission", href: "/#mission" },
      { name: "Research", href: "/#research" },
      { name: "Projects", href: "/#projects" },
      { name: "About", href: "/#about" },
      { name: "Team", href: "/#meet-the-team" },
      { name: "Publications", href: "/#publications" },
      { name: "Programs", href: "/#research-programs" },
      { name: "Partners", href: "/#partners" },
      { name: "Contact", href: "/#contact" },
    ],
    []
  );

  const scrollToSection = (e: React.MouseEvent, href: string) => {
    if (!href.startsWith("/#")) return;

    e.preventDefault();
    const id = href.substring(2);

    // If not on home page, go home first (then browser will jump)
    if (location.pathname !== "/") {
      window.location.href = href;
      return;
    }

    const element = document.getElementById(id);
    if (!element) return;

    const headerOffset = 110;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({ top: offsetPosition, behavior: "smooth" });
  };

  const toggleSearch = () => {
    setIsSearchOpen((v) => !v);
    setQuery("");
  };

  // Auto-focus search input when opened
  useEffect(() => {
    if (isSearchOpen) {
      setTimeout(() => inputRef.current?.focus(), 0);
    }
  }, [isSearchOpen]);

  // Close search when clicking outside
  useEffect(() => {
    const onClick = (ev: MouseEvent) => {
      if (!isSearchOpen) return;
      const target = ev.target as Node;
      if (searchRef.current && !searchRef.current.contains(target)) {
        setIsSearchOpen(false);
        setQuery("");
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [isSearchOpen]);

  // Close search with ESC
  useEffect(() => {
    const onKey = (ev: KeyboardEvent) => {
      if (ev.key === "Escape") {
        setIsSearchOpen(false);
        setQuery("");
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return navigationLinks.filter((l) => l.name.toLowerCase().includes(q));
  }, [query, navigationLinks]);

  return (
    <header className="bg-[#1a1a1a] text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Header */}
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo + Text (click returns to top smoothly) */}
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              if (location.pathname !== "/") {
                window.location.href = "/";
                return;
              }
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-3 hover:opacity-90 transition-opacity"
          >
            <img
              src={waterInstituteLogo}
              alt="PNW Water Institute"
              className="h-10 md:h-12 w-auto object-contain"
            />
            <div className="flex flex-col leading-tight">
              <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold">
                Water Institute
              </span>
              <span className="text-xs sm:text-sm text-gray-300 tracking-wide">
                Purdue University Northwest
              </span>
            </div>
          </a>

          {/* Desktop Quick Links */}
          <nav className="hidden lg:flex items-center gap-3 relative">
            <a
              href="https://www.pnw.edu/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:text-[#CFB991] transition-colors"
            >
              About PNW
            </a>

            {/* Search */}
            <div className="relative" ref={searchRef}>
              <button
                type="button"
                onClick={toggleSearch}
                className="p-2 hover:bg-[#2a2a2a] rounded-lg transition-colors"
                aria-label="Search sections"
              >
                <Search className="w-5 h-5" />
              </button>

              {isSearchOpen && (
                <div className="absolute right-0 mt-2 w-72 bg-white text-gray-900 rounded-xl shadow-xl border border-gray-200 overflow-hidden">
                  <div className="p-3 border-b border-gray-200">
                    <input
                      ref={inputRef}
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      placeholder="Search sections (e.g., Projects)..."
                      className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#CFB991]"
                    />
                    <p className="text-xs text-gray-500 mt-2">
                      Press <span className="font-semibold">Esc</span> to close
                    </p>
                  </div>

                  <div className="max-h-60 overflow-auto">
                    {query.trim() && results.length === 0 && (
                      <div className="px-4 py-3 text-sm text-gray-600">
                        No matches found.
                      </div>
                    )}

                    {(results.length ? results : navigationLinks.slice(0, 6)).map((link) => (
                      <a
                        key={link.name}
                        href={link.href}
                        onClick={(e) => {
                          scrollToSection(e, link.href);
                          setIsSearchOpen(false);
                          setQuery("");
                        }}
                        className="block px-4 py-3 text-sm hover:bg-gray-50 transition-colors"
                      >
                        {link.name}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 hover:bg-[#2a2a2a] rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Open menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Section Navigation Bar (Desktop) */}
        <div className="hidden lg:block border-t border-gray-700">
          <nav className="flex items-center justify-center gap-4 xl:gap-6 py-3 md:py-4 overflow-x-auto">
            {navigationLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-xs md:text-sm hover:text-[#CFB991] transition-colors whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="lg:hidden pb-4 pt-2 border-t border-gray-700">
            <div className="space-y-3">
              {navigationLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    scrollToSection(e, link.href);
                    setIsMenuOpen(false);
                  }}
                  className="block py-2 hover:text-[#CFB991] transition-colors"
                >
                  {link.name}
                </a>
              ))}

              <div className="pt-3 border-t border-gray-700 space-y-3">
                <a
                  href="https://www.pnw.edu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block py-2 text-sm hover:text-[#CFB991] transition-colors"
                >
                  About PNW
                </a>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
