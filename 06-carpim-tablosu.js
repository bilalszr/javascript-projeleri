// 06 - Çarpım Tablosu
// Döngü (for loop) ile sayıların çarpım tablosunu oluşturma

let carpan = 7;

console.log("=== " + carpan + " Sayısının Çarpım Tablosu ===");

for (let i = 1; i <= 10; i++) {
    let sonuc = carpan * i;
    let formatliIndex = i < 10 ? " " + i : i;
    console.log(carpan + " x " + formatliIndex + " = " + sonuc);
}
