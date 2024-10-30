
function escreverNome(name){
    return ('Meu nome é ' + name);
}

function verificarIdade(idade){
    if(idade >= 18){
        console.log(escreverNome('Esther ') + 'Maior de Idade')
    }else{
        console.log('Menor de idade')
    }
}

verificarIdade(18);