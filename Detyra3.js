let akomodimi = 96;
let transporti = 42;
let ushqimi = 57;
let nrPersonave = 3;
let buxhetiSecilit = 80;

let kostoTotale = akomodimi + transporti + ushqimi;
let pjesaSecilit = kostoTotale / nrPersonave;
let mbetjaBuxhetit = buxhetiSecilit - pjesaSecilit;

console.log("Kosto totale e udhëtimit është " + kostoTotale + " €.");
console.log("Pjesa që i takon secilit person është " + pjesaSecilit + " €.");
console.log("Secilit person i mbeten " + mbetjaBuxhetit + " € nga buxheti i tij.");