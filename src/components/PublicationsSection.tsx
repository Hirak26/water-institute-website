import {
  FileText,
  ExternalLink,
  GraduationCap,
} from "lucide-react";

export function PublicationsSection() {
  // Recent 5 publications from Dr. Veera Gnaneswar Gude's Google Scholar (sorted by publication date)
  const publications = [
    {
      id: 1,
      title:
        "MoistViT: A vision transformer model for moisture content prediction of wood chips",
      authors:
        "Daniel E Marulanda, Abdur Rahman, Jason Street, Mohammad Marufuzzaman, Haifeng Wang, Veera G Gude, Randy Buchanan",
      journal: "Systems and Soft Computing",
      year: "2025",
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=yv68ozYAAAAJ&sortby=pubdate&citation_for_view=yv68ozYAAAAJ:Ehil0879vHcC",
    },
    {
      id: 2,
      title:
        "A novel 3D-printed Capacitive Deionization Process for Desalination and Nutrient Recovery Applications",
      authors: "Zubairullah Mohammad, Veera Gnaneswar Gude",
      journal: "MDPI",
      year: "2025",
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=yv68ozYAAAAJ&sortby=pubdate&citation_for_view=yv68ozYAAAAJ:nZcligLrVowC",
    },
    {
      id: 3,
      title:
        "Developing a Data Warehouse Tool for Analyzing the Water Quality in the Great Lakes",
      authors: "Barbara Nicolai, Veera Gnaneswar Gude",
      journal: "MDPI",
      year: "2025",
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=yv68ozYAAAAJ&sortby=pubdate&citation_for_view=yv68ozYAAAAJ:P7Ujq4OLJYoC",
    },
    {
      id: 4,
      title:
        "Unraveling the effects of ion exchange membranes on the performance of real wastewater treatment in microbial fuel cells",
      authors: "Khin Tun, Veera Gnaneswar Gude",
      journal: "MDPI",
      year: "2025",
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=yv68ozYAAAAJ&sortby=pubdate&citation_for_view=yv68ozYAAAAJ:OP4eGU-M3BUC",
    },
    {
      id: 5,
      title:
        "Energy-Positive Wastewater Treatment and Nutrient Recovery in a Combined Hydroponics and Microbial Electrochemical System",
      authors:
        "Nachiket Magesh, Khin Tun, Veera Gnaneswar Gude",
      journal: "MDPI",
      year: "2025",
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=yv68ozYAAAAJ&sortby=pubdate&citation_for_view=yv68ozYAAAAJ:F9fV5C73w3QC",
    },
  ];

  return (
    <section id="publications" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl mb-6">
            Recent Publications
          </h2>
          <div className="w-24 h-1 bg-[#CFB991] mx-auto mb-8"></div>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto text-gray-700">
            Our latest research findings contribute to the
            global body of knowledge in water science and
            environmental engineering.
          </p>
        </div>

        <div className="space-y-6">
          {publications.map((pub) => (
            <div
              key={pub.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#CFB991] rounded-lg flex items-center justify-center">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#CFB991] transition-colors"
                  >
                    <h3 className="text-lg sm:text-xl mb-2">
                      {pub.title}
                    </h3>
                  </a>
                  <p className="text-gray-700 mb-2 text-sm sm:text-base">
                    {pub.authors}
                  </p>
                  <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-600">
                    <span className="italic">
                      {pub.journal}
                    </span>
                    <span className="hidden sm:inline">•</span>
                    <span>{pub.year}</span>
                    {pub.citations > 0 && (
                      <>
                        <span className="hidden sm:inline">
                          •
                        </span>
                        <span className="text-[#CFB991]">
                          {pub.citations} citations
                        </span>
                      </>
                    )}
                    <span className="hidden sm:inline">•</span>
                    <a
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-[#CFB991] hover:underline"
                    >
                      View Paper
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://scholar.google.com/citations?hl=en&user=yv68ozYAAAAJ&view_op=list_works&sortby=pubdate"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-[#1a1a1a] text-white rounded-lg hover:bg-[#2a2a2a] transition-colors"
          >
            <GraduationCap className="w-5 h-5" />
            View All Publications on Google Scholar
          </a>
        </div>
      </div>
    </section>
  );
}