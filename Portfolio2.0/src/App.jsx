import './styles/App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Skills from './components/Skills';
import Certifications from './components/Cert';
import Experience from './components/Experience';
import Hero from './components/Hero';
import SplashScreen from './components/SplashScreen'

function App() {
  return (
    <div className="App">
      <SplashScreen/>
      <Navbar />
      <Hero></Hero>
      <About />
      <Skills></Skills>
      <Certifications></Certifications>
      <Experience></Experience>
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
