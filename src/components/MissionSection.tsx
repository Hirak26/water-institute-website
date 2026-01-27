import { Target, Droplet, Users } from "lucide-react";

export function MissionSection() {
  return (
    <section id="mission" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl mb-6">Our Mission</h2>
          <div className="w-24 h-1 bg-[#CFB991] mx-auto mb-8"></div>
          <div className="max-w-5xl mx-auto text-left md:text-center">
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              The Purdue University Northwest (PNW) Water Institute advances innovative, interdisciplinary solutions to address critical challenges at the water–energy–food nexus. Our mission is to develop sustainable technologies, data-driven strategies, and resilient infrastructure that improve water quality, recover valuable resources, and enhance system reliability in the face of growing environmental, energy, and climate pressures.
            </p>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mt-6">
              Through integrated research, education, and outreach, the Water Institute bridges fundamental science with real-world applications to support utilities, communities, and industry partners at local, national, and global scales. We emphasize translational research—moving ideas from bench-scale experimentation to scalable, practical solutions—while preparing the next generation of engineers and scientists to lead in sustainable water and environmental systems.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-[#CFB991] rounded-full flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl sm:text-2xl mb-4">Research Excellence</h3>
            <p className="text-gray-700">
              Conducting cutting-edge research to solve complex water-related challenges 
              facing our communities and environment through innovative, interdisciplinary approaches.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-[#CFB991] rounded-full flex items-center justify-center mb-6">
              <Droplet className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl sm:text-2xl mb-4">Sustainable Technologies</h3>
            <p className="text-gray-700">
              Developing data-driven strategies and resilient infrastructure for resource recovery, 
              water quality improvement, and system optimization.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-[#CFB991] rounded-full flex items-center justify-center mb-6">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl sm:text-2xl mb-4">Translational Impact</h3>
            <p className="text-gray-700">
              Bridging fundamental science with real-world applications to support utilities, 
              communities, and industry partners worldwide.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}