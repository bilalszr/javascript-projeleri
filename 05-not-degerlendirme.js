// 05 - Not Değerlendirme Sistemi
// Koşullu yapılar (if - else if - else) ve harf notu karşılığı

let sinavNotu = 82;
let harfNotu = "";
let aciklama = "";

if (sinavNotu >= 85) {
    harfNotu = "AA";
    aciklama = "Üstün Başarı";
} else if (sinavNotu >= 70) {
    harfNotu = "BB";
    aciklama = "Başarılı";
} else if (sinavNotu >= 60) {
    harfNotu = "CC";
    aciklama = "Orta";
} else if (sinavNotu >= 50) {
    harfNotu = "DD";
    aciklama = "Geçer";
} else {
    harfNotu = "FF";
    aciklama = "Kaldı";
}

console.log("Girilen Sınav Notu : " + sinavNotu);
console.log("Harf Notu          : " + harfNotu);
console.log("Durum              : " + aciklama);
