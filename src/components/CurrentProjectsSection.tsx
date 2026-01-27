import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Users } from "lucide-react";
import { Link } from "react-router";
import project1Image from "figma:asset/e455f4355ceb26cf9cff27ffa418bcb4fb050790.png";
import project2Image from "figma:asset/aa8a40833145a45a5fda73daf304a0040c9ed179.png";
import project3Image from "figma:asset/268c275e662dbb94be733307a24adf70ad6dff25.png";
import project4Image from "figma:asset/43aab7abc80b4d30422354d9c3fe2f73020a65eb.png";

export function CurrentProjectsSection() {
  const projects = [
    {
      id: 1,
      slug: "ion-exchange-membranes",
      title:
        "Effects of Ion Exchange Membranes on Wastewater Treatment through Microbial Fuel Cells (MFCs)",
      image: project1Image,
      team: [
        { name: "Khin Thandar Tun", slug: "khin-thandar-tun" },
        { name: "Dr. Veera Gnaneswar Gude", slug: "dr-veera-gnaneswar-gude" }
      ],
    },
    {
      id: 2,
      slug: "bioelectrochemical-recovery-of-bicarbonate-and-phosphorus",
      title:
        "Bioelectrochemical Recovery of Bicarbonate and Phosphorus from Hydroponic Media Integrated with Wastewater Treatment",
      image: project2Image,
      team: [
        { name: "Khin Thandar Tun", slug: "khin-thandar-tun" },
        { name: "Dr. Veera Gnaneswar Gude", slug: "dr-veera-gnaneswar-gude" }
      ],
    },
    {
      id: 3,
      slug: "microalgae-assisted-anaerobic-process",
      title:
        "Microalgae assisted anaerobic process for energy positive low-strength municipal wastewater treatment",
      image: project3Image,
      team: [
        { name: "Khin Thandar Tun", slug: "khin-thandar-tun" },
        { name: "Aeneas Robert Hoffman", slug: "#" },
        { name: "Dr. Veera Gnaneswar Gude", slug: "dr-veera-gnaneswar-gude" }
      ],
    },
    {
      id: 4,
      slug: "predicting-per-and-polyfluoro-alkyl",
      title:
        "Predicting Per and Polyfluoro-alkyl Substance Uptake by Agricultural Crops Using Machine Learning Tools",
      image: project4Image,
      team: [
        { name: "Shalini Kandlamadugu Madanmohan", slug: "#" },
        { name: "Dr. Veera Gnaneswar Gude", slug: "dr-veera-gnaneswar-gude" }
      ],
    },
    {
      id: 5,
      slug: "nutrient-recovery-in-hydroponic",
      title:
        "Nutrient Recovery in Hydroponic Solutions Coupled with Wastewater Polishing via HYBER",
      image: project4Image,
      team: [
        { name: "Khin Thandar Tun", slug: "khin-thandar-tun" },
        { name: "Nachiket Aparajithan Magesh", slug: "#" },
        { name: "Dr. Veera Gnaneswar Gude", slug: "dr-veera-gnaneswar-gude" }
      ],
    },
    {
      id: 6,
      slug: "influence-of-water-quality",
      title:
        "Influence of Water Quality Parameters on Lettuce Growth in Deep-Water Culture Hydroponic Systems",
      image: project4Image,
      team: [
        { name: "Chandlar Burks", slug: "#" },
        { name: "Dr. Veera Gnaneswar Gude", slug: "dr-veera-gnaneswar-gude" }
      ],
    },
    {
      id: 7,
      slug: "cyber-physical-security",
      title:
        "Cyber-Physical Vulnerabilities and Resilience Pathways in Bench-Scale Anaerobic Digestion (W8 Digester)",
      image: project4Image,
      team: [
        { name: "Hirak Modi", slug: "hirak-modi" },
        { name: "Dr. Veera Gnaneswar Gude", slug: "dr-veera-gnaneswar-gude" }
      ],
    },
    {
      id: 8,
      slug: "design-operation-and-analysis",
      title:
        "Design, Operation and Analysis of 3D Printed Membrane Capacitive Deionization for Nutrient Recovery and Desalination",
      image: project4Image,
      team: [
        { name: "Zubairullah Khan Mohammed", slug: "zubairullah-khan-mohammed" },
        { name: "Dr. Veera Gnaneswar Gude", slug: "dr-veera-gnaneswar-gude" }
      ],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl mb-6">
            Research Projects
          </h2>
          <div className="w-24 h-1 bg-[#CFB991] mx-auto mb-8"></div>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto text-gray-700">
            Explore our ongoing research initiatives that are
            making a real-world impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="h-48 overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <Link to={`/projects/${project.slug}`} className="block group">
                  <h3 className="text-xl mb-3 group-hover:text-[#CFB991] transition-colors">
                    {project.title}
                  </h3>
                </Link>
                <div className="flex items-start gap-2 mt-4">
                  <Users className="w-4 h-4 mt-1 flex-shrink-0 text-gray-600" />
                  <div className="flex flex-wrap gap-1 text-sm">
                    {project.team.map((member, idx) => (
                      <span key={idx}>
                        {member.slug !== "#" ? (
                          <Link
                            to={`/team/${member.slug}`}
                            className="text-gray-700 hover:text-[#CFB991] hover:underline transition-colors"
                          >
                            {member.name}
                          </Link>
                        ) : (
                          <span className="text-gray-700">{member.name}</span>
                        )}
                        {idx < project.team.length - 1 && <span className="text-gray-500">, </span>}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}