8## 1. Pendahuluan dan Tujuan Proyek
Proyek ini adalah implementasi dari tugas technical test untuk rekrutmen Research Assistant Laboratorium MBC 2025. Tujuannya adalah untuk membangun sebuah landing page yang fungsional, profesional, dan modern yang merepresentasikan citra Laboratorium MBC di ranah digital.

Website ini dikembangkan sebagai Single-Page Application (SPA) menggunakan React (dengan build tool Vite) untuk membangun antarmuka pengguna (frontend) yang interaktif. Untuk fungsionalitas backend, khususnya pada formulir kontak, proyek ini memanfaatkan Node.js yang di-deploy sebagai Serverless Function di platform cloud Vercel.


## 2.Penjelasan Struktur Proyek


Arsitektur proyek ini dirancang dengan memisahkan tugas antara frontend, backend, dan aset statis untuk kemudahan pengelolaan dan skalabilitas.

Folder /src: Ini adalah jantung dari aplikasi frontend React. Semua komponen, halaman, styling (CSS), dan logika antarmuka pengguna berada di sini. Penggunaan folder /components untuk elemen yang dapat digunakan kembali (seperti Navbar dan Footer) dan /pages untuk tampilan halaman utama (seperti Home, Contact) memastikan kode tetap terorganisir.

Folder /public: Folder ini berisi aset statis yang tidak perlu diproses oleh Vite, seperti favicon.ico atau gambar logo utama. File di sini akan disalin langsung ke direktori build dan bisa diakses dari root domain.

Folder /api: Ini adalah direktori khusus untuk backend. Vercel secara otomatis mendeteksi folder ini dan memperlakukan setiap file JavaScript di dalamnya sebagai Serverless Function yang terpisah. Dalam proyek ini, api/contact.js berfungsi sebagai endpoint backend kita.

File index.html: Ini adalah kerangka HTML utama tempat aplikasi React "disuntikkan" ke dalam <div id="root">. File ini juga merupakan tempat untuk mengatur judul website dan ikon tab (favicon).

File vercel.json: File konfigurasi ini krusial untuk deployment di Vercel. Isinya memberikan instruksi "rewrite" yang memastikan semua permintaan URL diarahkan ke index.html, memungkinkan react-router-dom untuk menangani routing di sisi klien (browser) tanpa menyebabkan error 404.

## 3. Alur Kerja Frontend
Aplikasi frontend dibangun sebagai SPA, yang berarti pengguna dapat bernavigasi antar halaman tanpa perlu me-reload seluruh website, menciptakan pengalaman yang lebih cepat dan mulus.

Inisialisasi: Saat pengguna pertama kali mengunjungi website, Vercel menyajikan file index.html. Skrip dari Vite (main.jsx) kemudian berjalan, me-render komponen utama <App /> ke dalam DOM.

Routing: Komponen App.jsx bertindak sebagai pengatur utama. Di dalamnya, react-router-dom digunakan untuk memetakan path URL (misalnya /, /divisions, /contact) ke komponen Halaman yang sesuai (HomePage, DivisionsPage, ContactPage). Ketika pengguna mengklik link navigasi (yang menggunakan komponen <Link>), React Router secara dinamis menukar komponen yang ditampilkan tanpa request baru ke server.

Layout: App.jsx juga mendefinisikan layout global, termasuk <Navbar> di bagian atas dan <Footer> di bagian bawah. Dengan menggunakan layout Flexbox pada container utama (.app-container), footer dipastikan selalu berada di bagian bawah halaman, bahkan jika kontennya pendek.


## 4.Alur Kerja Backend dan Formulir Kontak



Fungsionalitas backend proyek ini terpusat pada formulir kontak dan diimplementasikan sebagai berikut:

Pengiriman Data: Pengguna mengisi formulir di ContactPage.jsx. Saat tombol "Kirim Pesan" diklik, fungsi handleSubmit di dalam komponen React akan terpicu.

Request API: Fungsi ini menggunakan library Axios untuk membuat request POST HTTP ke endpoint backend di /api/contact. Data dari formulir (nama, email, pesan) dikirimkan dalam format JSON di dalam body request.

Eksekusi Serverless Function: Vercel menerima request ke /api/contact dan secara otomatis menjalankan kode di dalam file api/contact.js.

Proses di Backend:

Kode di api/contact.js pertama-tama memverifikasi bahwa request yang masuk adalah metode POST.

Kemudian, ia menggunakan library Nodemailer untuk membuat koneksi aman ke server SMTP Google.

Kredensial untuk login ke akun email (username dan "App Password") tidak disimpan dalam kode, melainkan diambil dari 

Environment Variables yang telah dikonfigurasi secara aman di Vercel. 

Pengiriman Email: Nodemailer memformat data dari formulir menjadi sebuah email HTML yang terstruktur dan mengirimkannya ke alamat email tujuan yang telah ditentukan.

Respons ke Frontend: Setelah email berhasil (atau gagal) dikirim, backend akan mengirimkan kembali respons status ke frontend (misalnya, { status: 'SUCCESS', message: '...' }).

Notifikasi Pengguna: Frontend menerima respons ini dan menampilkan notifikasi alert() kepada pengguna untuk memberitahukan status pengiriman pesan mereka.


## 5.Deployment dan Konfigurasi SSL


Proses deployment proyek ini sepenuhnya otomatis berkat integrasi antara Git, GitHub, dan Vercel.

Alur Git-Ops: Setiap kali ada perubahan baru yang di-push ke branch main di repository GitHub, Vercel secara otomatis mendeteksi perubahan tersebut dan memulai proses deployment baru.

Build Process: Vercel menjalankan perintah npm run build untuk mengkompilasi aplikasi React menjadi file statis yang optimal. Vercel juga secara cerdas mengidentifikasi folder /api dan menyiapkannya sebagai serverless functions.

SSL Otomatis: Keamanan koneksi dijamin melalui HTTPS. Vercel secara otomatis menyediakan dan mengelola sertifikat SSL untuk setiap proyek yang di-deploy. Proses ini tidak memerlukan konfigurasi manual sama sekali, memastikan bahwa semua komunikasi antara pengguna dan website terenkripsi. 

Penjelasan ini mencakup seluruh aspek teknis dari proyek Technical ini, dari struktur, alur kerja, hingga deployment dan keamanan, sesuai dengan yang disyaratkan dalam panduan.
