// src/pages/DivisionsPage.jsx
import './DivisionPage.css';
import { FaShieldAlt, FaDatabase, FaGlobeAmericas, FaGamepad } from 'react-icons/fa';
const divisions = [
  {
    icon: <FaShieldAlt size={50} />,
    name: 'Cybersecurity',
    description: 'Menjaga ekosistem digital Anda dari badai ancaman siber dengan pertahanan berlapis.jadi Cyber Security adalah praktik melindungi sistem, jaringan, perangkat, dan data dari serangan digital atau akses yang tidak sah. Ini mencakup berbagai tindakan, mulai dari penggunaan teknologi seperti firewall dan enkripsi, hingga penerapan kebijakan dan proses keamanan yang kuat. Tujuan utamanya adalah menjaga kerahasiaan, integritas, dan ketersediaan informasi dalam lingkungan digital. '
  },
  {
    icon: <FaDatabase size={50} />,
    name: 'Big Data',
    description: 'Mengungkap harta karun wawasan dari lautan data yang luas untuk keputusan strategis. Pada umumnya pengertian big data yaitu kumpulan data yang sangat besar dan kompleks, yang terus tumbuh secara eksponensial, dan tidak dapat diproses atau dianalisis menggunakan alat pemrosesan data tradisional. Big data mencakup data terstruktur, tidak terstruktur, dan semi-terstruktur, dan biasanya digunakan untuk membantu kegiatan bisnis dan pengambilan keputusan. '
  },
  {
    icon: <FaGlobeAmericas size={50} />,
    name: 'GIS',
    description: 'Memetakan dunia Anda, menemukan rute baru, dan menganalisis data spasial seperti seorang navigator ulung. GIS adalah teknologi yang memungkinkan pemetaan, analisis, dan pengambilan keputusan berdasarkan data spasial. Ini membantu dalam pembuatan peta, navigasi, dan pengambilan keputusan berdasarkan lokasi geografis. GIS digunakan dalam berbagai bidang, termasuk pemetaan infrastruktur, perencanaan kota, dan analisis lingkungan. jadi singkatan GIS adalah Geographic Information System. '
  },
  {
    icon: <FaGamepad size={50} />,
    name: 'Game Technology',
    description: 'Menciptakan dunia baru yang imersif dan petualangan tak terlupakan di samudra digital. Game Technology adalah bidang yang menggabungkan teknologi dan seni untuk menciptakan pengalaman permainan yang interaktif dan realistis. Ini mencakup berbagai aspek, seperti pengembangan perangkat lunak, desain grafis, audio, dan animasi. Game Technology juga melibatkan penggunaan teknologi seperti virtual reality, augmented reality, dan artificial intelligence untuk menciptakan pengalaman permainan yang lebih realistis dan interaktif. '
  }
];

const DivisionsPage = () => {
  return (
    <div className="divisions-container">
      <h1>Ekspedisi Divisi Teknologi</h1>
      <p>Setiap divisi adalah kru ahli kami dalam ekspedisi menjelajahi kedalaman teknologi.</p>
      <div className="divisions-grid">
        {divisions.map((div, index) => (
          <div className="division-card" key={index}>
            <div className="division-icon">{div.icon}</div>
            <h3>{div.name}</h3>
            <p>{div.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DivisionsPage;