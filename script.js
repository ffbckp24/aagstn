let text1 = document.querySelector("#text1");
let text2 = document.querySelector("#text2");
let text3 = document.querySelector("#text3");
let text4 = document.querySelector("#text4");
let text5 = document.querySelector("#text5");
let text6 = document.querySelector("#text6");
let text7 = document.querySelector("#text7");
let text8 = document.querySelector("#text8");
let text9 = document.querySelector("#text9");
let text13 = document.querySelector("#text13");

function munculText1() {
  text1.style.display = "block";
  text1.classList.add("animation");
  setTimeout(munculText2, 2700);
}

function munculText2() {
  text1.style.display = "none";
  text2.classList.add("animation");
  text2.style.display = "block";
  setTimeout(munculText3, 2700);
}

function munculText3() {
  text2.style.display = "none";
  text3.classList.add("animation");
  text3.style.display = "block";
  setTimeout(munculText4, 2700);
}

function munculText4() {
  text3.style.display = "none";
  text4.classList.add("animation");
  text4.style.display = "block";
  setTimeout(munculText5, 2700);
}

function munculText5() {
  text4.style.display = "none";
  text5.classList.add("animation");
  text5.style.display = "block";
  setTimeout(munculText6, 2700);
}

function munculText6() {
  text5.style.display = "none";
  text6.classList.add("animation");
  text6.style.display = "block";
  setTimeout(munculText7, 2700);
}

function munculText7() {
  text6.style.display = "none";
  text7.classList.add("animation");
  text7.style.display = "block";
  setTimeout(munculText8, 2700);
}

function munculText8() {
  text7.style.display = "none";
  text8.classList.add("animation");
  text8.style.display = "block";
  setTimeout(munculText13, 2700);
}

function munculText13() {
  text8.style.display = "none";
  text13.classList.add("animation");
  text13.style.display = "block";
  setTimeout(munculText9, 2700);
}

function munculText9() {
  text13.style.display = "none";
  text9.classList.add("animation");
  text9.style.display = "block";
  setTimeout(munculText10, 2700);
}

function munculText10() {
  text9.style.display = "none";
  text10.classList.add("animation");
  text10.style.display = "block";
}

function munculText11() {
  text11.classList.add("animation");
  text11.style.display = "block";
  setTimeout(munculText12, 2700);
}

function munculText12() {
  text11.style.display = "none";
  text12.classList.add("animation");
  text12.style.display = "block";
  setTimeout(hadiahKamu, 4800);
}

setTimeout(munculText1, 0);

const tombolMulai = document.querySelector("#tombolMulai");
const pertanyaanPertama = document.querySelector("#pertanyaanPertama");
const kecuali = document.querySelector("#pertanyaanPertama h3 span");
const jawabPertama = document.querySelector("#jawabPertama");
const jawabKedua = document.querySelector("#jawabKedua");
const jawabKetiga = document.querySelector("#jawabKetiga");

tombolMulai.onclick = function () {
  text10.style.display = "none";
  pertanyaanPertama.style.display = "block";
  muncul();
};

let muncul = function () {
  (jawabPertama, jawabKedua).onclick = function () {
    kecuali.classList.add("pertanyaan");
    kecuali.style.display = "inline";
    jawabKetiga.style.display = "none";
    setTimeout(hadir, 900);
  };
};

let hadir = function () {
  jawabKetiga.setAttribute("data-bs-target", "#exampleModalToggle");
  jawabKetiga.setAttribute("data-bs-toggle", "modal");
  setTimeout(jawab, 900);
};

let jawab = function () {
  jawabKetiga.click();
};

const buttonPertanyaanKedua = document.querySelector('#tombolPertanyaanKedua');
const pertanyaanKedua = document.querySelector('#pertanyaanKedua');

buttonPertanyaanKedua.onclick = function() {
  pertanyaanPertama.style.display="none";
  pertanyaanKedua.style.display = "block";
}

const inputJujur = document.querySelector("#inputJujur");

inputJujur.addEventListener("change", function () {
  this.value = "Bisa nepatin omongan, optimis, dan perhatian";
  setTimeout(hadir2, 900);
});

let hadir2 = function() {
  pertanyaanKedua.setAttribute("data-bs-target", "#exampleModalToggle2");
  pertanyaanKedua.setAttribute("data-bs-toggle", "modal");
    setTimeout(jawab2, 900);
}

let jawab2 = function () {
  pertanyaanKedua.click();
};

const buttonPertanyaanKetiga = document.querySelector('#tombolPertanyaanKetiga');
const pertanyaanKetiga = document.querySelector('#pertanyaanKetiga');
const buttonPertanyaanKeempat = document.querySelector('#tombolPertanyaanKeempat');

const pertanyaanKeempat = document.querySelector('#pertanyaanKeempat');

buttonPertanyaanKeempat.onclick = function() {
  pertanyaanKetiga.style.display = "none";
  text11.classList.add("animation");
  text11.style.display = "block";
  setTimeout(munculText12, 2700);
}

buttonPertanyaanKetiga.onclick = function() {
  pertanyaanKedua.style.display = "none";
  pertanyaanKeempat.style.display="block";
}

const button = document.querySelector("#jwbPertama");
const buttonMau = document.querySelector("#mauBanget");

button.addEventListener("mouseover", function () {
  let x = Math.floor(Math.random() * 300) + 1;
  let y = Math.floor(Math.random() * 100) + buttonMau.offsetTop;
  this.style.position = "absolute";
  this.style.left = x + "px";
  this.style.top = y + "px";
});

const berubah = document.querySelector("#berubah");
const range = document.querySelector("#range");

range.addEventListener("change", function () {
  berubah.innerHTML = "<h3>Seberapa sering gue harusnya chat lu???</h3>";
  setTimeout(jawab3, 1200);
});

let jawab3 = function() {
  pertanyaanKeempat.style.display="none";
  pertanyaanKetiga.style.display="block";
}

const hadiahTerakhir = document.querySelector('#hadiahTerakhir');

let hadiahKamu = function() {
    text12.style.display="none";
    hadiahTerakhir.style.display="block";
}

async function menuju() {
  window.location =
    "https://api.whatsapp.com/send?phone=+628118743476&text=Rul ayo kita baikan...";
}
