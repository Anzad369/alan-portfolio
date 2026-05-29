import './App.css';
import Hero from './components/Hero';
import VideoStrip from './components/VideoStrip';
import Experience from './components/Experience';
import Services from './components/Services';
import Contact from './components/Contact';

function App() {
  return (
    <div className="portfolio-wrapper">
      <Hero />
      <VideoStrip />
      <Experience />
      <Services/>
      <Contact />
    </div>
  );
}

export default App;