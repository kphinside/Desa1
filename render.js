/* ============================================================
   RENDER.JS — Render data dummy & fitur pencarian/filter
   ============================================================ */

/* Util: format tanggal Indonesia */
function fmtTanggal(iso) {
  const d = new Date(iso);
  return d.toLocaleDateString('id-ID', { day:'numeric', month:'long', year:'numeric' });
}

/* ---------- BERITA: list & detail ---------- */
function renderBeritaList(targetId, limit) {
  const el = document.getElementById(targetId);
  if (!el || typeof DATA_BERITA === 'undefined') return;
  const items = limit ? DATA_BERITA.slice(0, limit) : DATA_BERITA;
  el.innerHTML = items.map(b => `
    <article class="berita-card fade-up">
      <div class="berita-thumb">${b.emoji}</div>
      <div class="berita-body">
        <div class="berita-meta"><span class="badge">${b.kategori}</span> &nbsp;${fmtTanggal(b.tgl)}</div>
        <h3><a href="berita-detail.html?id=${b.id}">${b.judul}</a></h3>
        <p>${b.ringkasan}</p>
        <a href="berita-detail.html?id=${b.id}">Baca selengkapnya →</a>
      </div>
    </article>
  `).join('');
}

function renderBeritaDetail(targetId) {
  const el = document.getElementById(targetId);
  if (!el) return;
  const id = parseInt(new URLSearchParams(location.search).get('id') || '1', 10);
  const b = DATA_BERITA.find(x => x.id === id) || DATA_BERITA[0];
  el.innerHTML = `
    <article class="content-card">
      <div class="berita-meta"><span class="badge">${b.kategori}</span> &nbsp;${fmtTanggal(b.tgl)}</div>
      <h2>${b.judul}</h2>
      <div style="aspect-ratio:16/7;background:linear-gradient(135deg,var(--color-primary),var(--color-accent));border-radius:var(--radius);display:grid;place-items:center;color:#fff;font-size:5rem;margin:1rem 0;">${b.emoji}</div>
      <p>${b.ringkasan}</p>
      <p>Pemerintah Desa terus berkomitmen untuk meningkatkan pelayanan publik dan pembangunan berkelanjutan. Kegiatan ini merupakan bagian dari program kerja yang telah disusun bersama BPD dan masyarakat dalam musyawarah desa.</p>
      <p>Diharapkan dengan adanya kegiatan ini, kesejahteraan masyarakat desa dapat terus meningkat dan pelayanan menjadi semakin baik dari waktu ke waktu.</p>
      <p><a href="berita.html">← Kembali ke daftar berita</a></p>
    </article>
  `;
}

/* ---------- GALERI: render + filter ---------- */
function renderGaleri(targetId, chipsId) {
  const el = document.getElementById(targetId);
  if (!el || typeof DATA_GALERI === 'undefined') return;
  const draw = (kat) => {
    const items = kat === 'all' ? DATA_GALERI : DATA_GALERI.filter(g => g.kategori === kat);
    el.innerHTML = items.length ? items.map(g => `
      <div class="gallery-item" data-kategori="${g.kategori}">
        <span>${g.emoji}</span>
        <div class="caption">${g.judul}</div>
      </div>
    `).join('') : '<p class="empty-state">Tidak ada data.</p>';
  };
  draw('all');
  const chips = document.getElementById(chipsId);
  if (chips) {
    chips.addEventListener('click', e => {
      if (!e.target.classList.contains('chip')) return;
      chips.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
      e.target.classList.add('active');
      draw(e.target.dataset.kategori);
    });
  }
}

/* ---------- DOKUMEN: tabel + filter + search ---------- */
function renderDokumen(tbodyId, searchId, kategoriId) {
  const tbody = document.getElementById(tbodyId);
  if (!tbody) return;
  const draw = () => {
    const q = (document.getElementById(searchId)?.value || '').toLowerCase();
    const kat = document.getElementById(kategoriId)?.value || 'all';
    const rows = DATA_DOKUMEN.filter(d =>
      (kat === 'all' || d.kategori === kat) &&
      (d.nama.toLowerCase().includes(q) || d.kategori.toLowerCase().includes(q))
    );
    tbody.innerHTML = rows.length ? rows.map((d,i) => `
      <tr>
        <td>${i+1}</td>
        <td>${d.nama}</td>
        <td><span class="badge">${d.kategori}</span></td>
        <td>${d.tipe}</td>
        <td>${d.ukuran}</td>
        <td>${fmtTanggal(d.tgl)}</td>
        <td><a class="btn-sm" href="documents/${encodeURIComponent(d.nama)}.${d.tipe.toLowerCase()}" download>Unduh</a></td>
      </tr>
    `).join('') : '<tr><td colspan="7" class="empty-state">Tidak ada dokumen ditemukan.</td></tr>';
  };
  draw();
  document.getElementById(searchId)?.addEventListener('input', draw);
  document.getElementById(kategoriId)?.addEventListener('change', draw);
}

/* ---------- JDIH: tabel + search ---------- */
function renderJDIH(tbodyId, searchId, jenisId) {
  const tbody = document.getElementById(tbodyId);
  if (!tbody) return;
  const draw = () => {
    const q = (document.getElementById(searchId)?.value || '').toLowerCase();
    const j = document.getElementById(jenisId)?.value || 'all';
    const rows = DATA_JDIH.filter(d =>
      (j === 'all' || d.jenis === j) &&
      (d.judul.toLowerCase().includes(q) || d.nomor.toLowerCase().includes(q))
    );
    tbody.innerHTML = rows.length ? rows.map((d,i) => `
      <tr>
        <td>${i+1}</td>
        <td>${d.nomor}</td>
        <td>${d.judul}</td>
        <td>${d.jenis}</td>
        <td>${d.tahun}</td>
        <td>${d.status === 'Berlaku'
          ? '<span class="badge" style="background:var(--color-primary-light)">Berlaku</span>'
          : '<span class="badge" style="background:#999">Tidak Berlaku</span>'}</td>
        <td><a class="btn-sm" href="#">Lihat</a></td>
      </tr>
    `).join('') : '<tr><td colspan="7" class="empty-state">Tidak ada peraturan ditemukan.</td></tr>';
  };
  draw();
  document.getElementById(searchId)?.addEventListener('input', draw);
  document.getElementById(jenisId)?.addEventListener('change', draw);
}

/* ---------- PERANGKAT DESA (struktur organisasi) ---------- */
function renderPerangkat(targetId) {
  const el = document.getElementById(targetId);
  if (!el || typeof DATA_PERANGKAT === 'undefined') return;
  el.innerHTML = DATA_PERANGKAT.map(p => `
    <div class="layanan-card fade-up">
      <div class="icon">${p.emoji}</div>
      <h3>${p.nama}</h3>
      <p>${p.jabatan}</p>
    </div>
  `).join('');
}
