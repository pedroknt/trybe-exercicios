let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
//imprimir todos os valores de numbers
for(let index = 0; index < numbers.length; index += 1) {
    console.log(numbers[index])
}

//imprimir soma dos valores
let result = numbers.reduce((result, valores) => result + valores);
    console.log(result)

//imprimir média aritimética
let soma = numbers.reduce((soma, valores) => soma + valores);
    console.log(soma/2)
if(soma > 20){
    console.log('valor maior que 20');
}else{
    console.log('valor menor ou igual a 20');
}

//imprimir maior valor contido no array

for(let maior of numbers) {
    maior = Math.max(...numbers);
    console.log(maior);
}

//quantidade de numeros impares
for(let index = 0; index < numbers.length; index += 1) {
   let impares = numbers[index] % 2 !== 0;
if(impares === true) {
    console.log(impares)
}else{
    console.log('Nenhum valor ímpar encontrado!')
}
}

//imprimir menor numero
for(let menor of numbers) {
    menor = Math.min(...numbers);
    console.log(menor);
}

//divisão
let numberss = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
let divisao;
for(let i = 0; i < numberss.length; i += 1){
    divisao = numberss[i] / 2;
    console.log(divisao);
}

