import Hero from './components/Hero';
import Gallery from './components/Gallery';
import About from './components/About';
import Footer from './components/Footer';
import TextureOverlay from './components/TextureOverlay';

function App() {
  return (
    <div className="bg-[#010828] min-h-screen">
      {/* Texture Overlay */}
      <TextureOverlay />
      
      {/* Main Content */}
      <Hero />
      <Gallery />
      <About />
      <Footer />
    </div>
  );
}

export default App;
