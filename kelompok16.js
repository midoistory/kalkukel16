// membuat kalkulator dengan operasi + - * / %
// Kelompok 16 Kalkulator
// Midori Harahap
// Zakki Muadzin Abdul Rozak

const input = require('readline-sync');
console.log("----------");
console.log("Selamat Datang di Kalkulator!");
console.log("----------");
console.log("+", "-", "*", "/", "%");
var operasi = input.question("pilih salah satu operasi = ");
var masukannilai1 = input.question('masukkan nilai 1 = ');
var masukannilai2 = input.question('masukkan nilai 2 = ');
