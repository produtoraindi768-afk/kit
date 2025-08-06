import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Games from './components/Games';
import Players from './components/Players';
import Events from './components/Events';
import Sponsors from './components/Sponsors';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-dark-100">
      <Header />
      <main>
        <Hero />
        <About />
        <Games />
        <Players />
        <Events />
        <Sponsors />
      </main>
      <Footer />
    </div>
  );
}

export default App;