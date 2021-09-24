/*Escreva um algoritmo para ler o salário mensal atual de um funcionário e o percentual de reajuste. Calcular e escrever o valor do novo salário.*/

var sal = parseInt(prompt("Informe o valor do salário:"));
var percent = parseInt(prompt("Informe o percentual de reajuste:"));

var reajuste = (percent/100)*sal;
var novosal = reajuste + sal;
alert("O valor do novo salário é de:" + novosal);