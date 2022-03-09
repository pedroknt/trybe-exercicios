let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
//imprimir todos os valores de numbers
for(let index = 0; index < numbers.length; index += 1) {
    console.log(typeof numbers[index])
}

//imprimir soma dos valores
for(let soma of numbers) {
    soma += 1;
    console.log(soma);
}

//imprimir média aritimética
let soma = 0;

for(let index = 0; index < numbers.length; index += 1) {
    soma += numbers[index] / numbers.length;
    console.log(soma)
if(soma > 20){
    console.log('valor maior que 20');
}else{
    console.log('valor menor ou igual a 20');
}
}

//imprimir maior valor contido no array

for(let maior of numbers) {
    maior = Math.max(...numbers);
    console.log(maior);
}

//quantidade de numeros impares
for(let index = 0; index < numbers.length; index += 1) {
   console.log(numbers[index] % 2 !== 0);
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