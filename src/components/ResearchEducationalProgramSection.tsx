import { GraduationCap, Users, BookOpen, Award, Lightbulb, FlaskConical } from "lucide-react";

export function ResearchEducationalProgramSection() {
  const programs = [
    {
      icon: FlaskConical,
      title: "Undergraduate Research Opportunities",
      description: "Hands-on research experiences for undergraduate students in bioelectrochemical systems, water quality analysis, and environmental monitoring."
    },
    {
      icon: GraduationCap,
      title: "Graduate Research Assistantships",
      description: "Fully funded graduate positions in cutting-edge research areas including membrane technologies, resource recovery, and cyber-physical systems."
    },
    {
      icon: Users,
      title: "Collaborative Research Projects",
      description: "Industry partnerships and multi-institutional collaborations funded by NSF, USDA, and other federal agencies."
    },
    {
      icon: BookOpen,
      title: "Workshops & Training Programs",
      description: "Professional development workshops on analytical techniques, data analysis, scientific writing, and research methodologies."
    },
    {
      icon: Lightbulb,
      title: "Innovation & Technology Transfer",
      description: "Support for commercialization of research innovations through the Purdue Northwest Office of Technology Commercialization."
    },
    {
      icon: Award,
      title: "Student Mentorship & Career Development",
      description: "One-on-one mentorship, conference presentations, publication support, and preparation for academic and industry careers."
    }
  ];

  return (
    <section id="research-programs" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl mb-6">Research & Educational Programs</h2>
          <div className="w-24 h-1 bg-[#CFB991] mx-auto mb-8"></div>
          <p className="text-base sm:text-lg max-w-4xl mx-auto text-gray-700 leading-relaxed">
            The Water Institute is committed to developing the next generation of environmental engineers, scientists, and researchers through comprehensive educational programs, hands-on research training, and professional development opportunities.
          </p>
        </div>

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

        <div className="mt-16 bg-[#CFB991] bg-opacity-10 border-2 border-[#CFB991] rounded-lg p-8 md:p-12">
          <div className="text-center">
            <h3 className="text-2xl sm:text-3xl mb-6">Student Research Highlights</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl sm:text-5xl mb-2 text-[#1a1a1a]">10+</div>
                <p className="text-gray-700 font-semibold">Active Research Projects</p>
              </div>
              <div>
                <div className="text-4xl sm:text-5xl mb-2 text-[#1a1a1a]">25+</div>
                <p className="text-gray-700 font-semibold">Publications with Student Authors</p>
              </div>
              <div>
                <div className="text-4xl sm:text-5xl mb-2 text-[#1a1a1a]">15+</div>
                <p className="text-gray-700 font-semibold">Conference Presentations</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-base sm:text-lg text-gray-700 mb-6">
            Interested in joining our research program? We welcome motivated students passionate about water sustainability and environmental engineering.
          </p>
          <a 
            href="#contact"
            className="inline-block px-8 py-3 bg-[#CFB991] text-white rounded-lg hover:bg-[#b8a67d] transition-colors"
          >
            Contact Us to Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
