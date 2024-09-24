
import './App.css';
import Description from './components/Description';
import About from './components/About';
import Features from './components/Features';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import CallToAction from './components/CallToAction';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
    <Navbar />
    <Hero />
    <Features />
    <About />
    <Testimonials />
    <Description />
    <CallToAction />
    <Footer />
    </div>
  );
}

export default App;
