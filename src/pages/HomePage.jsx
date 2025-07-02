// src/pages/HomePage.jsx
import './HomePage.css';
import mbc from '../assets/mbc.png';

const HomePage = () => {
  return (
    <div className="home-container">
      <header className="home-hero">
        <div className="hero-content">
          <img src={mbc} alt="Logo MBC" className="hero-logo" />
          <h1>Menyelami Inovasi, Mengarungi Masa Depan Teknologi</h1>
          <p>
            MBC Laboratory adalah Sebuah wadah untuk melakukan riset yang berfokus pada solusi canggih di bidang
            Cybersecurity, Big Data, GIS, dan Game Technology.
          </p>
          <a href="/divisions" className="cta-button">Jelajahi Divisi Kami</a>
        </div>
      </header>

      <section className="home-vision-mission">
        <h2>Visi & Misi Kami</h2>
        <div className="vision-mission-content">
          <div className="card">
            <h3>Visi</h3>
            <p>Menjadi kompas utama dalam navigasi dan pengembangan teknologi digital terdepan.</p>
          </div>
          <div className="card">
            <h3>Misi</h3>
            <p>Menghadirkan solusi teknologi yang aman, cerdas, dan inovatif melalui riset dan kolaborasi.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
