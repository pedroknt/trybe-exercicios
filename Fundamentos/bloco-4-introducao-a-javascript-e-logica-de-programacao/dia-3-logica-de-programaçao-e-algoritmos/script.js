//retornar o fatorial de 10
let number = 10;
let result = 1;
for(let i = 1; i <= number; i += 1) {
    result = result * i;
    console.log(result);
}

//inverter uma string 1
let word = 'xablau';

let inverter = word.split('').reverse().join('');

console.log(inverter);
//inverter uma string 2
let invertido = '';
for(i = word.length - 1; i >= 0; i -= 1){
    invertido += word[i];
    console.log(invertido);
}
//retornar meno string
 let array = ['java', 'javascript', 'python', 'html', 'css'];
 let retorno = '';
 for(ind = 0; ind < array.length;ind += 1) {
     retorno = array[ind].trim()
 }
console.log(retorno);

//retornar maior string
//let array = ['java', 'javascript', 'python', 'html', 'css'];
//let retorno = '';
for(let maior of array)
    if(maior.trim().length > retorno.length){
    retorno = maior.trim();
    console.log(retorno);
}
