import { ImageWithFallback } from "./figma/ImageWithFallback";

export function PartnersSection() {
  const partners = [
    { id: 1, name: "U.S. Geological Survey" },
    { id: 2, name: "Indiana Department of Environmental Management" },
    { id: 3, name: "Northwestern Indiana Regional Planning Commission" },
    { id: 4, name: "Great Lakes Commission" },
    { id: 5, name: "Local Water Utilities" },
    { id: 6, name: "Environmental Protection Agency" },
    { id: 7, name: "National Science Foundation" },
    { id: 8, name: "Regional Agriculture Organizations" }
  ];

  return (
    <section id="partners" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl mb-6">Our Partners</h2>
          <div className="w-24 h-1 bg-[#CFB991] mx-auto mb-8"></div>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto text-gray-700">
            We collaborate with leading organizations to advance water research and education.
          </p>
        </div>

        <div className="mb-12">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1752159684779-0639174cdfac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwcGFydG5lcnMlMjBoYW5kc2hha2V8ZW58MXx8fHwxNzY0MTcyMzc4fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Partnership Collaboration"
            className="w-full h-64 object-cover rounded-lg shadow-lg"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {partners.map((partner) => (
            <div 
              key={partner.id} 
              className="bg-gray-50 p-6 rounded-lg border-2 border-gray-200 hover:border-[#CFB991] transition-colors text-center"
            >
              <div className="w-16 h-16 bg-[#CFB991] rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-xl">{partner.id}</span>
              </div>
              <p className="text-gray-900">{partner.name}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-gray-700 mb-6">
            Interested in partnering with the Water Institute?
          </p>
          <button className="px-8 py-3 bg-[#CFB991] text-[#1a1a1a] rounded-lg hover:bg-[#b8a07a] transition-colors">
            Become a Partner
          </button>
        </div>
      </div>
    </section>
  );
}