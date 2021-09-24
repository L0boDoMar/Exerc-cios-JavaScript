/*Elaborar um programa que efetue a apresentação do valor da conversão em dólar de um valor lido em
real. O programa deve solicitar o valor da cotação do dólar e também a quantidade de reais disponível
com o usuário, para que seja apresentado o valor em moeda americana.*/

var valorReal = parseInt(prompt("Informe a quantia a ser convertida:"));
var cotDolar = parseFloat(prompt("Informe a cotação atual do dólar:"));

var valorDolar = valorReal/cotDolar;

alert("Você terá " + valorDolar + " reais após a conversão!");