/*Elaborar um programa que efetue a leitura de três valores (A,B e C) e apresente como resultado final o quadrado da soma dos três valores lidos.*/

var A = parseInt(prompt("Digite um valor"));
var B = parseInt(prompt("Digite um valor"));
var C = parseInt(prompt("Digite um valor"));

var quadSoma = (A+B+C)**2;

alert("O quadrado da soma dos valores lidos é: "+quadSoma);