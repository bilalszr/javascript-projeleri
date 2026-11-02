// 08 - Fonksiyonlu Hesap Makinesi
// Parametreli ve dönüş değerli fonksiyon tasarımı

function hesapla(sayi1, sayi2, islem) {
    switch (islem) {
        case "+":
            return sayi1 + sayi2;
        case "-":
            return sayi1 - sayi2;
        case "*":
            return sayi1 * sayi2;
        case "/":
            if (sayi2 === 0) {
                return "Hata: Bir sayı sıfıra bölünemez!";
            }
            return sayi1 / sayi2;
        case "%":
            return sayi1 % sayi2;
        default:
            return "Hata: Geçersiz işlem operatörü!";
    }
}

console.log("Toplama (25 + 5) :", hesapla(25, 5, "+"));
console.log("Çıkarma (25 - 5) :", hesapla(25, 5, "-"));
console.log("Çarpma  (25 * 5) :", hesapla(25, 5, "*"));
console.log("Bölme   (25 / 5) :", hesapla(25, 5, "/"));
console.log("Kalan   (25 % 4) :", hesapla(25, 4, "%"));
console.log("Hata Testi (25/0):", hesapla(25, 0, "/"));
