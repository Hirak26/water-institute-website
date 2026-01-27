import { useRef } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Award, BookOpen, Building, Globe, Users, TrendingUp } from "lucide-react";

// ✅ Put your image here: src/assets/lab.jpg
// AboutSection.tsx is in: src/components/AboutSection.tsx
import labImage from "../assets/lab.jpg";

export function AboutSection() {
  // 3D tilt refs + handlers
  const cardRef = useRef<HTMLDivElement | null>(null);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const midX = rect.width / 2;
    const midY = rect.height / 2;

    const rotateY = ((x - midX) / midX) * 8;
    const rotateX = -((y - midY) / midY) * 8;

    el.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(0)`;
  };

  const handleLeave = () => {
    const el = cardRef.current;
    if (!el) return;
    el.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg)";
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl mb-6">About Water Institute</h2>
          <div className="w-24 h-1 bg-[#CFB991] mx-auto mb-8 rounded-full"></div>
        </div>

        {/* About content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* 3D Animated Image Card */}
          <div
            className="relative [perspective:900px]"
            onMouseMove={handleMove}
            onMouseLeave={handleLeave}
          >
            {/* Glow */}
            <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-[#CFB991]/40 via-blue-500/20 to-emerald-400/20 blur-2xl opacity-70 animate-[pulse_3.5s_ease-in-out_infinite]" />

            {/* Card */}
            <div
              ref={cardRef}
              className="relative rounded-2xl overflow-hidden border border-black/10 bg-white shadow-2xl transition-transform duration-150 will-change-transform"
            >
              <ImageWithFallback
                src={labImage}
                alt="PNW Water Institute Research Laboratory"
                className="w-full h-auto max-h-[420px] object-contain bg-black/5"
              />

              {/* Shine overlay */}
              <div className="pointer-events-none absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-200 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.35),transparent_45%)]" />

              {/* Caption */}
              <div className="px-4 py-3 text-sm text-gray-700 border-t border-black/10 bg-white/70">
                PNW Water Institute lab space & experimental platforms
              </div>
            </div>
          </div>

          {/* Text */}
          <div>
            <p className="text-base sm:text-lg text-gray-700 mb-6 leading-relaxed">
              The PNW Water Institute is a multidisciplinary research hub dedicated to addressing complex challenges in
              water and environmental engineering. Led by faculty with expertise spanning civil, environmental,
              chemical, and computational disciplines, the Institute fosters collaboration among researchers, students,
              utilities, government agencies, and industry partners.
            </p>
            <p className="text-base sm:text-lg text-gray-700 mb-6 leading-relaxed">
              Our work spans laboratory-scale experimentation, pilot-scale system development, data-driven modeling,
              and field-relevant analysis. The Institute is actively involved in externally funded research supported
              by agencies such as the National Science Foundation (NSF) and the U.S. Department of Agriculture (USDA),
              as well as in international research collaborations and student training programs.
            </p>
            <p className="text-base sm:text-lg text-gray-700 mb-8 leading-relaxed">
              In addition to research, the Water Institute is committed to workforce development, student mentorship,
              and public engagement. We provide hands-on research opportunities, interdisciplinary training, and
              professional development experiences that prepare students to address emerging challenges in water
              sustainability, environmental protection, and infrastructure resilience.
            </p>
          </div>
        </div>

        {/* Impact */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12 border border-black/5">
          <h3 className="text-2xl sm:text-3xl mb-8 text-center">Our Impact</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#CFB991] rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-lg mb-1 font-semibold">Global Collaboration</h4>
                <p className="text-gray-700 text-sm sm:text-base">
                  International research partnerships and student training programs.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#CFB991] rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-lg mb-1 font-semibold">Externally Funded Research</h4>
                <p className="text-gray-700 text-sm sm:text-base">
                  Supported by NSF, USDA, and other leading agencies.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#CFB991] rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-lg mb-1 font-semibold">Workforce Development</h4>
                <p className="text-gray-700 text-sm sm:text-base">
                  Training the next generation through hands-on research.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#CFB991] rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                <Building className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-lg mb-1 font-semibold">State-of-the-Art Facilities</h4>
                <p className="text-gray-700 text-sm sm:text-base">
                  Laboratory and pilot-scale systems for cutting-edge research.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#CFB991] rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-lg mb-1 font-semibold">Multidisciplinary Team</h4>
                <p className="text-gray-700 text-sm sm:text-base">
                  Faculty and students from diverse engineering disciplines.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#CFB991] rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-lg mb-1 font-semibold">Innovation & Impact</h4>
                <p className="text-gray-700 text-sm sm:text-base">
                  Translating research into practical, scalable solutions.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center max-w-4xl mx-auto">
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed italic">
            Through innovation, collaboration, and impact-driven research, the PNW Water Institute serves as a catalyst
            for sustainable solutions that protect water resources, recover energy and nutrients, and strengthen the
            resilience of water systems worldwide.
          </p>
        </div>
      </div>
    </section>
  );
}
