// 10 - Sayı Analiz ve İstatistik
// Dizi üzerinde en büyük, en küçük, toplam ve ortalama hesaplama

const sayilar = [14, 45, 8, 92, 23, 67, 31, 5];

let toplam = 0;
let enBuyuk = sayilar[0];
let enKucuk = sayilar[0];
let ciftler = [];
let tekler = [];

for (let i = 0; i < sayilar.length; i++) {
    const eleman = sayilar[i];
    toplam += eleman;

    if (eleman > enBuyuk) enBuyuk = eleman;
    if (eleman < enKucuk) enKucuk = eleman;

    if (eleman % 2 === 0) {
        ciftler.push(eleman);
    } else {
        tekler.push(eleman);
    }
}

const ortalama = toplam / sayilar.length;

console.log("=== Sayı Analiz Raporu ===");
console.log("Dizi Elemanları     : [" + sayilar.join(", ") + "]");
console.log("Toplam Eleman Sayısı: " + sayilar.length);
console.log("Elemanlar Toplamı   : " + toplam);
console.log("Aritmetik Ortalama  : " + ortalama.toFixed(2));
console.log("En Büyük Değer      : " + enBuyuk);
console.log("En Küçük Değer      : " + enKucuk);
console.log("Çift Sayılar        : [" + ciftler.join(", ") + "] (" + ciftler.length + " adet)");
console.log("Tek Sayılar         : [" + tekler.join(", ") + "] (" + tekler.length + " adet)");
