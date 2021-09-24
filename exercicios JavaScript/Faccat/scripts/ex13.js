/*Faça um algoritmo que leia três notas de um aluno, calcule e escreva a média final deste aluno.Considerar que a média é ponderada e que o peso das notas é 2, 3 e 5.*/

var n1 = parseInt(prompt("Informe a primeira nota:"));
var n2 = parseInt(prompt("Informe a segunda nota:"));
var n3 = parseInt(prompt("Informe a terceira nota:"));

var medFinal= ((n1*2)+(n2*3)+(n3*5))/10;

alert("A média final é "+medFinal);