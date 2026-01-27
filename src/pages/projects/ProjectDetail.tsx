import { useParams, Link } from "react-router";
import {
  ArrowLeft,
  Users,
  Download,
  ExternalLink,
} from "lucide-react";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { useState } from "react";
import project1ImagePoster from "figma:asset/e455f4355ceb26cf9cff27ffa418bcb4fb050790.png";
import project2ImagePoster from "figma:asset/aa8a40833145a45a5fda73daf304a0040c9ed179.png";
import project3ImagePoster from "figma:asset/268c275e662dbb94be733307a24adf70ad6dff25.png";
import project4Image from "figma:asset/43aab7abc80b4d30422354d9c3fe2f73020a65eb.png";

const projectsData = {
  "ion-exchange-membranes": {
    id: 1,
    slug: "ion-exchange-membranes",
    title:
      "Effects of Ion Exchange Membranes on Wastewater Treatment",
    image: project4Image,
    poster: project1ImagePoster,
    team: [
      { name: "Khin Thandar Tun", slug: "khin-thandar-tun" },
      { name: "Dr. Veera Gnaneswar Gude", slug: "dr-veera-gnaneswar-gude" }
    ],
    fullDescription: `This project investigates how different ion exchange membranes influence the performance of membrane-driven microbial fuel cells treating low-strength municipal wastewater. It compares cation exchange (CEM), anion exchange (AEM), and bipolar (BPM) membranes to understand how each membrane type affects organic removal, nutrient migration, and electrochemical behavior under identical operating conditions, using real wastewater as the anode feed and deionized water in the cathode chamber. By focusing on low-strength municipal wastewater, the work addresses the challenge of achieving effective treatment and resource recovery without high energy input.
​
The dual-chamber system uses carbon felt electrodes and a centrally placed ion exchange membrane to facilitate ionic transport while maintaining electrochemical balance between anode and cathode. Through replicated experiments and analysis of COD removal, cell voltage, and power density, the project identifies membrane-specific trends in treatment efficiency, peak power output, and system stability, ultimately guiding the selection of membrane configurations that best balance contaminant removal, energy generation, and long-term operational reliability.`,
  },
  "bioelectrochemical-recovery-of-bicarbonate-and-phosphorus": {
    id: 2,
    slug: "bioelectrochemical-recovery-of-bicarbonate-and-phosphorus",
    title:
      "Bioelectrochemical Recovery of Bicarbonate and Phosphorus from Hydroponic Media Integrated with Wastewater Treatment",
    image: project4Image,
    poster: project2ImagePoster,
    team: [
      { name: "Khin Thandar Tun", slug: "khin-thandar-tun" },
      { name: "Dr. Veera Gnaneswar Gude", slug: "dr-veera-gnaneswar-gude" }
    ],
    fullDescription: `This project develops a bioelectrochemical-hydroponic integrated system for phosphorus recovery from municipal wastewater using a three-chamber reactor with cation and anion exchange membranes. It aims to enhance phosphate uptake efficiency by leveraging microbial electrochemistry in the anode to drive nutrient transport, while coupling hydroponic plant growth in the cathode chamber to achieve simultaneous organic removal, phosphorus recovery, and biomass production. The system uses real municipal wastewater as the influent, with experimental monitoring of physicochemical parameters like pH, phosphate, and nitrate correlations across chambers.
​
The design incorporates a central experimental chamber flanked by anode and cathode compartments, each equipped with carbon felt electrodes and hydraulic circulation to optimize mass transfer. Key outcomes include strong positive correlations between physicochemical shifts and phosphorus uptake, as well as superior COD removal performance with hydroponic integration compared to non-integrated systems. This approach advances innovative solutions at the water-energy-food nexus by enabling nutrient recycling for sustainable agriculture while treating wastewater.`,
  },
  "microalgae-assisted-anaerobic-process": {
    id: 3,
    slug: "microalgae-assisted-anaerobic-process",
    title:
      "Microalgae assisted anaerobic process for energy positive low-strength municipal wastewater treatment",
    image: project4Image,
    poster: project3ImagePoster,
    team: [
      { name: "Khin Thandar Tun", slug: "khin-thandar-tun" },
      { name: "Aeneas Robert Hoffman", slug: "#" },
      { name: "Dr. Veera Gnaneswar Gude", slug: "dr-veera-gnaneswar-gude" }
    ],
    fullDescription: `This project evaluates the energy-positive potential of microbial fuel cells (MFCs) for treating low-strength anaerobic municipal wastewater, focusing on how influent characteristics affect organic removal, nutrient transformation, and microbial fuel generation. It employs real wastewater under controlled variations in cathodic lighting to assess performance variability, using cation exchange (CEM) and anion exchange (AEM) membranes in dual-chamber setups. The study reveals how wastewater influent traits influence electrogenic behavior and system efficiency, providing insights into scalable, energy-harvesting wastewater technologies.
​
The reactor design features a two-membrane microbial fuel cell with carbon-based electrodes, enabling precise control of ion exchange during operation. Key findings include comparative results showing organic removal efficiencies across three replicate conditions under CEM and AEM, alongside nutrient removal trends influenced by initial substrate loads. These results demonstrate how membrane-electrode configurations can drive stable, energy-positive treatment, informing practical applications for low-strength wastewater management.`,
  },
  "predicting-per-and-polyfluoro-alkyl": {
    id: 4,
    slug: "predicting-per-and-polyfluoro-alkyl",
    title:
      "Predicting Per and Polyfluoro-alkyl Substance Uptake by Agricultural Crops Using Machine Learning Tools",
    image: project4Image,
    team: [
      { name: "Shalini Kandlamadugu Madanmohan", slug: "#" },
      { name: "Dr. Veera Gnaneswar Gude", slug: "dr-veera-gnaneswar-gude" }
    ],
    fullDescription: `Per- and polyfluoroalkyl substances (PFAS) are persistent environmental contaminants widely detected in agricultural soils and irrigation water, raising concerns about their accumulation in food crops and subsequent human exposure. Due to the complexity of PFAS–soil–plant interactions and the variability across compound types and crop characteristics, accurately predicting PFAS uptake remains a significant challenge.

This project applies machine learning–based regression models to predict PFAS uptake by agricultural crops, quantified using Root Concentration Factors (RCFs). Multiple physicochemical, soil, and crop-related variables—including PFAS concentration, exposure duration, soil organic carbon, pH, and crop biochemical composition—were integrated into the modeling framework. Data preprocessing, feature engineering, model training, and performance evaluation were conducted using multiple regression algorithms to identify the most reliable predictive models.

To enhance model interpretability, feature importance analysis and Local Interpretable Model-Agnostic Explanations (LIME) were employed to quantify the influence of individual variables on PFAS uptake behavior. The results provide mechanistic insights into key drivers of PFAS absorption by plant roots and demonstrate the potential of machine learning tools to support risk assessment, agricultural management, and environmental decision-making related to PFAS contamination.`,
  },
  "nutrient-recovery-in-hydroponic": {
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
    fullDescription: `This project explores nutrient recovery from municipal wastewater via a HYBRID reactor that integrates bioelectrochemical treatment with Lactuca sativa-cultivated cathode for high organic and nutrient removal at low cost. The system processes real wastewater in a batch-operated setup, where the anode handles organic degradation and the LAB-enriched cathode facilitates balanced nutrient uptake by plants, achieving simultaneous pollutant removal and resource valorization. It demonstrates potential for scalable, low-cost solutions leveraging microbial synergies for wastewater valorization.
​
The reactor design incorporates digital multimeters, LED lighting, and hydroponic elements in the cathode chamber to support LAB activity and plant growth. Key findings include polarization and power density curves showing peak performance during operation, alongside comparative efficiencies for organic and nutrient removal across plants, exhibiting superior uptake of target nutrients. This dual-outcome approach establishes robust pollutant removal pathways, reinforcing circular strategies for water, energy, and nutrient management.`,
  },
  "influence-of-water-quality": {
    id: 6,
    slug: "influence-of-water-quality",
    title:
      "Influence of Water Quality Parameters on Lettuce Growth in Deep-Water Culture Hydroponic Systems",
    image: project4Image,
    team: [
      { name: "Chandlar Burks", slug: "#" },
      { name: "Dr. Veera Gnaneswar Gude", slug: "dr-veera-gnaneswar-gude" }
    ],
    fullDescription: `This project investigates how water quality parameters control lettuce performance in a deep-water culture (DWC) hydroponic system over an 11-week growth cycle. It systematically tracks pH, electrical conductivity, dissolved solids, nutrient levels, and aeration while monitoring lettuce growth responses to determine how specific water chemistry conditions shape hydroponic crop development.
​
The system uses a two-tier DWC setup with 72 lettuce plants, full-spectrum LED lighting, and a recirculating nutrient reservoir to maintain continuous flow and stable environmental conditions. Key findings show a general decline in total nitrogen and COD concentrations over time, indicating active nutrient uptake and progressive organic matter utilization that correlate with improved plant vigor and overall hydroponic performance.`,
  },
  "cyber-physical-security": {
    id: 7,
    slug: "cyber-physical-security",
    title:
      "Cyber-Physical Vulnerabilities and Resilience Pathways in Bench-Scale Anaerobic Digestion (W8 Digester)",
    image: project4Image,
    team: [
      { name: "Hirak Modi", slug: "hirak-modi" },
      { name: "Dr. Veera Gnaneswar Gude", slug: "dr-veera-gnaneswar-gude" }
    ],
    fullDescription: `Anaerobic digestion is a critical technology in wastewater treatment, enabling organic waste stabilization and renewable energy recovery through biogas production. As modern digestion systems increasingly rely on sensor networks, automated controls, and digital monitoring platforms, they are evolving into tightly coupled cyber-physical systems. While these technologies improve operational efficiency, they also introduce new cybersecurity risks that can directly impact biological process stability.

This project investigates cyber-physical vulnerabilities and resilience pathways in a bench-scale anaerobic digestion system (Armfield W8 Digester) by integrating process performance analysis with a cybersecurity assessment of instrumentation, data flows, and control interfaces. Key digestion parameters—including temperature, mixing, alkalinity, and gas production—were evaluated for sensitivity to incorrect or manipulated sensor inputs.

A structured cybersecurity assessment framework was applied to map data pathways, identify exposed components, and evaluate risks such as sensor spoofing, false data injection, unauthorized access, and control-logic manipulation. The study highlights how compromised data integrity can propagate through automated decision-making systems, leading to process inhibition, reduced methane yield, and increased operational risk.

The findings emphasize the need for cyber-resilient design strategies, including secure communication protocols, device authentication, operator training, and integrated risk assessment, to safeguard biological treatment processes from digital interference in increasingly digitized wastewater infrastructure.`,
  },
  "design-operation-and-analysis": {
    id: 8,
    slug: "design-operation-and-analysis",
    title:
      "Design, Operation and Analysis of 3D Printed Membrane Capacitive Deionization for Nutrient Recovery and Desalination",
    image: project4Image,
    team: [
      { name: "Zubairullah Khan Mohammed", slug: "zubairullah-khan-mohammed" },
      { name: "Dr. Veera Gnaneswar Gude", slug: "dr-veera-gnaneswar-gude" }
    ],
    fullDescription: `This project develops and analyzes a 3D-printed modular desalination reactor (MDCR) for low-cost nutrient recovery and desalination from diverse water matrices. It evaluates custom ion exchange membranes and fabricated cells using a comprehensive performance framework that assesses water quality, durability, and hydroponic nutrient removal across varied conditions. The performance evaluation framework tests the MDCR under controlled cycles (S1-S5), revealing strong results in central nutrient and phosphorus removal , alongside superior anion performance over time. Results quantify desalination efficiency, COD removal, and phosphorus uptake, confirming the system's robustness for hydroponic applications. Overall, the 3D-printed MDCR demonstrates a novel, efficient capability for consistent salt reduction, affirming its potential for scalable, low-cost wastewater remediation and nutrient recycling.`,
  },
};

export function ProjectDetail() {
  const { projectId } = useParams<{ projectId: string }>();
  const project = projectId
    ? projectsData[projectId as keyof typeof projectsData]
    : null;
  
  const [isPosterOpen, setIsPosterOpen] = useState(false);

  if (!project) {
    return (
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl mb-4">Project Not Found</h1>
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

  const downloadPoster = () => {
    if (project.poster) {
      const link = document.createElement('a');
      link.href = project.poster;
      link.download = `${project.slug}-poster.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-[#1a1a1a] text-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-[#CFB991] hover:underline mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6">
            {project.title}
          </h1>
          <div className="flex items-start gap-2">
            <Users className="w-4 h-4 mt-1 flex-shrink-0" />
            <div className="flex flex-wrap gap-1">
              {project.team.map((member, idx) => (
                <span key={idx}>
                  {member.slug !== "#" ? (
                    <Link
                      to={`/team/${member.slug}`}
                      className="hover:text-[#CFB991] hover:underline transition-colors"
                    >
                      {member.name}
                    </Link>
                  ) : (
                    <span>{member.name}</span>
                  )}
                  {idx < project.team.length - 1 && <span>, </span>}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
          {/* Main Column */}
          <div className="lg:col-span-2 space-y-12">
            {/* Project Image */}
            <div className="rounded-lg overflow-hidden shadow-lg">
              <ImageWithFallback
                src={project.image}
                alt={project.title}
                className="w-full h-64 md:h-96 object-cover"
              />
            </div>

            {/* Overview */}
            <div>
              <h2 className="text-2xl md:text-3xl mb-6">
                Project Overview
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                {project.fullDescription
                  .split("\n\n")
                  .map((paragraph, idx) => (
                    <p key={idx} className="mb-4">
                      {paragraph}
                    </p>
                  ))}
              </div>
            </div>

            {/* Research Poster Section */}
            {project.poster && (
              <div>
                <h2 className="text-2xl md:text-3xl mb-6">
                  Research Poster
                </h2>
                <div className="bg-gray-50 p-6 rounded-lg border-2 border-gray-200">
                  <div className="relative group">
                    <img 
                      src={project.poster} 
                      alt={`${project.title} - Research Poster`}
                      className="w-full rounded-lg shadow-md cursor-pointer hover:shadow-xl transition-shadow"
                      onClick={() => setIsPosterOpen(true)}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-opacity rounded-lg flex items-center justify-center">
                      <ExternalLink className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                  <div className="mt-4 flex gap-3 justify-center">
                    <button
                      onClick={() => setIsPosterOpen(true)}
                      className="flex items-center gap-2 px-4 py-2 bg-[#CFB991] text-white rounded-lg hover:bg-[#b8a67d] transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Full Size
                    </button>
                    <button
                      onClick={downloadPoster}
                      className="flex items-center gap-2 px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
                    >
                      <Download className="w-4 h-4" />
                      Download
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Poster Modal */}
      {isPosterOpen && project.poster && (
        <div 
          className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
          onClick={() => setIsPosterOpen(false)}
        >
          <div className="relative max-w-6xl max-h-[90vh] w-full">
            <button
              onClick={() => setIsPosterOpen(false)}
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70 transition-colors z-10"
            >
              ✕
            </button>
            <img 
              src={project.poster} 
              alt={`${project.title} - Research Poster`}
              className="w-full h-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={downloadPoster}
              className="absolute bottom-4 right-4 flex items-center gap-2 px-4 py-2 bg-[#CFB991] text-white rounded-lg hover:bg-[#b8a67d] transition-colors"
            >
              <Download className="w-4 h-4" />
              Download
            </button>
          </div>
        </div>
      )}
    </div>
  );
}