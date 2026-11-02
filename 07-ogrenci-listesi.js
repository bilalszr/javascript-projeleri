// 07 - Öğrenci Listesi Yönetimi
// Dizi (Array) tanımlama, döngü ile listeleme ve dizi uzunluğu

let ogrenciler = ["Bilal", "Yusuf", "Emirhan", "Selin", "Berkay"];

console.log("=== Sınıf Öğrenci Listesi ===");
console.log("------------------------------");

for (let i = 0; i < ogrenciler.length; i++) {
    console.log((i + 1) + ". Öğrenci: " + ogrenciler[i]);
}

console.log("------------------------------");
console.log("Sınıftaki Toplam Öğrenci Sayısı: " + ogrenciler.length);
