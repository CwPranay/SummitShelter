import { Mail, MessageCircle, Code } from 'lucide-react';
import { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setEmail('');
    }
  };

  return (
    <footer id="contact" className="relative py-16 sm:py-20 md:py-32 border-t border-cream/10">
      <div className="max-w-[1831px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
        {/* CTA Section */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="relative inline-block mb-6 sm:mb-8">
            <h2 className="text-cream font-grotesk uppercase text-[28px] sm:text-[40px] md:text-[48px] lg:text-[60px] xl:text-[72px] leading-tight">
              Join the
              <br />
              Expedition
            </h2>
            <span className="absolute -right-8 sm:-right-12 top-4 sm:top-8 text-neon font-condiment text-[24px] sm:text-[32px] md:text-[40px] rotate-3 opacity-90 mix-blend-exclusion normal-case">
              Now
            </span>
          </div>
          <p className="text-cream/70 font-mono text-xs sm:text-sm md:text-base max-w-xl mx-auto mb-6 sm:mb-8 px-4">
            Subscribe to our newsletter for exclusive deals, new product launches, 
            and outdoor adventure tips.
          </p>
          
          {/* Newsletter Form */}
          <form onSubmit={handleSubscribe} className="max-w-md mx-auto mb-8 sm:mb-12 px-4">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 liquid-glass rounded-full px-6 py-3 sm:py-4 text-cream font-mono text-sm bg-transparent border-none outline-none placeholder:text-cream/40"
              />
              <button 
                type="submit"
                className="liquid-glass rounded-full px-6 sm:px-8 py-3 sm:py-4 text-cream font-grotesk uppercase text-xs sm:text-sm transition-all duration-300 whitespace-nowrap"
              >
                Subscribe
              </button>
            </div>
          </form>

          <button 
            onClick={() => scrollToSection('gallery')}
            className="liquid-glass rounded-full px-6 sm:px-8 py-3 sm:py-4 text-cream font-grotesk uppercase text-xs sm:text-sm transition-all duration-300"
          >
            Shop Now
          </button>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 mb-12 sm:mb-16">
          <div>
            <h3 className="text-cream font-grotesk uppercase text-base sm:text-lg mb-3 sm:mb-4">Navigation</h3>
            <ul className="space-y-2">
              {[
                { name: 'Homepage', id: 'home' },
                { name: 'Gallery', id: 'gallery' },
                { name: 'About', id: 'about' },
                { name: 'Contact', id: 'contact' }
              ].map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-cream/60 font-mono text-xs sm:text-sm hover:text-neon transition-colors duration-300 text-left"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-cream font-grotesk uppercase text-base sm:text-lg mb-3 sm:mb-4">Support</h3>
            <ul className="space-y-2">
              {['Shipping Info', 'Returns', 'Warranty', 'Size Guide'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-cream/60 font-mono text-xs sm:text-sm hover:text-neon transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-cream font-grotesk uppercase text-base sm:text-lg mb-3 sm:mb-4">Legal</h3>
            <ul className="space-y-2">
              {['Terms of Service', 'Privacy Policy', 'Cookie Policy'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-cream/60 font-mono text-xs sm:text-sm hover:text-neon transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 pt-6 sm:pt-8 border-t border-cream/10">
          <div className="text-cream/40 font-mono text-[10px] sm:text-xs text-center sm:text-left">
            © 2026 Summit Shelter. All rights reserved.
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
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
                className="w-8 h-8 sm:w-10 sm:h-10 liquid-glass rounded-lg flex items-center justify-center hover:bg-white/10 transition-colors duration-300"
              >
                <Icon className="w-3 h-3 sm:w-4 sm:h-4 text-cream" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
