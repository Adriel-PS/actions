function soma(a,b){
    return a + b;
}

function divisao(a,b){
    return a / b;
}

function multiplicacao(a,b){
    return a * b;
}   

function subtracao(a,b){
    return a - b;
}   

function potencia(a,b){
    return a ** b;
}       

function raizQuadrada(a){
    const resultado = a ** 0.5;
    if (Number.isInteger(resultado)){
        return resultado;
    }
    else {
        return resultado.toFixed(2);
    }
}

module.exports = {
    soma,
    divisao,
    multiplicacao,
    subtracao,
    potencia,
    raizQuadrada
};