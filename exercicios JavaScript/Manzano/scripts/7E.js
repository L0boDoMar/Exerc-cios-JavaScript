/*Efetuar o cálculo e a apresentação do valor de uma prestação em atraso, utilizando a fórmula
PRESTACAO = VALOR + (VALOR * TAXA/100) * TEMPO).*/

var valor = parseInt(prompt("Informe o valor da prestação:"));
var taxa = parseInt(prompt("Informe o valor da taxa:"));
var tempo = parseInt(prompt("Informe o tempo de atraso:"));

var prestacao = valor + (valor * taxa / 100) * tempo;

alert("O valor da prestação é de R$ "+prestacao+",00");