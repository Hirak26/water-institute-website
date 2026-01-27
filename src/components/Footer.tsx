import {
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  Instagram,
  ExternalLink,
} from "lucide-react";
import { useLocation } from "react-router";
import { useMemo } from "react";

type FooterLink = { label: string; href: string };
type SocialLink = {
  label: string;
  href?: string; // if missing, it won't show
  icon: React.ComponentType<{ className?: string }>;
  external?: boolean;
};

export function Footer() {
  const location = useLocation();
  const year = new Date().getFullYear();

  const aboutText =
    "Purdue University Northwest's center for water research, education, and community engagement.";

  const quickLinks: FooterLink[] = useMemo(
    () => [
      { label: "About Us", href: "/#about" },
      { label: "Research Areas", href: "/#research" },
      { label: "Current Projects", href: "/#projects" },
      { label: "Publications", href: "/#publications" },
      { label: "Partners", href: "/#partners" },
    ],
    []
  );

  const resources: FooterLink[] = useMemo(
    () => [
      { label: "For Students", href: "/#research-programs" },
      { label: "For Researchers", href: "/#research" },
      { label: "For Partners", href: "/#partners" },
      { label: "News & Events", href: "/#newsletter" }, // change if your section id differs
      { label: "Contact", href: "/#contact" },
    ],
    []
  );

  const socials: SocialLink[] = useMemo(
    () => [
      // Fill these with real links when you have them. Missing/empty won't render.
      // { label: "Facebook", href: "https://facebook.com/...", icon: Facebook, external: true },
      // { label: "X (Twitter)", href: "https://x.com/...", icon: Twitter, external: true },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/company/water-institute-pnw/",
        icon: Linkedin,
        external: true,
      },
      // { label: "YouTube", href: "https://youtube.com/...", icon: Youtube, external: true },
      // { label: "Instagram", href: "https://instagram.com/...", icon: Instagram, external: true },
    ],
    []
  );

  const legalLinks: FooterLink[] = useMemo(
    () => [
      // Put real URLs here if you have them:
      // { label: "Privacy Policy", href: "https://www.pnw.edu/privacy-policy/" },
      // { label: "Terms of Use", href: "https://www.pnw.edu/terms-of-use/" },
      // { label: "Accessibility", href: "https://www.pnw.edu/accessibility/" },

      // If you don’t have pages yet, keep them as placeholders:
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Use", href: "#" },
      { label: "Accessibility", href: "#" },
    ],
    []
  );

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith("/#")) return;

    e.preventDefault();
    const id = href.substring(2);

    // If not on home page, go home first
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

  const renderLinks = (links: FooterLink[]) => (
    <ul className="space-y-2 text-sm">
      {links.map((l) => (
        <li key={l.label}>
          <a
            href={l.href}
            onClick={(e) => scrollToSection(e, l.href)}
            className="text-gray-400 hover:text-[#CFB991] transition-colors"
          >
            {l.label}
          </a>
        </li>
      ))}
    </ul>
  );

  return (
    <footer className="bg-[#1a1a1a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-lg mb-4">Water Institute</h3>
            <p className="text-gray-400 text-sm">{aboutText}</p>

            {/* Back to top */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="mt-4 inline-flex items-center gap-2 text-sm text-gray-300 hover:text-[#CFB991] transition-colors"
            >
              Back to top <span aria-hidden>↑</span>
            </button>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg mb-4">Quick Links</h3>
            {renderLinks(quickLinks)}
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg mb-4">Resources</h3>
            {renderLinks(resources)}
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-lg mb-4">Connect With Us</h3>

            <div className="flex gap-4 mb-4 flex-wrap">
              {socials
                .filter((s) => !!s.href)
                .map((s) => {
                  const Icon = s.icon;
                  const isExternal = s.external ?? s.href!.startsWith("http");
                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noopener noreferrer" : undefined}
                      aria-label={s.label}
                      className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#CFB991] transition-colors"
                      title={s.label}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
            </div>

            <p className="text-gray-400 text-sm">
              Follow us for the latest updates on water research and events.
            </p>

            {/* Optional: quick external link */}
            <a
              href="https://www.pnw.edu/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm text-gray-300 hover:text-[#CFB991] transition-colors"
            >
              Visit PNW <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>&copy; {year} Purdue University Northwest. All rights reserved.</p>

            <div className="flex gap-6 flex-wrap justify-center">
              {legalLinks.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="hover:text-[#CFB991] transition-colors"
                  target={l.href.startsWith("http") ? "_blank" : undefined}
                  rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
