/* Calcular e apresentar o valor do volume de uma lata de óleo, utilizando a fórmula:
Volume¬p *Raio2 * Altura*/
var raio = parseInt(prompt("Informe o raio da lata:"));
var altura = parseInt(prompt("Informe a altura da lata:"));

var vol = raio*raio*altura*3.14;

alert("O volume da circunferência é de "+ vol +" litros.");