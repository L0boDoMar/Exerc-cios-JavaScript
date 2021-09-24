/*Elaborar um programa que efetue a apresentação do valor da conversão em real de um valor lido em
dólar. O programa deve solicitar o valor da cotação do dólar e também a quantidade de dólares
disponível com o usuário, para que seja apresentado o valor em moeda brasileira*/

var valorDolar = parseInt(prompt("Informe a quantia a ser convertida:"));
var cotDolar = parseFloat(prompt("Informe a cotação atual do dólar:"));

var valorReal = valorDolar * cotDolar;

alert("Você terá " + valorReal + " reais após a conversão!");