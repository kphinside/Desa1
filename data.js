/* ============================================================
   DATA.JS — Data dummy realistis untuk template
   Gantilah dengan data desa Anda saat menggunakan template ini.
   ============================================================ */

const DATA_BERITA = [
  { id:1, judul:'Musyawarah Desa Bahas RKP Tahun 2025', kategori:'Pemerintahan', tgl:'2025-05-20', ringkasan:'Pemerintah Desa menyelenggarakan musrenbangdes untuk menyusun rencana kerja pembangunan tahun anggaran 2025.', emoji:'📋' },
  { id:2, judul:'Posyandu Balita Mei Capai 95% Kehadiran', kategori:'Kesehatan', tgl:'2025-05-15', ringkasan:'Kegiatan rutin posyandu di seluruh dusun berjalan lancar dengan tingkat kunjungan tertinggi tahun ini.', emoji:'🏥' },
  { id:3, judul:'Penyaluran BLT-DD Tahap 2 Tahun 2025', kategori:'Sosial', tgl:'2025-05-10', ringkasan:'Sebanyak 86 Keluarga Penerima Manfaat menerima BLT Dana Desa tahap kedua secara serentak.', emoji:'💰' },
  { id:4, judul:'Gotong Royong Pembersihan Saluran Irigasi', kategori:'Lingkungan', tgl:'2025-05-05', ringkasan:'Warga bersama perangkat desa melaksanakan kerja bakti membersihkan saluran irigasi sepanjang 2 km.', emoji:'🌱' },
  { id:5, judul:'Pelatihan UMKM Pengolahan Hasil Pertanian', kategori:'Ekonomi', tgl:'2025-04-28', ringkasan:'BUMDes menggelar pelatihan pengolahan hasil pertanian bekerjasama dengan Dinas Koperasi.', emoji:'🌾' },
  { id:6, judul:'Sosialisasi Stunting & Pemberian PMT', kategori:'Kesehatan', tgl:'2025-04-22', ringkasan:'Tim PKK dan kader kesehatan memberikan pemberian makanan tambahan kepada balita berisiko stunting.', emoji:'👶' },
];

const DATA_GALERI = [
  { kategori:'kegiatan', judul:'Musrenbangdes 2025', emoji:'📋' },
  { kategori:'kegiatan', judul:'Posyandu Balita', emoji:'🏥' },
  { kategori:'pembangunan', judul:'Pembangunan Jalan Dusun', emoji:'🛣️' },
  { kategori:'pembangunan', judul:'Renovasi Balai Desa', emoji:'🏛️' },
  { kategori:'budaya', judul:'Festival Budaya Desa', emoji:'🎭' },
  { kategori:'budaya', judul:'Tari Tradisional', emoji:'💃' },
  { kategori:'alam', judul:'Persawahan Desa', emoji:'🌾' },
  { kategori:'alam', judul:'Sungai Bersih', emoji:'🏞️' },
  { kategori:'kegiatan', judul:'Gotong Royong', emoji:'🤝' },
  { kategori:'pembangunan', judul:'Jembatan Penghubung', emoji:'🌉' },
  { kategori:'video', judul:'Video Profil Desa', emoji:'🎬' },
  { kategori:'video', judul:'Dokumenter UMKM', emoji:'📹' },
];

const DATA_DOKUMEN = [
  { nama:'APBDes Tahun Anggaran 2025', kategori:'Anggaran', tipe:'PDF', ukuran:'1.2 MB', tgl:'2025-01-15' },
  { nama:'Laporan Realisasi APBDes 2024', kategori:'Anggaran', tipe:'PDF', ukuran:'2.4 MB', tgl:'2025-02-10' },
  { nama:'RPJM Desa 2024-2029', kategori:'Perencanaan', tipe:'PDF', ukuran:'4.8 MB', tgl:'2024-12-20' },
  { nama:'RKP Desa Tahun 2025', kategori:'Perencanaan', tipe:'PDF', ukuran:'2.1 MB', tgl:'2024-12-22' },
  { nama:'Formulir Surat Pengantar KTP', kategori:'Formulir', tipe:'DOCX', ukuran:'45 KB', tgl:'2025-01-05' },
  { nama:'Formulir Surat Keterangan Domisili', kategori:'Formulir', tipe:'DOCX', ukuran:'42 KB', tgl:'2025-01-05' },
  { nama:'Formulir Surat Keterangan Usaha', kategori:'Formulir', tipe:'DOCX', ukuran:'48 KB', tgl:'2025-01-05' },
  { nama:'Profil Desa Tahun 2024', kategori:'Profil', tipe:'PDF', ukuran:'3.6 MB', tgl:'2024-11-30' },
  { nama:'Monografi Desa', kategori:'Profil', tipe:'PDF', ukuran:'1.8 MB', tgl:'2024-11-30' },
  { nama:'Laporan Penyelenggaraan Pemdes 2024', kategori:'Laporan', tipe:'PDF', ukuran:'5.2 MB', tgl:'2025-03-01' },
];

const DATA_JDIH = [
  { nomor:'01/2025', judul:'Peraturan Desa tentang APBDes Tahun 2025', jenis:'Perdes', tahun:2025, status:'Berlaku' },
  { nomor:'02/2025', judul:'Peraturan Desa tentang Pungutan Desa', jenis:'Perdes', tahun:2025, status:'Berlaku' },
  { nomor:'05/2024', judul:'Peraturan Desa tentang RPJM Desa 2024-2029', jenis:'Perdes', tahun:2024, status:'Berlaku' },
  { nomor:'06/2024', judul:'Peraturan Desa tentang BUMDes', jenis:'Perdes', tahun:2024, status:'Berlaku' },
  { nomor:'12/2024', judul:'Peraturan Kepala Desa tentang Pelaksanaan APBDes', jenis:'Perkades', tahun:2024, status:'Berlaku' },
  { nomor:'08/2023', judul:'Peraturan Desa tentang Kawasan Bebas Sampah', jenis:'Perdes', tahun:2023, status:'Berlaku' },
  { nomor:'03/2023', judul:'Peraturan Desa tentang Pengelolaan Aset Desa', jenis:'Perdes', tahun:2023, status:'Berlaku' },
  { nomor:'15/2022', judul:'SK Kepala Desa tentang Tim Penyusun RKP', jenis:'SK', tahun:2022, status:'Tidak Berlaku' },
];

const DATA_PERANGKAT = [
  { nama:'H. Ahmad Suryanto, S.Sos', jabatan:'Kepala Desa', emoji:'👨‍💼' },
  { nama:'Bambang Wijaya, S.E.', jabatan:'Sekretaris Desa', emoji:'👨‍💼' },
  { nama:'Siti Nurhaliza, S.Pd.', jabatan:'Kaur Tata Usaha & Umum', emoji:'👩‍💼' },
  { nama:'Budi Santoso', jabatan:'Kaur Keuangan', emoji:'👨‍💼' },
  { nama:'Dewi Lestari, S.Kom.', jabatan:'Kaur Perencanaan', emoji:'👩‍💼' },
  { nama:'Joko Prasetyo', jabatan:'Kasi Pemerintahan', emoji:'👨‍💼' },
  { nama:'Rina Marlina', jabatan:'Kasi Kesejahteraan', emoji:'👩‍💼' },
  { nama:'Agus Hermawan', jabatan:'Kasi Pelayanan', emoji:'👨‍💼' },
];
