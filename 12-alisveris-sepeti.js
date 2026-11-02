// 12 - Alışveriş Sepeti ve Kampanya Hesaplayıcı
// Nesne dizileri (Array of Objects) üzerinde hesaplama

const urunler = [
    { ad: "Mekanik Klavye", fiyat: 650, adet: 1 },
    { ad: "Kablosuz Mouse", fiyat: 320, adet: 2 },
    { ad: "Type-C Hub", fiyat: 280, adet: 1 },
    { ad: "Gaming Kulaklık", fiyat: 850, adet: 1 },
    { ad: "Mousepad XXL", fiyat: 150, adet: 1 }
];

let araToplam = 0;

console.log("===========================================");
console.log("            🛒 ALIŞVERİŞ SEPETİ            ");
console.log("===========================================");

for (let i = 0; i < urunler.length; i++) {
    let urun = urunler[i];
    let tutar = urun.fiyat * urun.adet;
    araToplam += tutar;

    console.log((i + 1) + ". " + urun.ad.padEnd(18, " ") + " | " + urun.adet + " adet x " + urun.fiyat + " TL = " + tutar + " TL");
}

console.log("-------------------------------------------");
console.log("Sepet Ara Toplamı : " + araToplam + " TL");

let indirim = 0;
if (araToplam >= 1500) {
    indirim = 200;
    console.log("🎁 Süper İndirim  : -" + indirim + " TL (1500 TL üzeri alışveriş bonusu)");
} else if (araToplam >= 1000) {
    indirim = 100;
    console.log("🎁 İndirim        : -" + indirim + " TL (1000 TL üzeri alışveriş bonusu)");
}

let sonTutar = araToplam - indirim;
console.log("Ödenecek Net Tutar: " + sonTutar + " TL");
console.log("===========================================");
