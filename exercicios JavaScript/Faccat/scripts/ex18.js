/*Ler o ano atual e o ano de nascimento de uma pessoa. Escrever uma mensagem que diga se ela poderá ou não votar este ano (não é necessário considerar o mês em que a pessoa nasceu). */

var nasc = parseInt(prompt("Digite o ano em que você nasceu:"));
var atual = parseInt(prompt("Digite o ano atual:"));

var voto = atual - nasc;

if(voto>=16){
    alert("Você pode votar esse ano!");
} else{
    alert("Você não pode votar esse ano!");
}