# Landing Page Laboratorium MBC - Technical Test 2025

[cite_start]Proyek ini merupakan submisi untuk *Technical Test* pada rangkaian seleksi Research Assistant di Laboratorium MBC tahun 2025[cite: 9]. [cite_start]Tujuannya adalah membangun sebuah landing page interaktif yang mampu menampilkan profil, layanan, dan kompetensi Laboratorium MBC kepada publik[cite: 22]. Website ini dikembangkan menggunakan React (Vite) untuk frontend dan Node.js (Vercel Serverless Function) untuk fungsionalitas backend pada formulir kontak.

## Live Demo

**[Lihat Website Langsung]([GANTI_DENGAN_URL_VERCEL_ANDA])**

## Screenshot

![Screenshot Landing Page]([GANTI_DENGAN_URL_SCREENSHOT_ANDA])

## [cite_start]Struktur Proyek [cite: 49]

Struktur folder proyek ini dirancang untuk memisahkan antara backend, frontend, dan aset publik agar mudah dikelola.
## Teknologi yang Digunakan

* **Frontend:** React (Vite), JavaScript, CSS3
* **Routing:** React Router DOM
* **HTTP Client:** Axios
* **Backend:** Node.js (Vercel Serverless Function)
* **Pengiriman Email:** Nodemailer
* **Deployment:** Vercel

## [cite_start]Instruksi Instalasi Lokal [cite: 49]

Untuk menjalankan proyek ini di komputer lokal, ikuti langkah-langkah berikut:

1.  **Clone repository ini:**
    ```bash
    git clone [GANTI_DENGAN_URL_REPOSITORY_GITHUB_ANDA]
    ```
2.  **Masuk ke direktori proyek:**
    ```bash
    cd nama-folder-proyek
    ```
3.  **Install semua dependensi:**
    ```bash
    npm install
    ```
4.  **Jalankan server pengembangan:**
    ```bash
    npm run dev
    ```
5.  Buka [http://localhost:5173](http://localhost:5173) di browser Anda.

> **Catatan:** Dalam mode pengembangan lokal, formulir kontak tidak akan berfungsi karena backend dirancang untuk berjalan di lingkungan Serverless Vercel dan memanggil *endpoint* `/api/contact` yang hanya aktif setelah di-deploy.

## [cite_start]Deployment [cite: 50]

Proyek ini di-deploy ke Vercel dan akan otomatis ter-update setiap kali ada perubahan pada branch `main` di GitHub.

1.  **Push Kode:** Unggah semua perubahan ke repository GitHub Anda.
2.  **Hubungkan ke Vercel:** Impor repository dari GitHub ke Vercel. Vercel akan otomatis mendeteksi ini sebagai proyek Vite.
3.  **Konfigurasi Environment Variables:** Atur semua variabel yang dibutuhkan backend di menu **Settings -> Environment Variables** pada dashboard Vercel.
4.  **Deploy:** Vercel akan otomatis men-deploy proyek.

## Konfigurasi

### [cite_start]Konfigurasi Backend [cite: 50]

Backend untuk formulir kontak diimplementasikan sebagai Node.js Serverless Function yang berlokasi di `/api/contact.js`.

* **Endpoint:** `/api/contact`
* **Fungsionalitas:** Menerima data dari formulir, lalu menggunakan Nodemailer dan akun Gmail untuk mengirimkan data tersebut sebagai email.
* **Kredensial:** Konfigurasi kredensial email diatur sepenuhnya melalui **Environment Variables** di Vercel untuk keamanan, bukan menggunakan file `.env`. Variabel yang dibutuhkan adalah:
    * `EMAIL_USER`: Alamat email Gmail pengirim.
    * `EMAIL_PASS`: Sandi Aplikasi (App Password) 16 digit dari Akun Google.

### [cite_start]Konfigurasi SSL (HTTPS) [cite: 50]

[cite_start]Sertifikat keamanan SSL untuk website ini diatur dan diperbarui secara **otomatis oleh Vercel**[cite: 45]. Saat proyek di-deploy, Vercel langsung menyediakan sertifikat yang valid dan mengaktifkan HTTPS untuk semua domain. Tidak ada konfigurasi manual yang diperlukan.
