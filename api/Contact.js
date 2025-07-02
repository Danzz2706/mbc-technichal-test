const nodemailer = require('nodemailer');

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const { name, email, message } = req.body;

  const mailOptions = {
    from: name,
    to: process.env.EMAIL_USER,
    subject: `Pesan Baru dari Landing Page MBC dari ${name}`,
    html: `<h3>Pesan Baru</h3><p><strong>Nama:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Pesan:</strong></p><p>${message}</p>`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ status: 'SUCCESS', message: 'Pesan berhasil dikirim!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: 'FAIL', message: 'Gagal mengirim pesan.' });
  }
}