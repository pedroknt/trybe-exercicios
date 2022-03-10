let jogoKonote = [1, 3, 92, 73, 36, 50];

//
let numero1 = 7;
let numero2 = 1;
let numero3 = 50
let numero4 = 47;
let numero5 = 12;
let numero6 = 92;

let sorteio = [numero1, numero2, numero3, numero4, numero5, numero6];

//
//console.log('Jogo do Konote: ' + jogoKonote);
//console.log('Jogo Sorteado: ' + sorteio);

//
for (let index = 0; index < jogoKonote.length; index += 1) {
    console.log(jogoKonote[index]);
    for (let index2 = 0; index2 < sorteio.length; index2++) {
        console.log(sorteio[index2]);
    }
}

