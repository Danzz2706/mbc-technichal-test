// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DivisionsPage from './pages/DivisionPages';
import ContactPage from './pages/ContactPages';
import DeveloperPage from './pages/DeveloperPages';
import Navbar from './components/navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/divisions" element={<DivisionsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/developer" element={<DeveloperPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;