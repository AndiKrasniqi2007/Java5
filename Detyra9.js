let cmimi1 = ("19.90");
let sasia1 = 2;
let cmimi2 = ("8.50");
let sasia2 = 3;

let totalArtikulli1 = cmimi1 * sasia1;
let totalArtikulli2 = cmimi2 * sasia2;
let shumaPorosise = totalArtikulli1 + totalArtikulli2;

let tarifa = shumaPorosise * 0.10;
let shumaFinale = shumaPorosise + tarifa;

let shumaFormatuar = shumaFinale.toFixed(2);

console.log("Totali i artikullit 1: " + totalArtikulli1);
console.log("Totali i artikullit 2: " + totalArtikulli2);
console.log("Shuma finale me tarifë shërbimi: " + shumaFormatuar);
console.log("Tipi i vlerës së formatizuar: " + shumaFormatuar);