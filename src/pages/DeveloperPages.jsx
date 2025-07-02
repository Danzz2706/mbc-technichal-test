// src/pages/DeveloperPage.jsx
import './DeveloperPage.css';
import myProfilePic from '../assets/myProfilePic.jpg';


const DeveloperPage = () => {
  return (
    <div className="developer-container">
      <img src={myProfilePic} alt="Developer" className="developer-photo" />
      <h1>Sang Nakhoda Proyek</h1>
      <h2>Zaidan Kamil Munadi</h2>
      <p className="developer-bio">
        Seorang pemuda yang sedang berusaha untuk meningkatkan skill dan kreativitas melalui oprec assistant research MBC Laborataroy dan berharap lab ini dapat menjadi wadah bagi saya untuk menggapai impian.
      </p>
      <h3>Kompetensi Teknis (Peralatan Navigasi)</h3>
      <ul className="skills-list">
        <li>React</li>
        <li>Node.js & Express</li>
        <li>JavaScript (ES6+)</li>
        <li>HTML5 & CSS3</li>
        <li>Git & GitHub</li>
      </ul>
      <a href="https://github.com/Danzz2706" target="_blank" rel="noopener noreferrer" className="cta-button">
        Lihat Logbook di GitHub
      </a>
    </div>
  );
};

export default DeveloperPage;