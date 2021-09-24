/*Ler dois valores (inteiros, reais ou caracteres) para as variáveis A e B, e efetuar a troca dos valores de
forma que a variável A passe a possuir o valor da variável B e a variável B passe a possuir o valor da
variável A. Apresentar os valores trocados*/

var A = prompt("Informe um valor inteiro,real ou caractere para A:");
var B = prompt("Informe um valor inteiro,real ou caractere para B:");

var C = A;
var A = B;
var B = C;
alert(
    "O novo valor de A é: "+A+
    "\nO novo valor de B é: "+B
);