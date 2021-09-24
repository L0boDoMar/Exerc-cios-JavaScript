/*Ler quatro números inteiros e apresentar o resultado da adição e multiplicação, baseando-se na
utilização do conceito da propriedade distributiva. Ou seja, se forem lidas as variáveis A, B, C, e D,
devem ser somadas e multiplicadas A com B, A com C e A com D. Depois B com C, B com D e por fim
C com D. Perceba que será necessário efetuar seis operações de adição e seis operações de
multiplicação e apresentar doze resultados de saída.*/

var A = parseInt(prompt("Digite um valor:"));
var B = parseInt(prompt("Digite um valor:"));
var C = parseInt(prompt("Digite um valor:"));
var D = parseInt(prompt("Digite um valor:"));

var A1 = A + B;
var A2 = A + C;
var A3 = A + D;
var B1 = B + C;
var B2 = B + D;
var C1 = C + D;

var A4 = A * B;
var A5 = A * C;
var A6 = A * D;
var B3 = B * C;
var B4 = B * D;
var C2 = C * D;


alert("Somas: " + A1 + "," + A2 + "," + A3 + "," + B1 + "," + B2 + "," + C1 +
    "\nMultiplicações: " + A4 + "," + A5 + "," + A6 + "," + B3 + "," + B4 + "," + C2);