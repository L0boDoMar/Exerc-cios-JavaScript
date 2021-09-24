/*Ler as notas da 1a. e 2a. avaliações de um aluno. Calcular a média aritmética simples e escrever uma mensagem que diga se o aluno foi ou não aprovado (considerar que nota igual ou maior que 6 o aluno é aprovado). Escrever também a média calculada. */

var a1 = parseInt(prompt("Infome a nota 1a:"));
var a2 = parseInt(prompt("Infome a nota 2a:"));

var mediaFinal= (a1+a2)/2;

if(mediaFinal>=6){
    alert("Aluno Aprovado!");
}else{
    alert("Aluno Reprovado!");
}