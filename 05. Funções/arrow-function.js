function apresentar(nome) {
    return `Olá! meu nome é ${nome}`;
}

const apresentarArrow = nome => `Olá! meu nome é ${nome}`;

console.log(apresentar("Rafael"));
console.log(apresentarArrow("Rafael"));

//arrow com +1 linha de instrução

const somaNumerosPequenos = (num1, num2) => {
    if (num1 > 9 || num2 > 9){
        return "somente números de 1 a 9"
    } else {
        return num1 + num2
    }
}

console.log(somaNumerosPequenos(1, 2));
console.log(somaNumerosPequenos(9, 2));