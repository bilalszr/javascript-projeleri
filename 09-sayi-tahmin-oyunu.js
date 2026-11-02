// 09 - Sayı Tahmin Oyunu Simülasyonu
// Math.random(), döngü ve koşullu ipucu mantığı

const tutulanSayi = Math.floor(Math.random() * 20) + 1; // 1 - 20 arası rastgele sayı
const tahminler = [4, 12, 17, 8, 15];

console.log("=== Sayı Tahmin Oyunu Simülasyonu ===");
console.log("Bilgisayar 1 ile 20 arasında bir sayı belirledi.");
console.log("Tahminler sırayla deneniyor...\n");

let kazanildiMi = false;

for (let adim = 0; adim < tahminler.length; adim++) {
    let tahmin = tahminler[adim];
    console.log((adim + 1) + ". Hak: Yapılan Tahmin = " + tahmin);

    if (tahmin === tutulanSayi) {
        console.log(">> Harika! " + (adim + 1) + ". denemede doğru bildiniz! 🎉");
        kazanildiMi = true;
        break;
    } else if (tahmin < tutulanSayi) {
        console.log(">> İpucu: Daha BÜYÜK bir sayı denemelisin.");
    } else {
        console.log(">> İpucu: Daha KÜÇÜK bir sayı denemelisin.");
    }
}

if (!kazanildiMi) {
    console.log("\nMaalesef tüm haklar bitti. Belirlenen sayı: " + tutulanSayi);
}
