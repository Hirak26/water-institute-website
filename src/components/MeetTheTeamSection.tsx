import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Mail, Linkedin, GraduationCap, Globe, FileText, Github } from "lucide-react";
import { Link } from "react-router";

import drGudeImage from "figma:asset/c5472a821b906b204c68eded2e72dfb467e7f09b.png";
import khinImage from "figma:asset/751a1f2c08654e4e0947e26e7ed55648c2c1685f.png";
import hirakImage from "figma:asset/cbd6654067ad0c74c8b8a5f1d617160c997e1d4a.png";
import zubairullahImage from "figma:asset/8eacd3e2c9714cad3de3bd06bcb9970b1b63d433.png";

type Member = {
  id: number;
  slug: string;
  name: string;
  title: string;
  specialization: string;
  image: string;
  email: string;
  linkedin?: string;
  github?: string;
  website?: string;
  cv?: string;
  googleScholar?: string;
};

function MemberLinksRow({ member }: { member: Member }) {
  return (
    <div className="flex flex-wrap gap-3">
      {/* Email */}
      <a
        href={`mailto:${member.email}`}
        className="p-2 bg-gray-100 rounded-lg hover:bg-[#CFB991] hover:text-white transition-colors"
        title="Send email"
        aria-label="Email"
      >
        <Mail className="w-5 h-5" />
      </a>

      {/* LinkedIn */}
      {member.linkedin && member.linkedin !== "#" && (
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 bg-gray-100 rounded-lg hover:bg-[#CFB991] hover:text-white transition-colors"
          title="LinkedIn profile"
          aria-label="LinkedIn"
        >
          <Linkedin className="w-5 h-5" />
        </a>
      )}

      {/* GitHub */}
      {member.github && (
        <a
          href={member.github}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 bg-gray-100 rounded-lg hover:bg-[#CFB991] hover:text-white transition-colors"
          title="GitHub"
          aria-label="GitHub"
        >
          <Github className="w-5 h-5" />
        </a>
      )}

      {/* Website/Portfolio */}
      {member.website && (
        <a
          href={member.website}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 bg-gray-100 rounded-lg hover:bg-[#CFB991] hover:text-white transition-colors"
          title="Website"
          aria-label="Website"
        >
          <Globe className="w-5 h-5" />
        </a>
      )}

      {/* CV/Resume */}
      {member.cv && (
        <a
          href={member.cv}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 bg-gray-100 rounded-lg hover:bg-[#CFB991] hover:text-white transition-colors"
          title="CV/Resume"
          aria-label="CV/Resume"
        >
          <FileText className="w-5 h-5" />
        </a>
      )}

      {/* Google Scholar */}
      {member.googleScholar && (
        <a
          href={member.googleScholar}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 bg-gray-100 rounded-lg hover:bg-[#CFB991] hover:text-white transition-colors"
          title="Google Scholar"
          aria-label="Google Scholar"
        >
          <GraduationCap className="w-5 h-5" />
        </a>
      )}
    </div>
  );
}

export function MeetTheTeamSection() {
  const professorProfile: Member = {
    id: 1,
    slug: "dr-veera-gnaneswar-gude",
    name: "Dr. Veera Gnaneswar Gude",
    title: "Director, Water Institute",
    specialization:
      "Energy-Water Nexus, Resource, Sustainable Communities, Sustainable Engineering, Wastewater",
    image: drGudeImage,
    email: "vgude@pnw.edu",
    linkedin: "https://www.linkedin.com/in/veera-gnaneswar-gude-5a6a3917/",
    googleScholar:
      "https://scholar.google.com/citations?hl=en&user=yv68ozYAAAAJ&view_op=list_works&sortby=pubdate",
    website:
      "https://www.pnw.edu/people/veera-gnaneswar-gude-ph-d-p-e-bcee-d-wre-f-asce-f-ewri/",
  };

  const studentProfiles: Member[] = [
    {
      id: 2,
      slug: "khin-thandar-tun",
      name: "Khin Thandar Tun",
      title: "Graduate Researcher",
      specialization:
        "Water and Wastewater Management, Bioelectrochemical Systems, Bioenergy",
      image: khinImage,
      email: "tunk@pnw.edu",
      linkedin: "https://www.linkedin.com/in/khin-thandar-tun-230947161/",
      googleScholar:
        "https://scholar.google.com/citations?hl=en&user=MrTKOKUAAAAJ&view_op=list_works",
      cv: "https://drive.google.com/drive/folders/1xL8EzZxUGWVEPQIdq1QtF6aYbNiZnKmm?usp=sharing",
    },
    {
      id: 3,
      slug: "hirak-modi",
      name: "Hirak Modi",
      title: "Graduate Research Assistant",
      specialization:
        "Water Security & Infrastructure, Cyber-physical security, AI-driven analytics, intelligent decision-support systems",
      image: hirakImage,
      email: "modi54@pnw.edu",
      linkedin: "https://www.linkedin.com/in/hirak-modi-6a08181b4/",
      github: "https://github.com/Hirak26", // ✅ lowercase github (important)
      website: "https://spin-dragon-22457244.figma.site",
      cv: "https://drive.google.com/file/d/10ZtyFcZs3e2FM0I6t7n0Ard30FJi0bs8/view?usp=drive_link",
    },
    {
      id: 4,
      slug: "zubairullah-khan-mohammed",
      name: "Zubairullah Khan Mohammed",
      title: "Graduate Research Assistant",
      specialization: "Desalination and Reactor Design",
      image: zubairullahImage,
      email: "moham119@pnw.edu",
      linkedin: "https://www.linkedin.com/in/zubairmohammed97/",
    },
  ];

  return (
    <section id="meet-the-team" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl mb-6">
            The Water Institute Team
          </h2>
          <div className="w-24 h-1 bg-[#CFB991] mx-auto mb-8"></div>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto text-gray-700">
            Researchers and innovators addressing global water challenges through science and technology.
          </p>
        </div>

        {/* Professor Profile */}
        <div className="mb-16">
          <h3 className="text-2xl sm:text-3xl mb-8 text-center">Professor Profile</h3>
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow group">
              <div className="relative w-full h-80 overflow-hidden rounded-t-xl">
                <ImageWithFallback
                  src={professorProfile.image}
                  alt={professorProfile.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <Link
                  to={`/team/${professorProfile.slug}`}
                  className="hover:text-[#CFB991] transition-colors"
                >
                  <h3 className="text-2xl mb-1">{professorProfile.name}</h3>
                </Link>
                <p className="text-[#CFB991] mb-2">{professorProfile.title}</p>
                <p className="text-gray-700 text-sm mb-4">{professorProfile.specialization}</p>

                {/* ✅ All links */}
                <MemberLinksRow member={professorProfile} />
              </div>
            </div>
          </div>
        </div>

        {/* Student Profiles */}
        <div>
          <h3 className="text-2xl sm:text-3xl mb-8 text-center">Student Profiles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {studentProfiles.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow group"
              >
                <div className="relative w-full h-64 overflow-hidden rounded-t-xl">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    style={member.id === 4 ? { objectPosition: "center 20%" } : undefined}
                  />
                </div>
                <div className="p-6">
                  <Link to={`/team/${member.slug}`} className="hover:text-[#CFB991] transition-colors">
                    <h3 className="text-xl mb-1">{member.name}</h3>
                  </Link>
                  <p className="text-[#CFB991] mb-2">{member.title}</p>
                  <p className="text-gray-700 text-sm mb-4">{member.specialization}</p>

                  {/* ✅ All links */}
                  <MemberLinksRow member={member} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
