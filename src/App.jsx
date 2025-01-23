import './App.css';
import About from '../src/english/pages/About.jsx';
import Footer from '../src/english/components/Footer.jsx';
import Home from '../src/english/pages/Home.jsx';
import Navbar from './english/components/Navbar.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Service from '../src/english/pages/Service.jsx';
import Facility from '../src/english/pages/Facility.jsx';
import Careers from '../src/english/pages/Careers.jsx';
import News from '../src/english/pages/News.jsx';
import Faq from '../src/english/pages/Faq.jsx';
import HomeAr from './arabic/pages/HomeAr.jsx';
import ServicesAr from './arabic/pages/ServiceAr.jsx';
import FacilityAr from './arabic/pages/FacilityAr.jsx';
import CareersAr from './arabic/pages/CareersAr.jsx';
import NewsAr from './arabic/pages/NewsAr.jsx';
import FaqAr from './arabic/pages/FaqAr.jsx';
import AboutAr from './arabic/pages/AboutAr.jsx';

function App() {
  return (
    <Router>
      {/* Navbar is always visible */}
    

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/services" element={<Service/>} />
        <Route path="/facility" element={<Facility/>} />
        <Route path="/careers" element={<Careers/>} />
        <Route path="/news&events" element={<News/>} />
        <Route path="/faq" element={<Faq/>} />


        {/* Arabic */}

        <Route path="/arabic" element={<HomeAr />} />
        <Route path="/arabic-about" element={<AboutAr/>} />
        <Route path="/arabic-services" element={<ServicesAr />} />
        <Route path="/arabic-facility" element={<FacilityAr />} />
        <Route path="/arabic-careers" element={<CareersAr/>} />
        <Route path="/arabic-news&events" element={<NewsAr/>} />
        <Route path="/arabic-faq" element={<FaqAr/>} />
        {/* You can add more routes here in the future */}
      </Routes>

      {/* Footer is always visible */}
    
    </Router>
  );
}

export default App;