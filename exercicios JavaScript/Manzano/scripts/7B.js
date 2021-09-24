/*Ler uma temperatura em graus Fahrenheit e apresentá-la convertida em graus Celsius. A fórmula de
conversão é C  (F - 32) * (5/9) , sendo F a temperatura em Fahrenheit e C a temperatura em Celsius.*/
var fahre = parseInt(prompt("Informe a temperatura em graus Fahrenheit:"));

var celsius = (fahre - 32)/ 1.8;

alert(fahre + " °F equivalem a " + celsius + " °C");