// 11 - Sınav Başarı Analizi
// Dizi fonksiyonları ve sınıf geçme/kalma oranları

const sinavNotlari = [95, 82, 45, 68, 90, 52, 38, 77];

function ortalamaBul(notlar) {
    let toplam = 0;
    for (let not of notlar) {
        toplam += not;
    }
    return toplam / notlar.length;
}

function basariDetayi(notlar, baraj = 50) {
    let gecenler = [];
    let kalanlar = [];

    for (let not of notlar) {
        if (not >= baraj) {
            gecenler.push(not);
        } else {
            kalanlar.push(not);
        }
    }

    return { gecenler, kalanlar };
}

const ortalama = ortalamaBul(sinavNotlari);
const { gecenler, kalanlar } = basariDetayi(sinavNotlari, 50);
const basariYuzdesi = (gecenler.length / sinavNotlari.length) * 100;

console.log("=== Sınıf Sınav Başarı Raporu ===");
console.log("Sınıf Notları       : " + sinavNotlari.join(", "));
console.log("Sınıf Not Ortalaması: " + ortalama.toFixed(1));
console.log("Geçen Öğrenci Sayısı: " + gecenler.length + " (Notlar: " + gecenler.join(", ") + ")");
console.log("Kalan Öğrenci Sayısı: " + kalanlar.length + " (Notlar: " + kalanlar.join(", ") + ")");
console.log("Genel Başarı Oranı  : %" + basariYuzdesi.toFixed(1));
