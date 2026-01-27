import heroVideo from "C:/Users/PNW_checkout/Downloads/Water Institute website/src/assets/hero saction video.mp4";

export function HeroSection() {
  return (
    <section className="relative min-h-[520px] sm:min-h-[640px] md:min-h-[720px] lg:h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
          {/* Fallback text */}
          Your browser does not support the video tag.
        </video>

        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/45 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <p className="text-xs sm:text-sm md:text-base mb-4 text-white/80 tracking-wide">
          Purdue University Northwest {"›"} Water Institute
        </p>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold mb-6 sm:mb-8">
          Water Institute
        </h1>

        <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed text-white/90">
          Innovating at the Water–Energy–Security Nexus to advance sustainable,
          resilient, and data-driven research infrastructure
        </p>
      </div>
    </section>
  );
}
