import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import {
  GraduationCap,
  Users,
  BookOpen,
  Award,
  Lightbulb,
  FlaskConical,
  ExternalLink,
} from "lucide-react";

// ✅ Put these files in: src/assets/
import reeuFlyer from "C:/Users/PNW_checkout/Downloads/Water Institute website/src/assets/REE program.jpg";
import iresFlyer from "C:/Users/PNW_checkout/Downloads/Water Institute website/src/assets/IRES program.jpg";

export function ResearchEducationalProgramSection() {
  const [openImage, setOpenImage] = useState<string | null>(null);

  const currentPrograms = [
    {
      title: "REEU (USDA/NIFA) – Recruiting Undergraduate Researchers",
      badge: "Now Recruiting",
      image: reeuFlyer,
      description:
        "We are currently recruiting undergraduate research students for this program. Please reach out for more information. This program prepares undergraduates through hands-on research, education, and outreach to build a multidisciplinary sustainability workforce at the water–energy–food nexus.",
      links: [
        { label: "Contact Us", href: "#contact" },
      ],
    },
    {
      title: "IRES – Anaerobic Digestion Biotechnology (Canada Research Experience)",
      badge: "Program Highlight",
      image: iresFlyer,
      description:
        "The IRES team on “Anaerobic Digestion Biotechnology” at Purdue University Northwest is looking forward to working with highly motivated undergraduate and graduate research students who will embark on a research journey to Canada to engage in research and experiential learning facilitated by renowned researchers at University of Alberta and Toronto Metropolitan University, with U.S. mentors from Mississippi State University and the University of Vermont. Please see the flyer for more information.",
      links: [
        { label: "Contact Us", href: "#contact" },
      ],
    },
  ];

  const programs = [
    {
      icon: FlaskConical,
      title: "Undergraduate Research Opportunities",
      description:
        "Hands-on research experiences for undergraduate students in bioelectrochemical systems, water quality analysis, and environmental monitoring.",
    },
    {
      icon: GraduationCap,
      title: "Graduate Research Assistantships",
      description:
        "Fully funded graduate positions in cutting-edge research areas including membrane technologies, resource recovery, and cyber-physical systems.",
    },
    {
      icon: Users,
      title: "Collaborative Research Projects",
      description:
        "Industry partnerships and multi-institutional collaborations funded by NSF, USDA, and other federal agencies.",
    },
    {
      icon: BookOpen,
      title: "Workshops & Training Programs",
      description:
        "Professional development workshops on analytical techniques, data analysis, scientific writing, and research methodologies.",
    },
    {
      icon: Lightbulb,
      title: "Innovation & Technology Transfer",
      description:
        "Support for commercialization of research innovations through the Purdue Northwest Office of Technology Commercialization.",
    },
    {
      icon: Award,
      title: "Student Mentorship & Career Development",
      description:
        "One-on-one mentorship, conference presentations, publication support, and preparation for academic and industry careers.",
    },
  ];

  return (
    <section id="research-programs" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl mb-6">
            Research & Educational Programs
          </h2>
          <div className="w-24 h-1 bg-[#CFB991] mx-auto mb-8"></div>
          <p className="text-base sm:text-lg max-w-4xl mx-auto text-gray-700 leading-relaxed">
            The Water Institute is committed to developing the next generation of engineers,
            scientists, and researchers through hands-on training, funded programs, and
            professional development.
          </p>
        </div>

        {/* ✅ Current Programs */}
        <div className="mb-16">
          <div className="mb-6">
            <h3 className="text-2xl sm:text-3xl font-semibold">Current Programs</h3>
            <p className="text-gray-600 mt-2">
              Featured opportunities and active recruitment programs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {currentPrograms.map((p, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-gray-200 overflow-hidden bg-white shadow-sm hover:shadow-lg transition-shadow flex flex-col"
              >
                {/* Image area */}
                <div className="relative bg-gray-50">
                  <div
                    className="h-[320px] sm:h-[380px] md:h-[420px] lg:h-[380px] xl:h-[420px] w-full cursor-pointer group"
                    onClick={() => setOpenImage(p.image)}
                    title="Click to view full size"
                  >
                    <ImageWithFallback
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                  </div>

                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-[#CFB991] text-white shadow">
                      {p.badge}
                    </span>
                  </div>
                </div>

                {/* Text */}
                <div className="p-6 flex flex-col flex-1">
                  <h4 className="text-lg sm:text-xl font-semibold mb-3">{p.title}</h4>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-5">
                    {p.description}
                  </p>

                  {/* Buttons pinned at bottom */}
                  <div className="mt-auto flex flex-wrap gap-3">
                    {p.links.map((l, i) => (
                      <a
                        key={i}
                        href={l.href}
                        target={l.href.startsWith("http") ? "_blank" : undefined}
                        rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className={
                          l.label.toLowerCase().includes("contact")
                            ? "inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#CFB991] text-white hover:bg-[#b8a67d] transition-colors"
                            : "inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 text-gray-800 hover:border-[#CFB991] hover:text-[#1a1a1a] transition-colors"
                        }
                      >
                        {l.label}
                        {l.href.startsWith("http") && <ExternalLink className="w-4 h-4" />}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Existing Program Tiles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-lg border-2 border-gray-200 hover:border-[#CFB991] transition-all group hover:shadow-lg"
            >
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 group-hover:bg-[#CFB991] transition-colors shadow-md">
                <program.icon className="w-8 h-8 text-[#CFB991] group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg sm:text-xl mb-4 font-semibold">{program.title}</h3>
              <p className="text-gray-700 text-sm sm:text-base">{program.description}</p>
            </div>
          ))}
        </div>

        {/* Highlights */}
        <div className="mt-16 bg-[#CFB991] bg-opacity-10 border-2 border-[#CFB991] rounded-lg p-8 md:p-12">
          <div className="text-center">
            <h3 className="text-2xl sm:text-3xl mb-6">Student Research Highlights</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl sm:text-5xl mb-2 text-[#1a1a1a]">10+</div>
                <p className="text-gray-700 font-semibold">Active Research Projects</p>
              </div>
              <div>
                <div className="text-4xl sm:text-5xl mb-2 text-[#1a1a1a]">30+</div>
                <p className="text-gray-700 font-semibold">Publications with Student Authors</p>
              </div>
              <div>
                <div className="text-4xl sm:text-5xl mb-2 text-[#1a1a1a]">70+</div>
                <p className="text-gray-700 font-semibold">Conference Presentations</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-base sm:text-lg text-gray-700 mb-6">
            Interested in joining our research programs? We welcome motivated students passionate about
            water sustainability and environmental engineering.
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-[#CFB991] text-white rounded-lg hover:bg-[#b8a67d] transition-colors"
          >
            Contact Us to Learn More
          </a>
        </div>
      </div>

      {/* ✅ Fullscreen Image Modal */}
      {openImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setOpenImage(null)}
        >
          <div className="relative max-w-6xl max-h-[90vh] w-full">
            <button
              onClick={() => setOpenImage(null)}
              className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition z-10"
              aria-label="Close"
            >
              ✕
            </button>

            <img
              src={openImage}
              alt="Program Flyer"
              className="w-full h-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </section>
  );
}
