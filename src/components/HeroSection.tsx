import { ImageWithFallback } from "./figma/ImageWithFallback";

export function HeroSection() {
  return (
    <section className="relative min-h-[500px] sm:min-h-[600px] md:min-h-[700px] lg:h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute min-w-full min-h-full w-auto h-auto max-w-none object-cover"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
          }}
        >
          {/* Add your video URL here - make sure it's a direct link to an MP4 file */}
          <source
            src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
            type="video/mp4"
          />
        </video>

        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white py-12">
        <div className="mb-4">
          <p className="text-xs sm:text-sm md:text-base">
            Purdue University Northwest {"> "} Water Institute
          </p>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-6 sm:mb-8">
          Water Institute
        </h1>

        <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed">
          Innovating at the Water–Energy–Security Nexus to
          Advance Sustainable, Resilient, and Data-Driven
          Research Infrastructure
        </p>
      </div>
    </section>
  );
}