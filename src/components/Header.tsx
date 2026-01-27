import { Search, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navigationLinks = [
    { name: "Mission", href: "/#mission" },
    { name: "Research", href: "/#research" },
    { name: "Projects", href: "/#projects" },
    { name: "About", href: "/#about" },
    { name: "Team", href: "/#meet-the-team" },
    { name: "Publications", href: "/#publications" },
    { name: "Programs", href: "/#research-programs" },
    { name: "Partners", href: "/#partners" },
    { name: "Contact", href: "/#contact" },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("/#")) {
      e.preventDefault();
      const id = href.substring(2);
      
      // If we're not on the home page, navigate first
      if (location.pathname !== "/") {
        window.location.href = href;
        return;
      }
      
      // Otherwise, smooth scroll to the section
      const element = document.getElementById(id);
      if (element) {
        const headerOffset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }
  };

  return (
    <header className="bg-[#1a1a1a] text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Header */}
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-[#CFB991] rounded-full flex items-center justify-center">
              <span className="text-[#1a1a1a] text-xs md:text-sm font-bold">PNW</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs md:text-sm">Water Institute</span>
            </div>
          </Link>

          {/* Desktop Navigation - Quick Links */}
          <nav className="hidden lg:flex items-center gap-6">
            <a href="https://www.pnw.edu/" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-[#CFB991] transition-colors">
              About PNW
            </a>
            <button className="p-2 hover:bg-[#2a2a2a] rounded-lg transition-colors">
              <Search className="w-5 h-5" />
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 hover:bg-[#2a2a2a] rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Section Navigation Bar - Desktop */}
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
                <a href="https://www.pnw.edu/" target="_blank" rel="noopener noreferrer" className="block py-2 text-sm hover:text-[#CFB991] transition-colors">
                  About PNW
                </a>
                <button className="flex items-center gap-2 py-2 text-sm hover:text-[#CFB991] transition-colors">
                  <Search className="w-5 h-5" />
                  Search
                </button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}