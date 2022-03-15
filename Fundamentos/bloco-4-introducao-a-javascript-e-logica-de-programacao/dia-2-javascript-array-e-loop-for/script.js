//Criar jogo da Megasena
let jogoKonote = [1, 3, 92, 73, 36, 50];
let acertos = 0;

//chamar números aleatórios com o comando Math.random
let numero1 = Math.floor(Math.random() * 60) + 1; 
let numero2 = Math.floor(Math.random() * 60) + 1; 
let numero3 = Math.floor(Math.random() * 60) + 1; 
let numero4 = Math.floor(Math.random() * 60) + 1;
let numero5 = Math.floor(Math.random() * 60) + 1;
let numero6 = Math.floor(Math.random() * 60) + 1;

let sorteio = [numero1, numero2, numero3, numero4, numero5, numero6];

//
//console.log('Jogo do Konote: ' + jogoKonote);
//console.log('Jogo Sorteado: ' + sorteio);

//
for (let index = 0; index < jogoKonote.length; index += 1) {
    for (let index2 = 0; index2 < sorteio.length; index2 += 1) {
        if(jogoKonote[index] === sorteio[index2] ){
            acertos += 1
        }
    }
}
console.table('Seu jogo: ' + jogoKonote + ' Jogo Sorteado: ' + sorteio + ' Numero de acertos: ' + acertos)


//exercicio de retornar um novo array com cada elemento do atual array multiplicado por 2 !*imcompleto*!
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numberss1 = [];
for(let i = 1; i < numbers.length; i += 1) {
    for(let i2 = 0; i2 < i; i2 += 1) {
        numberss1 = numbers[i] * numbers[i2]
            console.log(numberss1);
    };
}

console.log(numberss1);

//semântica .forEach
numbers.forEach(function (name, index, colchetes) {
    console.log(name * name);
  });

//multiplicar 2 numeros
function multiplicarnumbers(number1, number2){
    return number1 * number2;
}
console.log(multiplicarnumbers(17, 72));

//adicionar numeros ao array vazio via for
let array = [];
for(let i = 1; i <= 25; i += 1){
    array += [i]
}
console.log(array)

//imprimir saudção matinal com dois parametros
function morningGreeting (frase1, frase2) {
    return frase1 + frase2;
}
console.log('Eae,', 'Bom dia!')

//imprimindo apenas elementos impares com o .forEach
let num = [777, 8, 91, 912, 01];
function elementosImpares(elemento){
    if(elemento % 2 != 0)
        console.log(elemento)
}

num.forEach(elementosImpares)

//outra forma de imprimir numeros pares ou ímpares ultilizando o .forEach
let num1 = [23, 39, 54, 02, 57, 392];
num1.forEach(function(elemento){
    if(elemento % 2 == 0)
    console.log(elemento)
});

//outra forma de retornar números pares ou ímpares com o .forEach
let num2 = [23, 39, 54, 02, 57, 392, 10, 12];
num2.forEach(numeros => {
    if (numeros % 2 == 0)
    console.log(numeros)
 } ) 

 //
 let fruits = [3, 4, 10, 1, 12];
 let result = 0;
 for(i = 0;i < fruits.length; i += 1) {
    result += fruits[i];
 }

 if(result > 15) {
    console.log(result)
}else{
    console.log("Valor menor que 16")
}


//retornar fatorial de 10
let n = 10;
let fat = n;
for(let i = 1; i < n; i += 1){
    fat *= i ;
}
console.log(fat);

//Login:
let userName = 'Pedro H';
let userPassword = 1234;
let access = true;

if(userName == 'Pedro H' && userPassword == 1234){
    console.log(access);
}else{
    console.log('Acesso Negado');
}

//adicione pães a sacola e imprima um por um se o acesso for permitido.
let quantidade = 11;
let bag = 0;

if(access === true) {
    for(let i = 0; i < quantidade; i += 1) {
        bag = i;
        
        if(bag === 0){
            console.log('A sacola está Vazia!');
        }
        else if(bag === 1) {
            console.log('Existe ' + bag + ' pão na sacola!');
        }else{
            console.log('Existem ' + bag + ' pães na sacola');
        }
    }
}
else{
    console.log('Não foi possível');
}

//fazendo hamburguer de 3 queijos
for(let i = 0; i < 1 ; i += 1) {
    console.log('Adiciona pão')
for(let ibeef  = 0; ibeef < 2; ibeef += 1){
    console.log('Adiciona Carne')
for(let iqueijo = 0; iqueijo < 3; iqueijo += 1){
    console.log('Adiciona queijo')
}
}
}
console.log('Fecha hamburguer')

//
let me = {
    myName : 'Pedro H',
    age : 21,
    nickname : 'Konote',
    musicStyle : 'Rap',
    bestArtist : 'Froid',
}
console.log(me.age)

//
let diasDaSemana = {
    1: 'domingo',
    2: 'segunda',
    3: 'terça',
    4: 'quarta',
    5: 'quinta',
    6: 'sexta',
    7: 'sábado',
  };
  
  //diasDaSemana.1; // SyntaxError: Unexpected number
  console.log(diasDaSemana['1']); // domingo

  //

  let player = {
      name: 'Marta',
      lastName: 'Silva',
      age: 34,
      medals: {
          golden:2,
          silver:3,
          bronze:0,
      } 
  }
player['fullName'] = player.name + ' ' + player.lastName;
player['bestInTheWorld'] = [2006, 2007, 2008, 2009, 2010, 2018];
  console.log('A jogadora ' + player.fullName + ' possui ' + player.medals['golden'] + ' medalhas de ouro, ' + player.medals['silver'] + ' medalhas de prata e ' + player.medals['bronze'] + ' de bronze')

  //
  let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
  };

  for(let keys in names){
    console.log('Olá, ' + names[keys])
  }
  //

  let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };

  for(let keys in car){
      console.log(keys + ' : ' + car[keys])
  }