// Lokasi file: /api/contact.js di dalam proyek backend Anda

const nodemailer = require('nodemailer');

// "Pembungkus" yang menambahkan header izin (CORS)
const allowCors = fn => async (req, res) => {
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*'); // Mengizinkan request dari semua domain
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  // Menangani request 'OPTIONS' (pre-flight) dari browser
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }
  return await fn(req, res);
};

// Handler utama untuk mengirim email
async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Hanya metode POST yang diizinkan' });
  }

  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: name,
    to: process.env.EMAIL_USER,
    subject: `Pesan Baru dari Landing Page MBC dari ${name}`,
    html: `<h3>Pesan Baru</h3><p><strong>Nama:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Pesan:</strong></p><p>${message}</p>`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ status: 'SUCCESS', message: 'Pesan berhasil dikirim!' });
  } catch (error) {
    console.error('Error di server Nodemailer:', error);
    return res.status(500).json({ status: 'FAIL', message: 'Gagal mengirim email dari server.' });
  }
}

// Export handler yang sudah dibungkus dengan allowCors
export default allowCors(handler);
