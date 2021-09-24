/*Tendo como dados de entrada o nome, a altura e o sexo (M ou F) de uma pessoa, calcule
e mostre seu peso ideal, utilizando as seguintes fórmulas:*/

var nome = prompt("Qual é o seu nome?");
var altura = parseFloat(prompt("Qual é a sua altura?"));
var sexo = prompt("Qual é o seu sexo? (responder somente com M ou F)");

if (sexo == "m") {

    var pesoIdeal = (72.7 * altura) - 58;
    alert("Seu peso ideal é de " + pesoIdeal.toFixed(2) + " quilos.");
} else

if (sexo == "f") {
    var pesoIdeal = (62.1 * altura) - 44.7;
    alert("Seu peso ideal é de " + pesoIdeal.toFixed(2) + " quilos.");
}