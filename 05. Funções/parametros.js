function soma(numero1,numero2) {
    return numero1+numero2;
}

// console.log(soma(2,1));
// console.log(soma(2,2));
// console.log(soma(10,400));

function nomeIdade(nome, idade) {
    return `Meu nome é ${nome} e minha idade é ${idade} anos`
}

// console.log(nomeIdade("Rafael", 20));

function multiplica(numero1 = 1, numero2 = 1) {
    return numero1*numero2
}

console.log(multiplica(soma(4,5), soma(3,3)));