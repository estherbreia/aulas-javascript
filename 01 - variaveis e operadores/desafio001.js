/* Faça um programa para calcular o valor de uma viagem.

Você terá 3 variaveis. Sendo elas:
    1 - Preço de combustivel;
    2 - Gasto médio de combustivel do carro por KM;
    3 - Distância em Km da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.
*/

const precoCombustivel = 5.79;
const KmPorLitros = 10;
const distanciaViagem = 350;

const resultado = distanciaViagem / KmPorLitros * precoCombustivel;

console.log('O gasto total em reais é ' + resultado.toFixed(2) + '.' + ' Numa viagem de ' + distanciaViagem + 'km.');
