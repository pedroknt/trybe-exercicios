function morningGreeting() {
    return 'Bom dia!';
}
console.log(morningGreeting())

function sum(number1, number2) {
    return number1 + number2;
}

console.log(sum(10, 11));

//recebe dois numeros inteiros e retorna o menor numero entre eles

function lessThan(number1, number2) {
    if (number1 < number2) {
        return number1
    }else{
        return number2
    }
}

console.log(lessThan(12, 17))