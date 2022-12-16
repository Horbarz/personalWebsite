import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import WorkExperience from './components/Experience/WorkExperience';
import Portfolio from './components/Portfolio/Portfolio';
import Certificates from './components/Certificates/Certificates';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="body-bg">
      <Navbar />
      <Home />
      <About />
      <WorkExperience />
      <Portfolio />
      <Certificates />
    </div>
  );
}

export default App;
