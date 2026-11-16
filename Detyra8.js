let fletet = 157;
let fletetPerStudent = 6;

let grupet = parseInt(fletet / fletetPerStudent);
let mbetja = fletet % fletetPerStudent;
let kontrolli = (grupet * fletetPerStudent) + mbetja;

console.log("Numri i grupeve te plota: " + grupet);
console.log("Fletet e mbetura: " + mbetja);
console.log("Kontrolli i llogaritjes ((grupet * 6) + mbetja): " + kontrolli);