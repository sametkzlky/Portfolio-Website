var txtvize = document.getElementById("txtvize");
var txtfinal = document.getElementById("txtfinal");
var btnhesapla = document.getElementById("hesapla");
var sonucdiv = document.getElementById("sonucnotes");



btnhesapla.onclick = function () {
  var vize = Number(txtvize.value);
  var final = Number(txtfinal.value);
  var ortalama = (vize * 40) / 100 + (final * 60) / 100;
  var durum = "";
  if (ortalama >= 50 && final >= 50) {
    durum = "geçtiniz";
    sonucdiv.style.color = "green";
  } else if (ortalama >= 50 && final < 50) {
    durum = "FİNAL NOTUNUZ 50'NİN ALTINDA, KALDINIZ.";
    sonucdiv.style.color = "red";
  } else {
    durum = "FİNAL NOTU 50 PUAN ALTINDA, KALDINIZ!!!";
    sonucdiv.style.color = "red";
  }
  sonucdiv.innerHTML = "Notunuz:" + ortalama + "<br>" + durum;
};