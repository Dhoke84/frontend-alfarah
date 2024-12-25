import './App.css';
import About from './components/About.jsx';
import Footer from './components/Footer.jsx';
import Home from './components/Home.jsx';
import Navbar from './components/Navbar.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Service from './components/Service.jsx';
import Facility from './components/Facility.jsx';
import Careers from './components/Careers.jsx';
import News from './components/News.jsx';
import Faq from './components/Faq.jsx';

function App() {
  return (
    <Router>
      {/* Navbar is always visible */}
      <Navbar />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/services" element={<Service/>} />
        <Route path="/facility" element={<Facility/>} />
        <Route path="/careers" element={<Careers/>} />
        <Route path="/news&events" element={<News/>} />
        <Route path="/faq" element={<Faq/>} />
        {/* You can add more routes here in the future */}
      </Routes>

      {/* Footer is always visible */}
      <Footer />
    </Router>
  );
}

export default App;
