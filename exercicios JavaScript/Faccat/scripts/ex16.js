/*As maçãs custam R$ 1,30 cada se forem compradas menos de uma dúzia, e R$ 1,00 se forem compradas pelo menos 12. Escreva um programa que leia o número de maçãs compradas, calcule e escreva o custo total da compra.*/

var nMacas = parseInt(prompt("Digite a quantidade de maçãs compradas:"));

if (12<=nMacas) {
    var precoMaca = nMacas * 1;
    alert("Custo total com desconto: R$ " + precoMaca + ",00");
} else {
    var precoMaca1 = nMacas * 1.30;
    alert("Custo total: R$ " + precoMaca1);
}