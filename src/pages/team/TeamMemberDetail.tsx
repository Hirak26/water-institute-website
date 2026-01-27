import { useParams, Link } from "react-router";
import {
  ArrowLeft,
  Mail,
  Linkedin,
  Award,
  BookOpen,
  Users as UsersIcon,
  Globe,
  GraduationCap,
  FileText,
  Github,
} from "lucide-react";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import drGudeImage from "figma:asset/c5472a821b906b204c68eded2e72dfb467e7f09b.png";
import khinImage from "figma:asset/751a1f2c08654e4e0947e26e7ed55648c2c1685f.png";
import hirakImage from "figma:asset/cbd6654067ad0c74c8b8a5f1d617160c997e1d4a.png";
import zubairullahImage from "figma:asset/8eacd3e2c9714cad3de3bd06bcb9970b1b63d433.png";

// All projects data for filtering
const allProjects = [
  {
    id: 1,
    slug: "ion-exchange-membranes",
    title:
      "Effects of Ion Exchange Membranes on Wastewater Treatment through Microbial Fuel Cells (MFCs)",
    team: ["Khin Thandar Tun", "Dr. Veera Gnaneswar Gude"],
  },
  {
    id: 2,
    slug: "bioelectrochemical-recovery-of-bicarbonate-and-phosphorus",
    title:
      "Bioelectrochemical Recovery of Bicarbonate and Phosphorus from Hydroponic Media Integrated with Wastewater Treatment",
    team: ["Khin Thandar Tun", "Dr. Veera Gnaneswar Gude"],
  },
  {
    id: 3,
    slug: "microalgae-assisted-anaerobic-process",
    title:
      "Microalgae assisted anaerobic process for energy positive low-strength municipal wastewater treatment",
    team: [
      "Khin Thandar Tun",
      "Aeneas Robert Hoffman",
      "Dr. Veera Gnaneswar Gude",
    ],
  },
  {
    id: 4,
    slug: "predicting-per-and-polyfluoro-alkyl",
    title:
      "Predicting Per and Polyfluoro-alkyl Substance Uptake by Agricultural Crops Using Machine Learning Tools",
    team: [
      "Shalini Kandlamadugu Madanmohan",
      "Dr. Veera Gnaneswar Gude",
    ],
  },
  {
    id: 5,
    slug: "nutrient-recovery-in-hydroponic",
    title:
      "Nutrient Recovery in Hydroponic Solutions Coupled with Wastewater Polishing via HYBER",
    team: [
      "Khin Thandar Tun",
      "Nachiket Aparajithan Magesh",
      "Dr. Veera Gnaneswar Gude",
    ],
  },
  {
    id: 6,
    slug: "influence-of-water-quality",
    title:
      "Influence of Water Quality Parameters on Lettuce Growth in Deep-Water Culture Hydroponic Systems",
    team: ["Chandlar Burks", "Dr. Veera Gnaneswar Gude"],
  },
  {
    id: 7,
    slug: "cyber-physical-security",
    title:
      "Cyber-Physical Vulnerabilities and Resilience Pathways in Bench-Scale Anaerobic Digestion (W8 Digester)",
    team: ["Hirak Modi", "Dr. Veera Gnaneswar Gude"],
  },
  {
    id: 8,
    slug: "design-operation-and-analysis",
    title:
      "Design, Operation and Analysis of 3D Printed Membrane Capacitive Deionization for Nutrient Recovery and Desalination",
    team: [
      "Zubairullah Khan Mohammed",
      "Dr. Veera Gnaneswar Gude",
    ],
  },
];

const teamData = {
  "dr-veera-gnaneswar-gude": {
    id: 1,
    slug: "dr-veera-gnaneswar-gude",
    name: "Dr. Veera Gnaneswar Gude, ",
    title:
      "Ph.D., P.E., BCEE, D.WRE, F.ASCE, F.EWRI | NiSource-Meyer Charitable Foundation Professor of Energy and the Environment | Director, PNW Water Institute",
    specialization:
      "Energy-Water Nexus, Resource, Sustainable Communities, Sustainable Engineering, Waste water",
    image: drGudeImage,
    email: "vgude@purdue.edu",
    linkedin:
      "https://www.linkedin.com/in/veera-gnaneswar-gude-5a6a3917/",
    googleScholar:
      "https://scholar.google.com/citations?hl=en&user=yv68ozYAAAAJ&view_op=list_works&sortby=pubdate",
    website:
      "https://www.pnw.edu/people/veera-gnaneswar-gude-ph-d-p-e-bcee-d-wre-f-asce-f-ewri/",
    phone: "(219) 989-2636",
    office: "PWRS 211E, Hammond Campus",
    education: [
      {
        degree: "Ph.D. - Environmental Engineering",
        institution: "New Mexico State University",
        year: "2007",
        focus: "Environmental Engineering, Water Resources",
      },
      {
        degree: "M.S. - Environmental Engineering,",
        institution: "New Mexico State University",
        year: "2005",
        focus: "Water Treatment and Desalination",
      },
      {
        degree: "B.S. - Chemical Engineering Technology",
        institution: "Osmania University",
        year: "2000",
      },
    ],
    bio: `Dr. Veera Gnaneswar Gude is the NiSource-Meyer Charitable Foundation Professor of Energy and the Environment and Director of the Purdue University Northwest Water Institute (PNW). He is a distinguished civil and environmental engineer, professional engineer, and board-certified environmental engineer with extensive research and academic leadership experience.

Prof. Gude’s research sits at the intersection of water, energy, and the environment, with a core focus on sustainable and resilient solutions for global water and energy challenges. His work explores water-energy-environmental nexus topics including water desalination, energy-positive wastewater treatment through electrochemical and biological processes, resource recovery from waste streams, renewable energy integration, and waste-to-energy technologies.

He has made significant contributions to advancing resource-efficient technologies for sustainable development and holds multiple U.S. patents in innovative water and energy systems. His recent efforts also consider the design and deployment of resilient renewable energy solutions for remote and disaster-impacted communities.

In addition to his leadership and research achievements, Prof. Gude is widely published in high-impact journals, highly cited in the fields of environmental engineering and sustainable technologies, and recognized internationally for his expertise in desalination, wastewater treatment, and resource recovery.`,
    researchInterests: [
      "Bioelectrochemical Systems for Wastewater Treatment",
      "Microbial Fuel Cells and Energy Recovery",
      "Membrane Technologies and Desalination",
      "Anaerobic Digestion and Biogas Production",
      "Sustainable Water Treatment Processes",
      "Water–Energy–Environment Nexus",
      "Nutrient Recovery and Resource Reclamation",
      "Advanced Oxidation Processes",
      "Desalination and Advanced Water Treatment Processes",
      "Renewable Energy Integration and Environmental Sustainability",
    ],
    selectedPublications: [
      {
        title:
          "MoistViT: A vision transformer model for moisture content prediction of wood chips",
        journal: "Systems and Soft Computing",
        year: "2025",
        link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=yv68ozYAAAAJ&sortby=pubdate&citation_for_view=yv68ozYAAAAJ:Ehil0879vHcC",
      },
      {
        title:
          "A novel 3D-printed Capacitive Deionization Process for Desalination and Nutrient Recovery Applications",
        journal: "MDPI",
        year: "2025",
        link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=yv68ozYAAAAJ&sortby=pubdate&citation_for_view=yv68ozYAAAAJ:nZcligLrVowC",
      },
      {
        title:
          "Developing a Data Warehouse Tool for Analyzing the Water Quality in the Great Lakes",
        journal: "MDPI",
        year: "2025",
        link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=yv68ozYAAAAJ&sortby=pubdate&citation_for_view=yv68ozYAAAAJ:P7Ujq4OLJYoC",
      },
    ],
    awards: [
      "Top-Ranked Global Research Scholar in Desalination - 2024, 2025",
      "Fellow, American Society of Civil Engineers (F.ASCE)",
      "Fellow, Environmental & Water Resources Institute (F.EWRI)",
      "Licensed Professional Engineer (P.E.)",
      "Board Certified Environmental Engineer (BCEE)",
      "Diplomate, Water Resources Engineering (D.WRE)",
    ],
    courses: [
      "Advanced Water Treatment Technologies",
      "Environmental Engineering Design",
      "Water Quality Engineering",
      "Sustainable Energy Systems",
    ],
  },
  "khin-thandar-tun": {
    id: 2,
    slug: "khin-thandar-tun",
    name: "Khin Thandar Tun",
    title: "Graduate Researcher",
    specialization:
      "Water and Wastewater Management, Bioelectrochemical, Bioenergy",
    image: khinImage,
    email: "tunk@pnw.edu",
    linkedin:
      "https://www.linkedin.com/in/khin-thandar-tun-230947161/",
    googleScholar:
      "https://scholar.google.com/citations?hl=en&user=MrTKOKUAAAAJ&view_op=list_works&gmla=APjjwuYFkoxuoVRp2nsFUyn-e92dcaBZytDA2idlgQDLtTYMFbIVj6mahr5ybapMSXxx5YJK0__wOyR2MWGN-1hs",
    cv: "https://drive.google.com/drive/folders/1xL8EzZxUGWVEPQIdq1QtF6aYbNiZnKmm?usp=sharing",
    phone: "(219) 368-9472",
    office: "Schinder Avenue Bulding - G015, Hammond Campus",
    education: [
      {
        degree: "M.S. in Civil Engineering (In Progress)",
        institution: "Purdue University Northwest",
        year: "Expected May 2026",
        focus:
          "Environmental Engineering, Bioelectrochemical Systems, Water and Wastewater Management, Integrated System Optimization",
      },
      {
        degree:
          "Specialist Diploma in Building Information Modeling (BIM)",
        institution: "BCA Academy, Singapore",
        year: "2019",
      },
      {
        degree: "B.S. in Civil Engineering",
        institution: "Technological University, Mandalay",
        year: "2012",
      },
    ],
    bio: `Khin Thandar Tun is a graduate researcher specializing in sustainable wastewater treatment and resource recovery at the intersection of water, energy, and biotechnology. Her research focuses on integrated bioelectrochemical systems (BESs), including microbial fuel cells (MFCs) and algae-assisted systems, to explore how biological and electrochemical processes can be synergistically combined for low-energy treatment, nutrient management, and renewable energy generation.

Through hands-on experimentation and data-driven analysis, Khin investigates how reactor design, operating conditions, and ion-exchange membrane properties influence treatment efficiency and system stability. Beyond her laboratory work, she is passionate about translating scientific insights into practical, scalable solutions, aiming to advance sustainable technologies that support circular water and energy systems.`,
    researchInterests: [
      "Wastewater Treatment and Resource Recovery",
      "Bioelectrochemical Systems",
      "Ion Exchange Membrane Technologies",
      "Nutrient Recovery for Urban Agriculture",
      "Electrochemical Water Treatment Processes",
      "Bio-reactor designs and optimization",
      "Microbiology",
    ],
    selectedPublications: [
      {
        title:
          "Energy-Positive Wastewater Treatment and Nutrient Recovery in a Combined Hydroponics and Microbial Electrochemical System",
        journal:
          "MDPI",
        year: "2025",
        link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=MrTKOKUAAAAJ&citation_for_view=MrTKOKUAAAAJ:d1gkVwhDpl0C",
      },
      {
        title:
          "The Role of Cation and Anion Exchange Membranes on Power Generation and Nutrient Removal in a Microalgae-Assisted Microbial Fuel Cell",
        journal: "MDPI",
        year: "2025",
        link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=MrTKOKUAAAAJ&citation_for_view=MrTKOKUAAAAJ:u-x6o8ySG0sC",
      },
      {
        title:
          "Unraveling the effects of ion exchange membranes on the performance of real wastewater treatment in microbial fuel cells",
        journal: "MDPI",
        year: "2025",
        link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=MrTKOKUAAAAJ&citation_for_view=MrTKOKUAAAAJ:u5HHmVD_uO8C",
      },
    ],
    skills: [
      {
        category: "Research & Analysis",
        items: [
          "Bioelectrochemical systems",
          "Microbial fuel cells",
          "Wastewater treatment",
          "Nutrient recovery",
          "Membrane characterization",
          "Water quality analysis",
          "Statistical analysis",
        ],
      },
      {
        category: "Instrumentation",
        items: [
          "HACH DR6000",
          "HQ440D",
          "TOC-L spectrophotometer",
          "FTIR",
          "SEM",
          "pH & conductivity meter",
        ],
      },
      {
        category: "Software & Tools",
        items: [
          "R",
          "Excel",
          "AutoCAD",
          "BIM",
          "Revit",
          "Navisworks",
          "SketchUp",
          "Microsoft Office Suite",
        ],
      },
    ],
  },
  "hirak-modi": {
    id: 3,
    slug: "hirak-modi",
    name: "Hirak Modi",
    title: "Graduate Research Assistant",
    specialization:
      "Water Security & Infrastructure, Cyber-physical security, AI-driven analytics, and intelligent decision-support systems",
    image: hirakImage,
    email: "modi54@pnw.edu",
    linkedin:
      "https://www.linkedin.com/in/hirak-modi-6a08181b4/",
    github: "https://github.com/Hirak26",
    website: "https://spin-dragon-22457244.figma.site",
    cv: "https://drive.google.com/file/d/10ZtyFcZs3e2FM0I6t7n0Ard30FJi0bs8/view?usp=drive_link",
    phone: "(219) 368-2153",
    office: "Schinder Avenue Bulding - G015, Hammond Campus",
    education: [
      {
        degree: "M.S. in Computer Science (In Progress)",
        institution: "Purdue University Northwest",
        year: "Expected May 2026",
        focus:
          "Water Infrastructure Security, Cyber-Physical Systems",
      },
      {
        degree: "B.Tech. in Computer Science",
        institution: "Indus University",
        year: "2020-2024",
      },
    ],
    bio: `Hirak Modi is a graduate research assistant at the Water Institute, focusing on the intersection of water infrastructure and cybersecurity. His research addresses the emerging challenges of protecting critical water treatment systems from cyber-physical threats.

Currently, Hirak is investigating cyber-physical vulnerabilities in anaerobic digestion systems, examining how digital control systems and automation can be both a benefit and a potential security risk for wastewater treatment facilities. His work aims to develop practical security frameworks and resilience strategies for water infrastructure.

With a background in Computer Science and a growing expertise in cybersecurity, Hirak is uniquely positioned to address the critical need for secure and resilient water systems in an increasingly connected world.`,
    researchInterests: [
      "Cyber-Physical Security in Water Infrastructure",
      "Critical Infrastructure Protection",
      "Anaerobic Digestion and Biogas Systems",
      "SCADA and Control System Security",
      "Resilience Engineering for Water Systems",
      "Threat Modeling and Risk Assessment",
      "Water Treatment Process Optimization",
    ],
    selectedPublications: [],
    skills: [
      {
        category: "Cyber-Physical Systems",
        items: [
          "Cyber-Physical Systems Analysis",
          "Threat Modeling and Security Assessment",
          "Network Security and Monitoring",
          "Data Analytics and Anomaly Detection",
        ],
      },
      {
        category: "Water Infrastructure",
        items: [
          "Anaerobic Digestion Process Control",
          "SCADA System Configuration",
          "Process Instrumentation and Control",
        ],
      },
      {
        category: "Programming Languages",
        items: [
          "Python",
          "SQL",
          "R",
          "Julia",
          "C++",
          "JavaScript",
        ],
      },
      {
        category: "Data Science & ML",
        items: [
          "Pandas",
          "NumPy",
          "scikit-learn",
          "Statsmodels",
          "NLTK",
          "spaCy",
        ],
      },
      {
        category: "Databases",
        items: ["MySQL", "MongoDB"],
      },
      {
        category: "Web Technologies",
        items: ["HTML", "CSS", "LaTeX"],
      },
      {
        category: "Tools & Platforms",
        items: [
          "Jupyter Notebook",
          "Git",
          "Docker",
          "AWS",
          "MS Excel",
          "Power BI",
          "Tableau",
          "Google Colab",
          "JIRA",
          "Figma",
        ],
      },
    ],
  },
  "zubairullah-khan-mohammed": {
    id: 4,
    slug: "zubairullah-khan-mohammed",
    name: "Zubairullah Khan Mohammed",
    title: "Graduate Research Assistant",
    specialization: "Desalination and Reactor Design",
    image: zubairullahImage,
    email: "moham119@pnw.edu",
    linkedin: "https://www.linkedin.com/in/zubairmohammed97/",
    phone: "(331) 277-5965",
    office: "Schinder Avenue Bulding - G015, Hammond Campus",
    education: [
      {
        degree: "M.S. - Mechanical Engineering",
        institution: "Purdue University Northwest",
        year: "December 2025",
      },
      {
        degree: "B.E. - Mechanical Engineering",
        institution: "Osmania University",
        year: "2022",
      },
    ],
    bio: `Zubairullah Khan Mohammed is a Graduate Research Assistant at Purdue University, where he contributes to advanced research in water and wastewater systems, with interestsDesalination and 3D Reactor Design.

Zubairullah’s work reflects a commitment to integrating practical utility experience with academic research, supporting sustainable and resilient solutions in water treatment and environmental engineering. His academic and professional efforts position him as an emerging contributor in the field of water security, critical infrastructure, and environmental systems.`,
    researchInterests: [
      "Water Infrastructure Economics",
      "Water Pricing and Affordability",
      "Cost-Benefit Analysis of Treatment Technologies",
      "Water Policy and Governance",
      "Sustainable Water Resource Management",
      "Economic Impact Assessment",
      "Public-Private Partnerships in Water Sector",
    ],
    selectedPublications: [],
    skills: [
      {
        category: "Technical Skills",
        items: [
          "Wastewater Treatment",
          "Desalination and Reactor Design",
          "Computer-Aided Design (CAD)",
          "Finite Element Analysis (FEA)",
        ],
      },
      {
        category: "Manufacturing",
        items: [
          "Computer Numerical Control",
          "Geometric Dimensioning & Tolerancing",
        ],
      },
      {
        category: "Management",
        items: ["Project Management"],
      },
    ],
  },
};

export function TeamMemberDetail() {
  const { memberId } = useParams<{ memberId: string }>();
  const member = memberId
    ? teamData[memberId as keyof typeof teamData]
    : null;

  if (!member) {
    return (
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl mb-4">
            Team Member Not Found
          </h1>
          <Link
            to="/"
            className="text-[#CFB991] hover:underline"
          >
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  // Filter projects for this team member
  const memberProjects = allProjects
    .filter((project) =>
      project.team.some((teamMember) =>
        teamMember
          .toLowerCase()
          .includes(
            member.name
              .toLowerCase()
              .replace(/,\s*$/, "")
              .trim(),
          ),
      ),
    )
    .slice(0, 3); // Get top 3 projects

  const hasMoreProjects =
    allProjects.filter((project) =>
      project.team.some((teamMember) =>
        teamMember
          .toLowerCase()
          .includes(
            member.name
              .toLowerCase()
              .replace(/,\s*$/, "")
              .trim(),
          ),
      ),
    ).length > 3;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-[#1a1a1a] text-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/#meet-the-team"
            className="inline-flex items-center gap-2 text-[#CFB991] hover:underline mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Team
          </Link>
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden flex-shrink-0 border-4 border-[#CFB991]">
              <ImageWithFallback
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
                style={
                  member.id === 4
                    ? { objectPosition: "center 20%" }
                    : undefined
                }
              />
            </div>
            <div className="flex-1">
              <h1 className="text-3xl sm:text-4xl md:text-5xl mb-4">
                {member.name}
              </h1>
              <p className="text-xl md:text-2xl text-[#CFB991] mb-4">
                {member.title}
              </p>
              <p className="text-lg md:text-xl text-gray-300 mb-6">
                {member.specialization}
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={`mailto:${member.email}`}
                  className="flex items-center gap-2 px-4 py-2 bg-[#CFB991] text-white rounded-lg hover:bg-[#b8a67d] transition-colors text-sm md:text-base"
                >
                  <Mail className="w-4 h-4" />
                  Email
                </a>
                {member.linkedin !== "#" && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors text-sm md:text-base"
                  >
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </a>
                )}
                {member.googleScholar && (
                  <a
                    href={member.googleScholar}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors text-sm md:text-base"
                  >
                    <GraduationCap className="w-4 h-4" />
                    Google Scholar
                  </a>
                )}
                {member.website && (
                  <a
                    href={member.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors text-sm md:text-base"
                  >
                    <Globe className="w-4 h-4" />
                    Website
                  </a>
                )}
                {member.cv && (
                  <a
                    href={member.cv}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors text-sm md:text-base"
                  >
                    <FileText className="w-4 h-4" />
                    CV/Resume
                  </a>
                )}
                {member.github && (
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors text-sm md:text-base"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
          {/* Main Column */}
          <div className="lg:col-span-2 space-y-12">
            {/* Biography */}
            <div>
              <h2 className="text-2xl md:text-3xl mb-6">
                Biography
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                {member.bio
                  .split("\n\n")
                  .map((paragraph, idx) => (
                    <p key={idx} className="mb-4">
                      {paragraph}
                    </p>
                  ))}
              </div>
            </div>

            {/* Research Interests */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <BookOpen className="w-6 h-6 md:w-8 md:h-8 text-[#CFB991]" />
                <h2 className="text-2xl md:text-3xl">
                  Research Interests
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {member.researchInterests.map(
                  (interest, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2"
                    >
                      <div className="w-2 h-2 bg-[#CFB991] rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700 text-sm md:text-base">
                        {interest}
                      </p>
                    </div>
                  ),
                )}
              </div>
            </div>

            {/* Education */}
            <div>
              <h2 className="text-2xl md:text-3xl mb-6">
                Education
              </h2>
              <div className="space-y-6">
                {member.education.map((edu, idx) => (
                  <div
                    key={idx}
                    className="border-l-4 border-[#CFB991] pl-6 py-2"
                  >
                    <h3 className="text-lg md:text-xl mb-1">
                      {edu.degree}
                    </h3>
                    <p className="text-gray-700">
                      {edu.institution}
                    </p>
                    <p className="text-sm text-gray-600">
                      {edu.year}
                    </p>
                    {edu.focus && (
                      <p className="text-sm text-gray-600 mt-2">
                        Focus: {edu.focus}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Publications */}
            {member.selectedPublications &&
              member.selectedPublications.length > 0 && (
                <div>
                  <h2 className="text-2xl md:text-3xl mb-6">
                    Recent Publications
                  </h2>
                  <div className="space-y-4">
                    {member.selectedPublications.map(
                      (pub, idx) => (
                        <div
                          key={idx}
                          className="bg-gray-50 p-4 md:p-6 rounded-lg hover:bg-gray-100 transition-colors"
                        >
                          <h3 className="text-base md:text-lg mb-2">
                            {pub.link ? (
                              <a
                                href={pub.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-[#CFB991] hover:underline"
                              >
                                {pub.title}
                              </a>
                            ) : (
                              pub.title
                            )}
                          </h3>
                          <p className="text-gray-700 mb-2 italic text-sm md:text-base">
                            {pub.journal}
                          </p>
                          <div className="flex items-center gap-4 text-sm text-gray-600">
                            <span>{pub.year}</span>
                            {pub.citations > 0 && (
                              <>
                                <span>•</span>
                                <span className="text-[#CFB991]">
                                  {pub.citations} citations
                                </span>
                              </>
                            )}
                          </div>
                        </div>
                      ),
                    )}
                  </div>
                  {member.googleScholar && (
                    <div className="mt-4">
                      <a
                        href={member.googleScholar}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#CFB991] hover:underline inline-flex items-center gap-2"
                      >
                        View all publications on Google Scholar
                        <GraduationCap className="w-4 h-4" />
                      </a>
                    </div>
                  )}
                </div>
              )}

            {/* Awards & Honors */}
            {member.awards && member.awards.length > 0 && (
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Award className="w-6 h-6 md:w-8 md:h-8 text-[#CFB991]" />
                  <h2 className="text-2xl md:text-3xl">
                    Awards & Honors
                  </h2>
                </div>
                <ul className="space-y-3">
                  {member.awards.map((award, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3"
                    >
                      <div className="w-2 h-2 bg-[#CFB991] rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700 text-sm md:text-base">
                        {award}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg md:text-xl mb-4">
                Contact Information
              </h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-gray-600 mb-1">
                    Email
                  </p>
                  <a
                    href={`mailto:${member.email}`}
                    className="text-[#CFB991] hover:underline text-sm md:text-base break-all"
                  >
                    {member.email}
                  </a>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">
                    Phone
                  </p>
                  <p className="text-gray-700 text-sm md:text-base">
                    {member.phone}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">
                    Office
                  </p>
                  <p className="text-gray-700 text-sm md:text-base">
                    {member.office}
                  </p>
                </div>
              </div>
            </div>

            {/* Projects */}
            {memberProjects.length > 0 && (
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="flex items-center gap-2 mb-4">
                  <UsersIcon className="w-5 h-5 text-[#CFB991]" />
                  <h3 className="text-lg md:text-xl">
                    Projects
                  </h3>
                </div>
                <ul className="space-y-4">
                  {memberProjects.map((project, idx) => (
                    <li
                      key={idx}
                      className="text-gray-700 text-sm"
                    >
                      <Link
                        to={`/projects/${project.slug}`}
                        className="hover:text-[#CFB991] hover:underline block"
                      >
                        {project.title}
                      </Link>
                    </li>
                  ))}
                </ul>
                {hasMoreProjects && (
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <Link
                      to="/#projects"
                      className="text-[#CFB991] hover:underline text-sm inline-flex items-center gap-1"
                    >
                      View all projects
                      <ArrowLeft className="w-4 h-4 rotate-180" />
                    </Link>
                  </div>
                )}
              </div>
            )}

            {/* Skills/Expertise */}
            {member.skills && member.skills.length > 0 && (
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-lg md:text-xl mb-4">
                  Key Skills & Expertise
                </h3>
                <div className="space-y-4">
                  {member.skills.map((skill, idx) =>
                    typeof skill === "string" ? (
                      <div
                        key={idx}
                        className="flex items-start gap-2"
                      >
                        <div className="w-2 h-2 bg-[#CFB991] rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700 text-sm">
                          {skill}
                        </p>
                      </div>
                    ) : (
                      <div key={idx}>
                        <h4 className="text-sm font-semibold text-[#CFB991] mb-2">
                          {skill.category}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {skill.items.map((item, itemIdx) => (
                            <span
                              key={itemIdx}
                              className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    ),
                  )}
                </div>
              </div>
            )}

            {/* Courses Taught */}
            {member.courses && member.courses.length > 0 && (
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-lg md:text-xl mb-4">
                  Courses Taught
                </h3>
                <ul className="space-y-2">
                  {member.courses.map((course, idx) => (
                    <li
                      key={idx}
                      className="text-gray-700 text-sm flex items-start gap-2"
                    >
                      <div className="w-2 h-2 bg-[#CFB991] rounded-full mt-2 flex-shrink-0"></div>
                      <span>{course}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}