import { Mail, MessageCircle, Code, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Hero = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <section id="home" className="relative min-h-screen overflow-hidden rounded-b-[32px]">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      {/* Content Container */}
      <div className="relative z-10 max-w-[1831px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
        {/* Header */}
        <header className="flex items-center justify-between py-6 md:py-8">
          {/* Logo */}
          <div className="text-cream font-grotesk text-base uppercase tracking-wide cursor-pointer" onClick={() => scrollToSection('home')}>
            SUMMIT SHELTER
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden w-10 h-10 flex items-center justify-center text-cream"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Navigation - Desktop Only */}
          <nav className="hidden lg:block liquid-glass rounded-[28px] px-[52px] py-[24px]">
            <ul className="flex items-center gap-8">
              {[
                { name: 'Homepage', id: 'home' },
                { name: 'Gallery', id: 'gallery' },
                { name: 'About', id: 'about' },
                { name: 'Contact', id: 'contact' }
              ].map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-cream font-grotesk text-[13px] uppercase tracking-wide hover:text-neon transition-colors duration-300"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </header>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 bg-[#010828] z-50 flex flex-col">
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between px-4 py-6 border-b border-cream/10">
              <div className="text-cream font-grotesk text-base uppercase tracking-wide">
                SUMMIT SHELTER
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="w-10 h-10 flex items-center justify-center text-cream"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Mobile Menu Content */}
            <div className="flex-1 flex flex-col justify-center px-8">
              <ul className="space-y-8">
                {[
                  { name: 'Homepage', id: 'home' },
                  { name: 'Gallery', id: 'gallery' },
                  { name: 'About', id: 'about' },
                  { name: 'Contact', id: 'contact' }
                ].map((item) => (
                  <li key={item.name}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className="text-cream font-grotesk text-2xl uppercase tracking-wide hover:text-neon transition-colors duration-300 w-full text-left"
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mobile Menu Footer - Social Icons */}
            <div className="px-8 py-8 border-t border-cream/10">
              <div className="flex items-center justify-center gap-4">
                {[
                  { Icon: Mail, link: 'mailto:info@summitshelter.com' },
                  { Icon: MessageCircle, link: 'https://twitter.com/summitshelter' },
                  { Icon: Code, link: 'https://github.com/summitshelter' }
                ].map(({ Icon, link }, index) => (
                  <a
                    key={index}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 liquid-glass rounded-[1rem] flex items-center justify-center hover:bg-white/10 transition-colors duration-300"
                  >
                    <Icon className="w-5 h-5 text-cream" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Hero Content */}
        <div className="relative pt-12 pb-32 md:pt-20 md:pb-40 lg:pt-32 lg:pb-48">
          {/* Social Icons - Desktop (Top Right) */}
          <div className="hidden lg:flex flex-col gap-4 absolute top-0 right-0">
            {[
              { Icon: Mail, link: 'mailto:info@summitshelter.com' },
              { Icon: MessageCircle, link: 'https://twitter.com/summitshelter' },
              { Icon: Code, link: 'https://github.com/summitshelter' }
            ].map(({ Icon, link }, index) => (
              <a
                key={index}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 liquid-glass rounded-[1rem] flex items-center justify-center hover:bg-white/10 transition-colors duration-300"
              >
                <Icon className="w-5 h-5 text-cream" />
              </a>
            ))}
          </div>

          {/* Main Heading */}
          <div className="relative max-w-[780px] mx-auto lg:mx-0 lg:ml-32 text-center lg:text-left">
            <h1 className="text-cream font-grotesk uppercase text-[40px] sm:text-[60px] md:text-[75px] lg:text-[90px] leading-[1.05] lg:leading-[1] tracking-tight">
              Where adventure
              <br />
              meets ( the ) ultimate
              <br />
              protection
            </h1>

            {/* Cursive Accent Text */}
            <div className="absolute -right-4 sm:-right-8 top-8 sm:top-12 md:top-16 lg:top-20 -rotate-1">
              <span className="text-neon font-condiment text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] opacity-90 mix-blend-exclusion normal-case">
                Premium Tents
              </span>
            </div>
          </div>

          {/* CTA Button - Bottom Center */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
            <button 
              onClick={() => scrollToSection('gallery')}
              className="liquid-glass rounded-full px-6 sm:px-8 py-3 sm:py-4 text-cream font-grotesk uppercase text-xs sm:text-sm transition-all duration-300"
            >
              Explore Collection
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
