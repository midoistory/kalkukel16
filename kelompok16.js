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
var masukannilai1 = input.question('masukkan nilai pertama = ');
var masukannilai2 = input.question('masukkan nilai kedua = ');

if(isNaN(masukannilai1 && masukannilai2)){
    console.log("Maaf, Yang Anda Masukkan Bukan Angka!");
}else if(operasi == "+"){
    console.log("hasil dari", masukannilai1, operasi, masukannilai2, "=", Number(masukannilai1)+(Number(masukannilai2)))
}else if(operasi == "-"){
    console.log("hasil dari", masukannilai1, operasi, masukannilai2, "=", Number(masukannilai1)-(Number(masukannilai2)))
}else if(operasi == "*"){
    console.log("hasil dari", masukannilai1, operasi, masukannilai2, "=", Number(masukannilai1)*(Number(masukannilai2)))
}else if(operasi == "/"){
    console.log("hasil dari", masukannilai1, operasi, masukannilai2, "=", Number(masukannilai1)/(Number(masukannilai2)))
}else if(operasi == "%"){
    console.log("hasil dari", masukannilai1, operasi, masukannilai2, "=", Number(masukannilai1)%(Number(masukannilai2)))
}
