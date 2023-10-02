let sinif = ["Ali", "Aysu", "Aminenur", "Gizem", "Orhun", "Osman", "Salih"];

const string = sinif.reduce((a, b) => {
  return `${a}, ${b}`;
});
console.log(string);