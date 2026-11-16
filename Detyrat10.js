let pjesemarresit = 45;
let pagesa = 12;

let teArdhurat = pjesemarresit * pagesa;
let salla = 180;
let materialet = 95;
let reklama = 60;

let shpenzimetTotale = salla + materialet + reklama;
let diferenca = teArdhurat - shpenzimetTotale;

shpenzimetTotale += 25;
let diferencaRe = teArdhurat - shpenzimetTotale;

console.log("RAPORTI FINANCIAR");
console.log("Te ardhurat totale: " + teArdhurat);
console.log("Shpenzimet totale (perfshirë te paparashikuarat): " + shpenzimetTotale);
console.log("Diferenca perfundimtare (fitimi): " + diferencaRe);