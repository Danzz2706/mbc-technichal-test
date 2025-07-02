// src/pages/ContactPage.jsx
import { useState } from 'react';
import axios from 'axios';
import './ContactPage.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/api/contact', formData);
      alert(response.data.message);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      alert('Pesan gagal dikirim. Silakan coba lagi.');
    }
  };

  return (
    <div className="contact-container">
      <h1>Hubungi Kami Disini</h1>
      <p>Kirimkan Keluhan atau Saran Anda Disini</p>
      <div className="contact-content">
        <form onSubmit={handleSubmit} className="contact-form">
          <input type="text" name="name" placeholder="Nama Anda" value={formData.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email Anda" value={formData.email} onChange={handleChange} required />
          <textarea name="message" rows="6" placeholder="Pesan Anda" value={formData.message} onChange={handleChange} required></textarea>
          <button type="submit">Kirim Pesan</button>
        </form>
        <div className="contact-info">
          <h3>Informasi Kontak</h3>
          <p><strong>Alamat:</strong> Jl.Telekomunikasi No.1, Bandung</p>
          <p><strong>Telepon:</strong> 081234567890</p>
          <p><strong>Email:</strong> zaidanmunadi@gmail.com</p>
          <div className="map-container">
            {/* Sematkan Google Maps di sini */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.304448078607!2d107.62776571121461!3d-6.973362592998255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e9adf177bf8d%3A0x437398556f9fa03!2sUniversitas%20Telkom!5e0!3m2!1sid!2sid!4v1751470605685!5m2!1sid!2sid" 
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;