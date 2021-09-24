/*Ler dois valores (considere que não serão lidos valores iguais) e escrever o maior deles. */

var n1 = parseInt(prompt ("Entre com um valor:"));
var n2 = parseInt(prompt ("Entre com um valor:"));

if (n1 > n2) {
    alert("O maior valor é " + n1);
} else {
    alert("O maior valor é " + n2);
}