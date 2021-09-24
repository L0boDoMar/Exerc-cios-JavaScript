/*i) Ler dois inteiros (variáveis A e B) e imprimir o resultado do quadrado da diferença do primeiro valor pelo
segundo.*/
var termo1 = parseInt(prompt("Digite o valor do primeiro termo:"));
var termo2 = parseInt(prompt("Digite o valor do segundo termo:"));

prodNotavel = (termo1 ** 2) - (2 * termo1 * termo2) + (termo2 ** 2);

alert("O resultado do quadrado da diferença do primeiro valor pelo segundo é igual a: "+ prodNotavel);