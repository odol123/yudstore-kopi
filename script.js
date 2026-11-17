/* =========================================================
   Kopi & Roti
   ========================================================= */
(() => {
  "use strict";

  /* =========================================================
     1. DATA USAHA  —  ubah bagian ini
     ========================================================= */
  const USAHA = {
    nama: "Kopi & Roti",

    // Nomor WhatsApp: format internasional, tanpa tanda + dan tanpa spasi.
    wa: "6281234567890",

    // Kosongkan ("") baris yang tidak ingin ditampilkan di bagian Kontak.
    jamBuka: "Setiap hari, 06.00 – 20.00",
    alamat: "",
    telepon: "",

    // Ongkir ditulis apa adanya di pesan WhatsApp.
    ongkir: "Gratis untuk pesanan di atas Rp100.000 (area dekat).",
  };

  /* =========================================================
     2. KATEGORI
     ========================================================= */
  const KATEGORI = {
    roti:  { nama: "Roti",        kelas: "roti"  },
    kue:   { nama: "Kue",         kelas: "kue"   },
    kopi:  { nama: "Kopi & Minum", kelas: "kopi" },
    manis: { nama: "Camilan",     kelas: "manis" },
    paket: { nama: "Paket",       kelas: "paket" },
  };

  /* =========================================================
     3. PRODUK  —  ganti dengan produk asli Anda
     ---------------------------------------------------------
     id      : wajib unik
     nama    : nama produk
     kategori: kunci dari KATEGORI di atas
     harga   : angka rupiah, tanpa titik
     satuan  : keterangan jumlah, misal "per loyang"
     label   : "Terlaris", "Baru", "Hemat", atau kosongkan
     habis   : true kalau sedang tidak tersedia
     isi     : daftar keterangan singkat
     desk    : penjelasan produk
     laris   : angka untuk urutan "Paling laris"
     ========================================================= */
  const PRODUK = [
    {
      id: "p-roti-sobek",
      nama: "Roti Sobek Mentega",
      kategori: "roti",
      harga: 28000,
      satuan: "per loyang (isi 8)",
      label: "Terlaris",
      habis: false,
      isi: ["Isi 8 potong", "Mentega asli", "Cocok untuk sarapan"],
      desk: "Roti sobek lembut dengan olesan mentega dan taburan gula halus. Dipanggang pagi, paling enak dimakan hari itu.",
      laris: 98,
    },
    {
      id: "p-roti-kismis",
      nama: "Roti Kismis Susu",
      kategori: "roti",
      harga: 32000,
      satuan: "per loyang (isi 8)",
      label: "",
      habis: false,
      isi: ["Isi 8 potong", "Susu segar", "Kismis pilihan"],
      desk: "Roti susu dengan kismis yang direndam lebih dulu supaya tidak kering. Manisnya sedang, tidak berlebihan.",
      laris: 74,
    },
    {
      id: "p-roti-tawar",
      nama: "Roti Tawar Gandum",
      kategori: "roti",
      harga: 26000,
      satuan: "per bungkus",
      label: "",
      habis: false,
      isi: ["1 bungkus", "Tepung gandum", "Tanpa pengawet"],
      desk: "Roti tawar gandum untuk menu harian keluarga. Bisa dipanggang ulang atau dijadikan roti bakar.",
      laris: 66,
    },
    {
      id: "p-donat",
      nama: "Donat Gula Halus",
      kategori: "manis",
      harga: 21000,
      satuan: "per kotak (isi 6)",
      label: "Hemat",
      habis: false,
      isi: ["Isi 6 buah", "Digoreng segar", "Taburan gula halus"],
      desk: "Donat empuk dengan taburan gula halus. Digoreng saat dipesan supaya tetap hangat saat diterima.",
      laris: 82,
    },
    {
      id: "p-kue-lapis",
      nama: "Kue Lapis Legit",
      kategori: "kue",
      harga: 145000,
      satuan: "per loyang",
      label: "",
      habis: false,
      isi: ["1 loyang", "Dipanggang berlapis", "Tahan 3 hari"],
      desk: "Kue lapis legit yang dipanggang lapis demi lapis. Prosesnya lama, jadi pemesanan sebaiknya sehari sebelumnya.",
      laris: 71,
    },
    {
      id: "p-kue-basah",
      nama: "Kue Basah Campur",
      kategori: "kue",
      harga: 45000,
      satuan: "per kotak (isi 10)",
      label: "Terlaris",
      habis: false,
      isi: ["Isi 10 kue", "5 macam pilihan", "Cocok untuk acara"],
      desk: "Isi sepuluh kue basah dengan lima macam pilihan. Sering dipesan untuk arisan dan rapat kecil.",
      laris: 91,
    },
    {
      id: "p-brownies",
      nama: "Brownies Kukus Cokelat",
      kategori: "kue",
      harga: 68000,
      satuan: "per loyang",
      label: "",
      habis: true,
      isi: ["1 loyang", "Cokelat pekat", "Dikukus, tidak kering"],
      desk: "Brownies kukus dengan cokelat pekat. Teksturnya basah dan lembut, tidak cepat kering.",
      laris: 79,
    },
    {
      id: "p-kopi-tubruk",
      nama: "Kopi Tubruk Sachet",
      kategori: "kopi",
      harga: 35000,
      satuan: "per bungkus (isi 10)",
      label: "",
      habis: false,
      isi: ["Isi 10 sachet", "Kopi sangrai sendiri", "Tanpa gula"],
      desk: "Kopi tubruk dari biji yang disangrai sendiri. Digiling kasar supaya rasanya keluar saat diseduh.",
      laris: 69,
    },
    {
      id: "p-kopi-susu",
      nama: "Kopi Susu Botol",
      kategori: "kopi",
      harga: 24000,
      satuan: "per botol (500 ml)",
      label: "Baru",
      habis: false,
      isi: ["500 ml", "Gula terpisah", "Tahan 3 hari di kulkas"],
      desk: "Kopi susu siap minum dalam botol. Gulanya dipisah, jadi bisa diatur sesuai selera.",
      laris: 86,
    },
    {
      id: "p-teh-serai",
      nama: "Teh Serai Madu",
      kategori: "kopi",
      harga: 20000,
      satuan: "per botol (500 ml)",
      label: "",
      habis: false,
      isi: ["500 ml", "Serai segar", "Madu asli"],
      desk: "Teh serai dengan madu, disajikan dingin. Pilihan ringan kalau tidak ingin kopi.",
      laris: 57,
    },
    {
      id: "p-pisang",
      nama: "Pisang Goreng Wijen",
      kategori: "manis",
      harga: 18000,
      satuan: "per kotak (isi 8)",
      label: "Hemat",
      habis: false,
      isi: ["Isi 8 buah", "Pisang kepok", "Taburan wijen"],
      desk: "Pisang goreng berbalut tepung dengan taburan wijen. Renyah di luar, lembut di dalam.",
      laris: 76,
    },
    {
      id: "p-paket-sarapan",
      nama: "Paket Sarapan Keluarga",
      kategori: "paket",
      harga: 95000,
      satuan: "per paket",
      label: "Terlaris",
      habis: false,
      isi: ["1 loyang roti sobek", "2 botol kopi susu", "6 donat"],
      desk: "Paket hemat untuk sarapan keluarga. Isinya bisa ditukar dengan produk lain yang harganya setara.",
      laris: 88,
    },
    {
      id: "p-paket-hampers",
      nama: "Hampers Kue Kering",
      kategori: "paket",
      harga: 165000,
      satuan: "per hampers",
      label: "",
      habis: false,
      isi: ["3 macam kue kering", "Kemasan kotak", "Bisa pakai kartu ucapan"],
      desk: "Hampers berisi tiga macam kue kering dalam kotak. Cocok untuk hadiah dan kiriman akhir tahun.",
      laris: 62,
    },
    {
      id: "p-paket-acara",
      nama: "Paket Acara (50 kue)",
      kategori: "paket",
      harga: 320000,
      satuan: "per paket",
      label: "",
      habis: false,
      isi: ["50 kue basah", "5 macam pilihan", "Pesan H-1"],
      desk: "Paket untuk rapat, arisan, atau pengajian. Isi dan macamnya bisa disesuaikan dengan permintaan.",
      laris: 60,
    },
  ];

  /* =========================================================
     4. ULASAN
     ---------------------------------------------------------
     Isi hanya dengan ulasan asli yang Anda terima.
     Kalau daftar ini kosong, bagian ulasan otomatis disembunyikan
     supaya tidak ada ulasan yang dibuat-buat.
     ========================================================= */
  const ULASAN = [
    // { teks: "Rotinya lembut, anak-anak suka.", nama: "Ibu Rina", bintang: 5 },
  ];

  /* =========================================================
     PEMBANTU
     ========================================================= */
  const rp = (n) => "Rp" + n.toLocaleString("id-ID");
  const el = (id) => document.getElementById(id);

  /* =========================================================
     KEADAAN
     ========================================================= */
  const state = { filter: "semua", cari: "", urut: "laris" };

  /* =========================================================
     KERANJANG (produk + jumlah)
     ========================================================= */
  const KUNCI_SIMPAN = "kopi-roti-pesanan";

  let keranjang = [];   // bentuk: [{ id, jumlah }]
  try {
    const simpan = localStorage.getItem(KUNCI_SIMPAN);
    if (simpan) {
      const isi = JSON.parse(simpan);
      if (Array.isArray(isi)) {
        keranjang = isi.filter(
          (baris) =>
            baris &&
            typeof baris.id === "string" &&
            PRODUK.some((p) => p.id === baris.id) &&
            Number.isFinite(baris.jumlah) &&
            baris.jumlah > 0
        );
      }
    }
  } catch {
    keranjang = [];
  }

  const simpanKeranjang = () => {
    try {
      localStorage.setItem(KUNCI_SIMPAN, JSON.stringify(keranjang));
    } catch {
      /* localStorage diblokir, keranjang tetap jalan di memori */
    }
  };

  const produkById = (id) => PRODUK.find((p) => p.id === id);
  const barisProduk = (id) => keranjang.find((b) => b.id === id);

  const jumlahItem = () => keranjang.reduce((n, b) => n + b.jumlah, 0);

  const totalKeranjang = () =>
    keranjang.reduce((jumlah, b) => {
      const p = produkById(b.id);
      return p ? jumlah + p.harga * b.jumlah : jumlah;
    }, 0);

  /* =========================================================
     TOAST
     ========================================================= */
  const wadahToast = el("toasts");

  function toast(pesan) {
    if (!wadahToast) return;
    const t = document.createElement("div");
    t.className = "toast";
    t.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>';
    const span = document.createElement("span");
    span.textContent = pesan;
    t.appendChild(span);
    wadahToast.appendChild(t);
    setTimeout(() => {
      t.classList.add("is-out");
      setTimeout(() => t.remove(), 300);
    }, 2600);
  }

  /* =========================================================
     KATALOG
     ========================================================= */
  const grid = el("grid");
  const kosong = el("kosong");
  const hasil = el("hasil");

  const LABEL_DIPAKAI = ["Terlaris", "Baru", "Hemat"];

  function kartuHTML(p) {
    const k = KATEGORI[p.kategori];
    const label = LABEL_DIPAKAI.includes(p.label) ? p.label : "";
    return `
      <article class="card ${p.habis ? "is-sold" : ""}" data-id="${p.id}">
        <div class="card__thumb card__thumb--${k.kelas}">
          ${label ? `<span class="card__badge">${label}</span>` : ""}
          <span class="mark">${k.nama}</span>
          ${p.habis ? '<div class="card__sold">Habis</div>' : ""}
        </div>
        <div class="card__body">
          <div>
            <h3 class="card__name">${p.nama}</h3>
            <p class="card__kategori">${k.nama} · ${p.satuan}</p>
          </div>
          <p class="card__desc">${p.desk}</p>
          <div class="card__foot">
            <span class="price">${rp(p.harga)}</span>
            <div class="card__acts">
              <button class="iconbtn" type="button" data-detail="${p.id}" aria-label="Lihat detail ${p.nama}">
                <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8.5"/><path d="M12 11v5M12 8h.01"/></svg>
              </button>
              <button class="btn--add" type="button" data-add="${p.id}" ${p.habis ? "disabled" : ""}>
                ${p.habis ? "Habis" : "Pesan"}
              </button>
            </div>
          </div>
        </div>
      </article>`;
  }

  function daftarTampil() {
    const kata = state.cari.trim().toLowerCase();

    const daftar = PRODUK.filter((p) => {
      if (state.filter !== "semua" && p.kategori !== state.filter) return false;
      if (!kata) return true;
      const teks = [p.nama, KATEGORI[p.kategori].nama, p.desk, ...p.isi].join(" ").toLowerCase();
      return teks.includes(kata);
    });

    const urut = {
      laris: (a, b) => b.laris - a.laris,
      murah: (a, b) => a.harga - b.harga,
      mahal: (a, b) => b.harga - a.harga,
      nama: (a, b) => a.nama.localeCompare(b.nama, "id"),
    };
    daftar.sort(urut[state.urut] || urut.laris);
    return daftar;
  }

  function render() {
    const daftar = daftarTampil();
    grid.innerHTML = daftar.map(kartuHTML).join("");
    kosong.hidden = daftar.length > 0;

    const total = PRODUK.length;
    const tersedia = PRODUK.filter((p) => !p.habis).length;
    hasil.innerHTML =
      daftar.length === total
        ? `Menampilkan <strong>${total}</strong> produk, <strong>${tersedia}</strong> di antaranya tersedia hari ini.`
        : `Menampilkan <strong>${daftar.length}</strong> dari <strong>${total}</strong> produk.`;

    const stat = el("statProduk");
    if (stat) stat.textContent = String(tersedia);
  }

  /* Chip kategori */
  const chips = el("chips");

  function renderChips() {
    const daftar = [{ kunci: "semua", nama: "Semua" }].concat(
      Object.entries(KATEGORI).map(([kunci, k]) => ({ kunci, nama: k.nama }))
    );
    chips.innerHTML = daftar
      .map(
        (d) =>
          `<button class="chip-btn ${state.filter === d.kunci ? "is-active" : ""}" type="button"
                   data-filter="${d.kunci}" aria-pressed="${state.filter === d.kunci}">${d.nama}</button>`
      )
      .join("");
  }

  chips.addEventListener("click", (e) => {
    const tombol = e.target.closest("[data-filter]");
    if (!tombol) return;
    state.filter = tombol.dataset.filter;
    renderChips();
    render();
  });

  el("cari").addEventListener("input", (e) => {
    state.cari = e.target.value;
    render();
  });

  el("urut").addEventListener("change", (e) => {
    state.urut = e.target.value;
    render();
  });

  /* =========================================================
     KERANJANG
     ========================================================= */
  const drawer = el("drawer");
  const overlay = el("overlay");
  const isiKeranjang = el("isiKeranjang");
  const badge = el("jumlahKeranjang");
  const totalEl = el("totalKeranjang");
  const tombolCheckout = el("checkout");

  function renderKeranjang() {
    const jumlah = jumlahItem();
    badge.textContent = String(jumlah);
    badge.hidden = jumlah === 0;

    if (keranjang.length === 0) {
      isiKeranjang.innerHTML = `
        <div class="drawer__empty">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M4 5h2l2 9.5a2 2 0 0 0 2 1.5h7a2 2 0 0 0 2-1.5L20 8H6.5"/>
            <circle cx="10" cy="19.5" r="1.3"/><circle cx="17" cy="19.5" r="1.3"/>
          </svg>
          <span>Daftar pesanan masih kosong. Pilih produk dulu di menu.</span>
        </div>`;
    } else {
      isiKeranjang.innerHTML = keranjang
        .map((b) => {
          const p = produkById(b.id);
          if (!p) return "";
          const k = KATEGORI[p.kategori];
          return `
            <div class="item">
              <div>
                <p class="item__name">${p.nama}</p>
                <p class="item__meta">${k.nama} · ${p.satuan}</p>
              </div>
              <span class="item__price">${rp(p.harga * b.jumlah)}</span>

              <div class="qty">
                <button type="button" data-kurang="${p.id}" aria-label="Kurangi ${p.nama}"
                        ${b.jumlah <= 1 ? "disabled" : ""}>−</button>
                <span>${b.jumlah}</span>
                <button type="button" data-tambah="${p.id}" aria-label="Tambah ${p.nama}">+</button>
              </div>

              <button class="item__del" type="button" data-hapus="${p.id}">Hapus</button>
            </div>`;
        })
        .join("");
    }

    totalEl.textContent = rp(totalKeranjang());
    tombolCheckout.disabled = keranjang.length === 0;
  }

  function bukaKeranjang() {
    overlay.hidden = false;
    requestAnimationFrame(() => overlay.classList.add("is-open"));
    drawer.classList.add("is-open");
    drawer.setAttribute("aria-hidden", "false");
    document.body.classList.add("is-locked");
  }

  function tutupKeranjang() {
    overlay.classList.remove("is-open");
    drawer.classList.remove("is-open");
    drawer.setAttribute("aria-hidden", "true");
    document.body.classList.remove("is-locked");
    setTimeout(() => {
      if (!overlay.classList.contains("is-open")) overlay.hidden = true;
    }, 300);
  }

  el("bukaKeranjang").addEventListener("click", bukaKeranjang);
  el("tutupKeranjang").addEventListener("click", tutupKeranjang);
  overlay.addEventListener("click", tutupKeranjang);

  function tambah(id) {
    const p = produkById(id);
    if (!p || p.habis) return;
    const baris = barisProduk(id);
    if (baris) {
      baris.jumlah += 1;
    } else {
      keranjang.push({ id, jumlah: 1 });
    }
    simpanKeranjang();
    renderKeranjang();
    toast(`${p.nama} masuk daftar pesanan.`);
  }

  isiKeranjang.addEventListener("click", (e) => {
    const tambahBtn = e.target.closest("[data-tambah]");
    if (tambahBtn) {
      const baris = barisProduk(tambahBtn.dataset.tambah);
      if (baris) {
        baris.jumlah += 1;
        simpanKeranjang();
        renderKeranjang();
      }
      return;
    }

    const kurangBtn = e.target.closest("[data-kurang]");
    if (kurangBtn) {
      const baris = barisProduk(kurangBtn.dataset.kurang);
      if (baris && baris.jumlah > 1) {
        baris.jumlah -= 1;
        simpanKeranjang();
        renderKeranjang();
      }
      return;
    }

    const hapusBtn = e.target.closest("[data-hapus]");
    if (hapusBtn) {
      keranjang = keranjang.filter((b) => b.id !== hapusBtn.dataset.hapus);
      simpanKeranjang();
      renderKeranjang();
    }
  });

  el("kosongkanKeranjang").addEventListener("click", () => {
    if (keranjang.length === 0) return;
    keranjang = [];
    simpanKeranjang();
    renderKeranjang();
    toast("Daftar pesanan dikosongkan.");
  });

  /* =========================================================
     CHECKOUT  ->  WhatsApp
     ========================================================= */
  tombolCheckout.addEventListener("click", () => {
    if (keranjang.length === 0) return;

    const nama = (el("pesananNama").value || "").trim();
    const catatan = (el("pesananCatatan").value || "").trim();
    const metode = el("pesananMetode").value;

    if (!nama) {
      toast("Mohon isi nama pemesan dulu.");
      el("pesananNama").focus();
      return;
    }

    const daftar = keranjang
      .map((b, i) => {
        const p = produkById(b.id);
        if (!p) return "";
        return `${i + 1}. ${p.nama} — ${b.jumlah} × ${rp(p.harga)} = ${rp(p.harga * b.jumlah)}`;
      })
      .filter(Boolean)
      .join("\n");

    const pesan =
      `Halo ${USAHA.nama}!\n\n` +
      "Saya mau pesan:\n\n" +
      daftar +
      "\n\n" +
      `Total: ${rp(totalKeranjang())}\n` +
      `Nama: ${nama}\n` +
      `Metode: ${metode}\n` +
      (catatan ? `Catatan: ${catatan}\n` : "") +
      `\nInfo ongkir: ${USAHA.ongkir}\n\n` +
      "Mohon dikonfirmasi ketersediaan dan total akhirnya. Terima kasih.";

    window.open(`https://wa.me/${USAHA.wa}?text=${encodeURIComponent(pesan)}`, "_blank", "noopener");
    toast("Membuka WhatsApp untuk mengirim pesanan.");
  });

  /* =========================================================
     MODAL DETAIL
     ========================================================= */
  const modal = el("modal");
  const modalCard = el("modalCard");

  function bukaModal(id) {
    const p = produkById(id);
    if (!p) return;
    const k = KATEGORI[p.kategori];
    const label = LABEL_DIPAKAI.includes(p.label) ? p.label : "";

    modalCard.innerHTML = `
      <div class="mhead">
        <div class="mhead__thumb card__thumb--${k.kelas}">
          ${label ? `<span class="card__badge">${label}</span>` : ""}
          <span class="mark">${k.nama}</span>
        </div>
        <button class="iconbtn mhead__close" type="button" data-tutup-modal aria-label="Tutup detail">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>
        </button>
      </div>
      <div class="mbody">
        <h3>${p.nama}</h3>
        <div class="mbody__meta">
          <span class="mtag">${k.nama}</span>
          <span>${p.satuan}</span>
          <span>·</span>
          <span>${p.habis ? "Sedang habis" : "Tersedia hari ini"}</span>
        </div>
        <p class="mdesc">${p.desk}</p>

        <div class="mgrid">
          ${p.isi
            .map(
              (i) => `
            <div class="mgrid__cell">
              <span class="k">Keterangan</span>
              <span class="v">${i}</span>
            </div>`
            )
            .join("")}
          <div class="mgrid__cell">
            <span class="k">Satuan</span>
            <span class="v">${p.satuan}</span>
          </div>
        </div>

        <div class="mfoot">
          <span class="price">${rp(p.harga)}</span>
          <div class="mfoot__acts">
            <button class="btn btn--ghost" type="button" data-tutup-modal>Tutup</button>
            <button class="btn btn--primary" type="button" data-add="${p.id}" ${p.habis ? "disabled" : ""}>
              ${p.habis ? "Sedang habis" : "Tambah ke pesanan"}
            </button>
          </div>
        </div>
      </div>`;

    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("is-locked");
    modalCard.scrollTop = 0;
  }

  function tutupModal() {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    if (!drawer.classList.contains("is-open")) document.body.classList.remove("is-locked");
  }

  modal.addEventListener("click", (e) => {
    if (e.target === modal || e.target.closest("[data-tutup-modal]")) tutupModal();
  });

  grid.addEventListener("click", (e) => {
    const tambahBtn = e.target.closest("[data-add]");
    if (tambahBtn) {
      tambah(tambahBtn.dataset.add);
      return;
    }
    const detailBtn = e.target.closest("[data-detail]");
    if (detailBtn) bukaModal(detailBtn.dataset.detail);
  });

  modalCard.addEventListener("click", (e) => {
    const tambahBtn = e.target.closest("[data-add]");
    if (tambahBtn) {
      tambah(tambahBtn.dataset.add);
      tutupModal();
      bukaKeranjang();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key !== "Escape") return;
    if (modal.classList.contains("is-open")) tutupModal();
    else if (drawer.classList.contains("is-open")) tutupKeranjang();
  });

  /* =========================================================
     ULASAN  (tampil hanya bila ada data asli)
     ========================================================= */
  function renderUlasan() {
    const seksi = el("ulasan");
    if (!seksi) return;
    if (!Array.isArray(ULASAN) || ULASAN.length === 0) {
      seksi.hidden = true;
      return;
    }
    seksi.hidden = false;
    el("ulasanGrid").innerHTML = ULASAN.map((u) => {
      const bintang = Math.max(1, Math.min(5, Number(u.bintang) || 5));
      return `
        <article class="ulasan__item">
          <p class="ulasan__bintang">${"★".repeat(bintang)}${"☆".repeat(5 - bintang)}</p>
          <p class="ulasan__teks">“${u.teks}”</p>
          <p class="ulasan__nama">${u.nama}</p>
        </article>`;
    }).join("");
  }

  /* =========================================================
     KONTAK  (baris kosong otomatis disembunyikan)
     ========================================================= */
  function renderKontak() {
    const list = el("kontakInfo");
    if (!list) return;

    const baris = [
      ["Jam buka", USAHA.jamBuka],
      ["Alamat", USAHA.alamat],
      ["Telepon", USAHA.telepon],
    ].filter(([, nilai]) => nilai && String(nilai).trim());

    list.innerHTML = baris
      .map(([label, nilai]) => `<li><b>${label}</b><span>${nilai}</span></li>`)
      .join("");
  }

  /* =========================================================
     FORM TANYA
     ========================================================= */
  const form = el("formTanya");
  const formNote = el("formNote");

  if (form) {
    const setNote = (pesan, salah = false) => {
      if (!formNote) return;
      formNote.textContent = pesan;
      formNote.classList.toggle("is-error", salah);
    };

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const data = Object.fromEntries(new FormData(form));

      if (!String(data.nama || "").trim()) return setNote("Mohon isi nama Anda.", true);
      if (!String(data.telepon || "").trim()) return setNote("Mohon isi nomor WhatsApp Anda.", true);
      if (!String(data.pesan || "").trim()) return setNote("Mohon tuliskan pesan Anda.", true);

      const teks =
        `Halo ${USAHA.nama}!\n\n` +
        `Nama: ${String(data.nama).trim()}\n` +
        `WhatsApp: ${String(data.telepon).trim()}\n\n` +
        `Pesan: ${String(data.pesan).trim()}`;

      window.open(`https://wa.me/${USAHA.wa}?text=${encodeURIComponent(teks)}`, "_blank", "noopener");
      setNote("Terima kasih! Pesan Anda dibuka di WhatsApp untuk dikirim.");
      form.reset();
    });
  }

  /* =========================================================
     TAHUN
     ========================================================= */
  const tahun = el("tahun");
  if (tahun) tahun.textContent = String(new Date().getFullYear());

  /* =========================================================
     MULAI
     ========================================================= */
  renderChips();
  render();
  renderKeranjang();
  renderUlasan();
  renderKontak();
})();
