/*Elaborar um programa que calcule e apresente o volume de uma caixa retangular, por meio da fórmula
VOLUME  COMPRIMENTO * LARGURA * ALTURA.*/

var comprimento = parseInt(prompt("Informe o comprimento:"));
var altura = parseInt(prompt("Informe a altura:"));
var largura = parseInt(prompt("Informe a largura:"));

var volume = comprimento*altura*largura;

alert("O volume da caixa é de "+ volume + " Litros");