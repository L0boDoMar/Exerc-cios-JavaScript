/*Ler dois valores (considere que não serão lidos valores iguais) e escrevê-los em ordem crescente.*/

var n1 = parseInt(prompt ("Entre com um valor:"));
var n2 = parseInt(prompt ("Entre com um valor:"));

if (n1 > n2) {
    alert(n2 +", "+ n1);
} else {
    alert(n1 +", "+n2 );
}