import './App.css';
import './index.css';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Projects from './components/projects/Projects';
import Experience from './components/experience/Experience';

function App() {
  return (
    <div className="bg-dark text-light">
      <Header />
      <Navbar />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
