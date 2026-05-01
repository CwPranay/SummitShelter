const Gallery = () => {
  const tents = [
    {
      id: 1,
      name: "Alpine Summit",
      image: "https://images.unsplash.com/photo-1624923686627-514dd5e57bae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGVudHN8ZW58MHx8MHx8fDA%3D",
      type: "4-Season Expedition",
      price: "$899"
    },
    {
      id: 2,
      name: "Desert Nomad",
      image: "https://images.unsplash.com/photo-1603738397297-a374b78e9626?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGVudHN8ZW58MHx8MHx8fDA%3D",
      type: "Lightweight Backpacking",
      price: "$649"
    },
    {
      id: 3,
      name: "Forest Refuge",
      image: "https://images.unsplash.com/photo-1634290952345-42540e2f0356?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRlbnRzfGVufDB8fDB8fHww",
      type: "Family Camping",
      price: "$549"
    },
    {
      id: 4,
      name: "Peak Explorer",
      image: "https://images.unsplash.com/photo-1731082627921-77d00a9e5ab7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHRlbnRzfGVufDB8fDB8fHww",
      type: "Mountaineering",
      price: "$1,299"
    },
    {
      id: 5,
      name: "Coastal Breeze",
      image: "https://images.unsplash.com/photo-1653526167310-714293464c9c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHRlbnRzfGVufDB8fDB8fHww",
      type: "Beach Camping",
      price: "$449"
    },
    {
      id: 6,
      name: "Wilderness Pro",
      image: "https://images.unsplash.com/photo-1594229392247-3a2f068d5ca8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHRlbnRzfGVufDB8fDB8fHww",
      type: "All-Weather Shelter",
      price: "$799"
    }
  ];

  return (
    <section id="gallery" className="relative py-16 sm:py-20 md:py-32">
      <div className="max-w-[1831px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="relative inline-block mb-6 sm:mb-8">
            <h2 className="text-cream font-grotesk uppercase text-[32px] sm:text-[48px] md:text-[60px] lg:text-[72px] leading-tight">
              Featured Collection
            </h2>
            <span className="absolute -right-8 sm:-right-16 top-2 sm:top-4 text-neon font-condiment text-[24px] sm:text-[32px] md:text-[40px] rotate-2 opacity-90 mix-blend-exclusion normal-case">
              2026
            </span>
          </div>
          <p className="text-cream/70 font-mono text-xs sm:text-sm md:text-base max-w-2xl mx-auto px-4">
            Explore our premium tent collection. Each design engineered for extreme conditions and ultimate comfort.
          </p>
        </div>

        {/* Tent Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {tents.map((tent) => (
            <div
              key={tent.id}
              className="liquid-glass rounded-2xl overflow-hidden group"
            >
              <div className="aspect-square relative overflow-hidden">
                <img 
                  src={tent.image} 
                  alt={tent.name}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#010828] via-transparent to-transparent opacity-60" />
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-cream font-grotesk uppercase text-lg sm:text-xl mb-1 sm:mb-2">
                  {tent.name}
                </h3>
                <p className="text-cream/60 font-mono text-xs sm:text-sm mb-3 sm:mb-4">
                  {tent.type}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-neon font-grotesk text-xl sm:text-2xl">{tent.price}</span>
                  <button 
                    className="liquid-glass rounded-full px-4 sm:px-6 py-2 text-cream font-grotesk uppercase text-xs cursor-default"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
