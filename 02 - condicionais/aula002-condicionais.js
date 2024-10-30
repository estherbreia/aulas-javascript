
const numero = 12;

const isNumeroDivis = numero % 5 === 0;

if (numero === 0) {
    console.log('Número invalido');
} else if (isNumeroDivis) {
    console.log('Sim');
} else {
    console.log('Não');
}

