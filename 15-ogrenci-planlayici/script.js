const form = document.getElementById("gorevFormu");
const adInput = document.getElementById("gorevAdi");
const kategoriInput = document.getElementById("kategori");
const tarihInput = document.getElementById("tarih");
const filtreInput = document.getElementById("filtre");
const liste = document.getElementById("gorevListesi");
const bosMesaj = document.getElementById("bosMesaj");

const toplamGorev = document.getElementById("toplamGorev");
const aktifGorev = document.getElementById("aktifGorev");
const bitmisGorev = document.getElementById("bitmisGorev");

const STORAGE_KEY = "bilal_ogrenci_planlayici";

function kayitlariGetir() {
    try {
        const veri = localStorage.getItem(STORAGE_KEY);
        return veri ? JSON.parse(veri) : [];
    } catch {
        return [];
    }
}

let gorevler = kayitlariGetir();

function kaydet() {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(gorevler));
    } catch (e) {
        console.error("Kayıt hatası:", e);
    }
}

function tarihFormatla(tarihStr) {
    if (!tarihStr) return "Tarih Belirtilmedi";
    const [yil, ay, gun] = tarihStr.split("-");
    return `${gun}.${ay}.${yil}`;
}

function istatistikGuncelle() {
    const tamamlanan = gorevler.filter(g => g.tamamlandi).length;
    toplamGorev.textContent = gorevler.length;
    aktifGorev.textContent = gorevler.length - tamamlanan;
    bitmisGorev.textContent = tamamlanan;
}

function listeyiGuncelle() {
    liste.replaceChildren();
    const filtre = filtreInput.value;

    const filtrelenmis = gorevler.filter(function (g) {
        if (filtre === "aktif") return !g.tamamlandi;
        if (filtre === "tamamlanan") return g.tamamlandi;
        return true;
    });

    filtrelenmis.forEach(function (gorev) {
        const li = document.createElement("li");
        li.className = "task-item";
        if (gorev.tamamlandi) li.classList.add("done");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = "task-check";
        checkbox.checked = gorev.tamamlandi;

        checkbox.addEventListener("change", function () {
            gorev.tamamlandi = checkbox.checked;
            kaydet();
            listeyiGuncelle();
        });

        const content = document.createElement("div");
        content.className = "task-content";

        const name = document.createElement("div");
        name.className = "task-name";
        name.textContent = gorev.ad;

        const meta = document.createElement("div");
        meta.className = "task-meta";

        const cat = document.createElement("span");
        cat.className = "category";
        cat.textContent = gorev.kategori;

        const date = document.createElement("span");
        date.textContent = "📅 " + tarihFormatla(gorev.tarih);

        meta.append(cat, date);
        content.append(name, meta);

        const delBtn = document.createElement("button");
        delBtn.type = "button";
        delBtn.className = "delete-button";
        delBtn.textContent = "Sil";

        delBtn.addEventListener("click", function () {
            gorevler = gorevler.filter(item => item.id !== gorev.id);
            kaydet();
            listeyiGuncelle();
        });

        li.append(checkbox, content, delBtn);
        liste.appendChild(li);
    });

    bosMesaj.hidden = filtrelenmis.length > 0;
    istatistikGuncelle();
}

form.addEventListener("submit", function (e) {
    e.preventDefault();
    const ad = adInput.value.trim();
    if (!ad) return;

    gorevler.unshift({
        id: Date.now().toString(),
        ad: ad,
        kategori: kategoriInput.value,
        tarih: tarihInput.value,
        tamamlandi: false
    });

    kaydet();
    form.reset();
    adInput.focus();
    listeyiGuncelle();
});

filtreInput.addEventListener("change", listeyiGuncelle);

listeyiGuncelle();
