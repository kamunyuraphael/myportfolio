// src/App.tsx
import Navigation from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Education from './sections/Education';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import './index.css';


function App() {
  return (
    <div className="page d-flex flex-column min-vh-100">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Education /> 
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;