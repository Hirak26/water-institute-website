import { Beaker, Waves, Shield, TrendingUp, Zap, Droplets, Database } from "lucide-react";

export function ResearchAreaSection() {
  const researchAreas = [
    {
      icon: Zap,
      title: "Bioelectrochemical Systems & Resource Recovery",
      description: "Design and operation of microbial fuel cells, microbial electrochemical technologies, and hybrid bioelectrochemical reactors for wastewater treatment, energy generation, and nutrient recovery."
    },
    {
      icon: Droplets,
      title: "Water–Energy–Food Nexus & Hydroponics",
      description: "Integrated wastewater–hydroponic systems for nutrient recycling, bicarbonate and phosphorus recovery, controlled environment agriculture, and sustainable food production."
    },
    {
      icon: Waves,
      title: "Advanced Membranes & Electrochemical Separation",
      description: "Ion-exchange membranes, bipolar membranes, and membrane capacitive deionization (MCDI) for desalination, nutrient removal, and selective ion transport in complex water matrices."
    },
    {
      icon: TrendingUp,
      title: "Anaerobic Digestion & Bioenergy",
      description: "Process optimization, performance analysis, and resource recovery from anaerobic digestion systems, including biogas production and system stability under variable operating conditions."
    },
    {
      icon: Database,
      title: "Water Quality Monitoring & Environmental Data Analytics",
      description: "Experimental and data-driven evaluation of water quality parameters, nutrient dynamics, and system performance using advanced statistical, computational, and visualization tools."
    },
    {
      icon: Shield,
      title: "Cyber-Physical Security of Water Infrastructure",
      description: "Assessment of vulnerabilities, resilience pathways, and cybersecurity risks in sensor-driven and digitally controlled water and wastewater treatment systems."
    },
    {
      icon: Beaker,
      title: "Machine Learning & Predictive Modeling",
      description: "Application of machine learning and interpretable AI tools for predicting contaminant behavior (e.g., PFAS uptake), system performance, and decision support in environmental systems."
    }
  ];

  return (
    <section id="research" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl mb-6">Research Areas</h2>
          <div className="w-24 h-1 bg-[#CFB991] mx-auto mb-8"></div>
          <div className="max-w-4xl mx-auto">
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              The Water Institute conducts cutting-edge research across a broad range of interconnected themes, with a strong focus on sustainability, resource recovery, and system resilience:
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {researchAreas.map((area, index) => (
            <div 
              key={index} 
              className="p-6 border-2 border-gray-200 rounded-lg hover:border-[#CFB991] transition-all group hover:shadow-lg"
            >
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#CFB991] transition-colors">
                <area.icon className="w-8 h-8 text-[#1a1a1a] group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg sm:text-xl mb-4 font-semibold">{area.title}</h3>
              <p className="text-gray-700 text-sm sm:text-base">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}