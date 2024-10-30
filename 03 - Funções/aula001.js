
function sayMyName(name) {
    console.log('Your name is ' + name)
}

sayMyName ('Esther')
sayMyName ('Benjamin')

//calcular valor
function quadrado(valor){
   return valor * valor
}

const quadradoDez = quadrado(10);
console.log('Quadrado' + quadradoDez)

//incrementar juros
function incrementarJuros(valor, percentual){
   const valorDeAcrecimo =  (percentual / 100) * valor;
    return valor + valorDeAcrecimo
 }
 
console.log(incrementarJuros(100, 10))
console.log(incrementarJuros(100, 20))
console.log(incrementarJuros(100, 15))

 



