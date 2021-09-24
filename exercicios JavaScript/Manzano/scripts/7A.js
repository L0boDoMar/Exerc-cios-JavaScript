/*Ler uma temperatura em graus Celsius e apresentá-la convertida em graus Fahrenheit. A fórmula de
conversão é F  (9 * C + 160) / 5, sendo F a temperatura em Fahrenheit e C a temperatura em Celsius.*/



var celsius = parseInt(prompt("Informe a temperatura em graus celsius:"));

var fahre = (celsius * 1.8) + 32;

alert(celsius + " °C equivalem a " + fahre + " °F");