import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturedCollections } from './components/FeaturedCollections';
import { NewArrivals } from './components/NewArrivals';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <FeaturedCollections />
      <NewArrivals />
      <Footer />
    </div>
  );
}

export default App;
