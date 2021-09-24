/*Uma revendedora de carros usados paga a seus funcionários vendedores um salário fixo por mês, mais uma comissão também fixa para cada carro vendido e mais 5% do valor das vendas por ele efetuadas. Escrever um algoritmo que leia o número de carros por ele vendidos, o valor total de suas vendas, o salário fixo e o valor que ele recebe por carro vendido. Calcule e escreva o salário final do vendedor.*/

var carrosVendidos = parseInt(prompt("Informe a quantidade de carros vendidos pelo vendedor:"));
var valorVenda =parseInt(prompt("Informe o valor total das vendas:"));
var salFixo = parseInt(prompt("Informe o valor do Salário Fixo:"));
var valorCarroVendido= parseInt(prompt("Informe a comissão por carro vendido:"));

var salFinal= salFixo + (carrosVendidos*valorCarroVendido) + (valorVenda*0.05);

alert("O salário final do vendedor é de: R$ " + salFinal + " ,00");