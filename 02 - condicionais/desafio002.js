/* Faça um programa para calcular o valor de uma viagem.

Você terá 5 variaveis. Sendo elas:
    1 - Preço do etanol;
    2 - Preço da Gasolina;
    3 - O tipo de combustivel que está no seu carro;
    4 - Gasto médio de combustivel do por Km;
    5 - Distância em KM da viagem.

Imprima no console o valor que será gasto para realizar esta viagem.
*/

const precoGasolina = 5.79;
const precoEtanol = 6.66;
const KmPorLitros = 10;
const distanciaViagem = 100;
let combustivel = 'Etanol';


const resultadoGasolina = distanciaViagem / KmPorLitros * precoGasolina;

const resultadoEtanol = distanciaViagem / KmPorLitros * precoEtanol;


if (combustivel === 'Gasolina') {
    console.log('O gasto total em reais é ' + resultadoGasolina.toFixed(2) + '. Utilizando ' + combustivel)
} else if (combustivel === 'Etanol') {
    console.log('O gasto total em reais é ' + resultadoEtanol.toFixed(2) + '. Utilizando ' + combustivel)
} else {
    console.log('Combustível invalido')
}

//ou

const precoGasolina1 = 5.79;
const precoEtanol1 = 6.66;
const KmPorLitros1 = 10;
const distanciaViagem1 = 100;
let combustivel1 = 'Etanol';


const litrosConsumidos1 = distanciaViagem1 / KmPorLitros1;


if (combustivel1 === 'Gasolina') {
    const valorGasto1 = litrosConsumidos1 * precoGasolina1;
    console.log('O gasto total em reais é ' + valorGasto1.toFixed(2) + '. Utilizando ' + combustivel1)
} else if (combustivel1 === 'Etanol') {
    const valorGasto1 = litrosConsumidos1 * precoEtanol1;
    console.log('O gasto total em reais é ' + valorGasto1.toFixed(2) + '. Utilizando ' + combustivel1)
} else {
    console.log('Combustível invalido')
}



