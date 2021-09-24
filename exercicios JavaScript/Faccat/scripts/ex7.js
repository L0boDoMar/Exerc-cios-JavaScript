/* Faça um algoritmo que leia a idade de uma pessoa expressa em anos, meses e dias e escreva a idade dessa pessoa expressa apenas em dias. Considerar ano com 365 dias e mês com 30 dias.*/ 

var anos = parseInt(prompt("Informe a quantidade de anos:"));
var meses = parseInt(prompt("Informe a quantidade de meses:"));
var dias = parseInt(prompt("Informe a quantidade de dias:"));
var totaldias = (anos * 365) + (meses * 30) + dias;

alert("Você viveu o total de " + totaldias + " dias!")