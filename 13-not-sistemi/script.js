const vizeInput = document.getElementById("vize");
const finalInput = document.getElementById("final");
const hesaplaButton = document.getElementById("hesapla");

const sonucAlani = document.getElementById("sonuc");
const ortalamaAlani = document.getElementById("ortalama");
const harfNotuAlani = document.getElementById("harfNotu");
const durumAlani = document.getElementById("durum");
const detayAlani = document.getElementById("detay");
const hataAlani = document.getElementById("hata");

function harfNotuBelirle(ortalama) {
    if (ortalama >= 90) return "AA";
    if (ortalama >= 80) return "BA";
    if (ortalama >= 70) return "BB";
    if (ortalama >= 60) return "CB";
    if (ortalama >= 50) return "CC";
    if (ortalama >= 45) return "DC";
    if (ortalama >= 40) return "DD";
    return "FF";
}

hesaplaButton.addEventListener("click", function () {
    const vizeDeger = vizeInput.value.trim();
    const finalDeger = finalInput.value.trim();

    hataAlani.textContent = "";
    sonucAlani.hidden = true;

    if (vizeDeger === "" || finalDeger === "") {
        hataAlani.textContent = "Lütfen hem vize hem final notunu giriniz.";
        return;
    }

    const vize = Number(vizeDeger);
    const finalNotu = Number(finalDeger);

    if (isNaN(vize) || isNaN(finalNotu) || vize < 0 || vize > 100 || finalNotu < 0 || finalNotu > 100) {
        hataAlani.textContent = "Notlar 0 ile 100 arasında geçerli bir sayı olmalıdır.";
        return;
    }

    // Ağırlık: %40 Vize + %60 Final
    const ortalama = (vize * 0.40) + (finalNotu * 0.60);
    const harf = harfNotuBelirle(ortalama);

    ortalamaAlani.textContent = ortalama.toFixed(2);
    harfNotuAlani.textContent = "Harf Notu: " + harf;

    durumAlani.className = "status";

    if (ortalama >= 50 && finalNotu >= 45) {
        durumAlani.textContent = "Tebrikler, Dersi Geçtiniz! 🎉";
        durumAlani.classList.add("pass");
        detayAlani.textContent = "Başarı ortalamanız ve final barajınız yeterli seviyede.";
    } else {
        durumAlani.textContent = "Maalesef Dersi Geçemediniz.";
        durumAlani.classList.add("fail");
        if (finalNotu < 45) {
            detayAlani.textContent = "Final notunuz 45 barajının altında kaldı.";
        } else {
            detayAlani.textContent = "Dönem sonu ortalamanız 50 barajının altında kaldı.";
        }
    }

    sonucAlani.hidden = false;
});
