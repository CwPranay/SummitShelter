const About = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="relative py-16 sm:py-20 md:py-32">
      <div className="max-w-[1831px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <div className="relative mb-6 sm:mb-8">
              <h2 className="text-cream font-grotesk uppercase text-[28px] sm:text-[40px] md:text-[48px] lg:text-[60px] leading-tight">
                About our
                <br />
                Collection
              </h2>
              <span className="absolute -right-4 sm:-right-8 top-2 sm:top-4 text-neon font-condiment text-[24px] sm:text-[32px] md:text-[40px] -rotate-2 opacity-90 mix-blend-exclusion normal-case">
                Premium Quality
              </span>
            </div>
            <p className="text-cream/70 font-mono text-xs sm:text-sm md:text-base leading-relaxed mb-4 sm:mb-6">
              Each tent in our collection represents the pinnacle of outdoor engineering, 
              designed for the most extreme adventures. From mountain peaks to desert 
              landscapes, our shelters provide unmatched protection and comfort.
            </p>
            <p className="text-cream/70 font-mono text-xs sm:text-sm md:text-base leading-relaxed mb-6 sm:mb-8">
              Crafted with aerospace-grade materials and tested in the harshest conditions. 
              Every detail engineered for durability, weather resistance, and lightweight portability.
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4 mb-6 sm:mb-8">
              <div className="liquid-glass rounded-xl px-4 sm:px-6 py-3 sm:py-4 flex-1 min-w-[140px]">
                <div className="text-neon font-grotesk text-2xl sm:text-3xl mb-1">50+</div>
                <div className="text-cream/60 font-mono text-[10px] sm:text-xs uppercase">Models Available</div>
              </div>
              <div className="liquid-glass rounded-xl px-4 sm:px-6 py-3 sm:py-4 flex-1 min-w-[140px]">
                <div className="text-neon font-grotesk text-2xl sm:text-3xl mb-1">-40°C</div>
                <div className="text-cream/60 font-mono text-[10px] sm:text-xs uppercase">Rated Temp</div>
              </div>
            </div>
            <button 
              onClick={() => scrollToSection('contact')}
              className="liquid-glass rounded-full px-6 sm:px-8 py-3 sm:py-4 text-cream font-grotesk uppercase text-xs sm:text-sm transition-all duration-300 w-full sm:w-auto"
            >
              Contact Us
            </button>
          </div>

          {/* Right Content - Feature Image */}
          <div className="liquid-glass rounded-2xl overflow-hidden aspect-square relative order-first lg:order-last">
            <img 
              src="https://images.unsplash.com/photo-1762255146530-8eca66af23b2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dGVudCUyMHByZW1pdW18ZW58MHx8MHx8fDA%3D" 
              alt="Premium Tent Featured"
              loading="lazy"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#010828] via-transparent to-transparent opacity-40" />
            <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
              <p className="text-cream font-grotesk uppercase text-xs sm:text-sm mb-1">Featured Model</p>
              <p className="text-neon font-condiment text-xl sm:text-2xl normal-case">Summit Elite Pro</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
