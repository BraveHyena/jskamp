// 18 EKİM 2021 DERS SONU.
console.log("Selam Js")
// JavaScript'te Type Safe Yok.
let dolarBugun = 9.30

let dolarDun = 9.20

{
    let dolarDun = 9.10
}

console.log(dolarDun)

const euroDun = 11.2

console.log(euroDun)

// ARRAY 
// İsimlendirme olarak camelCasing kullanılır.

let konutKredileri = 
["Konut Kredisi",
"Emlak Konut Kredisi",
"Kamu Konut Kredisi",
"Özel Konut Kredisi"]

console.log("<ul>")
for(let i = 0;i<konutKredileri.length;i++){
    console.log("<li>" +konutKredileri[i]+ "</li>")
}
console.log("</ul>")

console.log(konutKredileri)