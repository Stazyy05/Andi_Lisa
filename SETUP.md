# Andi Lisa - Will You Be My Girlfriend? 💕

Website romantis interaktif dengan tombol Yes/No yang playful dan integrasi WhatsApp.

## 🎨 Fitur Utama

- **Pertanyaan Romantis**: "Will You Be My Girlfriend?" dengan desain yang elegan
- **Karakter Animasi**: Andi Lisa yang menggemaskan dengan berbagai ekspresi emosi
- **Tombol No yang Lari**: Tombol "No" akan bergerak menjauh saat cursor mendekat
- **Tombol Yes yang Responsif**: Hanya tombol "Yes" yang bisa diklik
- **Animasi Confetti**: Efek perayaan saat "Yes" ditekan
- **Notifikasi Sukses**: Pesan yang muncul setelah "Yes" ditekan
- **Integrasi WhatsApp**: Tombol untuk mengirim pesan otomatis ke WhatsApp

## 🔧 Konfigurasi WhatsApp

Untuk mengaktifkan fitur WhatsApp, Anda perlu mengganti nomor telepon di file `client/src/pages/Home.tsx`:

1. Buka file `client/src/pages/Home.tsx`
2. Cari fungsi `handleWhatsAppClick()`
3. Ganti `const phoneNumber = "62";` dengan nomor telepon Anda
   - Format: `62XXXXXXXXXX` (tanpa tanda +)
   - Contoh: `6281234567890`

```typescript
const handleWhatsAppClick = () => {
  const phoneNumber = "6281234567890"; // Ganti dengan nomor Anda
  const message = "Iya, aku ingin menjadi pacarmu dan selalu bersamamu 💕";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, "_blank");
};
```

## 🎯 Cara Kerja

### Halaman Awal
- Menampilkan pertanyaan "Will You Be My Girlfriend?"
- Karakter Andi Lisa dengan ekspresi malu (shy)
- Dua tombol: "Yes" (pink) dan "No" (gray)
- Hint text: "Try to click the 'No' button... 😉"

### Interaksi Tombol No
- Ketika cursor mendekat ke tombol "No" (dalam radius 80px), tombol akan bergerak menjauh
- Gerakan smooth dengan durasi 150ms
- Karakter berubah menjadi ekspresi "thinking" saat tombol bergerak
- Ketika cursor menjauh, tombol kembali ke posisi awal

### Klik Tombol Yes
1. Karakter berubah menjadi ekspresi "excited" (senang)
2. Notifikasi toast muncul: "Yeah, akhirnya princess ini ingin menjadi pacarku! 💕"
3. Efek confetti (partikel jatuh) dipicu
4. Halaman berubah ke success state

### Halaman Success
- Karakter Andi Lisa dengan ekspresi excited
- Pesan: "Yeah! 💕"
- Sub-pesan: "Akhirnya princess ini ingin menjadi pacarku!"
- Tombol "Send Message on WhatsApp" (hijau)
- Pesan motivasi: "✨ Saatnya kita mulai petualangan baru bersama ✨"

## 🎨 Desain

### Color Palette
- **Background**: Hitam (#0a0a0a) dengan gradient
- **Primary Accent**: Pink (#ff6b9d)
- **Text**: Putih (#f5f5f5)
- **Secondary**: Gray (#2a2a2a - #3a3a3a)

### Typography
- **Heading**: Poppins Bold (untuk pertanyaan utama)
- **Body**: Inter Regular (untuk supporting text)
- **Button**: Poppins SemiBold

### Animasi
- **Character Bounce**: 2s untuk shy, 0.6s untuk excited
- **Button Transition**: 150ms smooth
- **Confetti Fall**: 2.5s linear
- **Background Pulse**: Infinite dengan delay

## 📱 Responsif

Website fully responsive untuk:
- Mobile (320px+)
- Tablet (768px+)
- Desktop (1024px+)

## 🚀 Deployment

Website sudah siap untuk di-deploy. Semua aset (gambar karakter, background) sudah menggunakan CDN dan tidak akan menyebabkan timeout.

## 💡 Tips Personalisasi

Anda bisa menyesuaikan:
1. **Pesan WhatsApp**: Edit pesan di fungsi `handleWhatsAppClick()`
2. **Pesan Notifikasi**: Edit teks di `toast.success()`
3. **Pesan Success**: Edit teks di halaman success state
4. **Warna**: Edit color palette di `client/src/index.css`
5. **Durasi Animasi**: Edit nilai di CSS animations

## ⚠️ Catatan Penting

- Tombol "No" tidak bisa diklik (disabled) - hanya tombol "Yes" yang responsif
- Pesan WhatsApp akan dikirim ke nomor yang Anda konfigurasi
- Pastikan nomor WhatsApp sudah benar sebelum deploy
- Website bekerja optimal di browser modern (Chrome, Firefox, Safari, Edge)

---

Dibuat dengan ❤️ untuk Andi Lisa
