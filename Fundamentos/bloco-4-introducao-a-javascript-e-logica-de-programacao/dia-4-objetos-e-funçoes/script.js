let name = 'Milton';
let lastName = 'Nascimento';
let nickname = 'Bituca';
let age = 77;
let bestAlbuns = ['Travessia', 'Clube da Esquina', 'Minas'];

let singer = {
    name: 'Milton',
    lastName: 'Nascimento',
    nickname: 'Bituca',
    age: 77,
    bestAlbuns:['Travessia', 'Clube da Esquina', 'Minas']
};

console.log('O jogador de cartas, ' + singer.name + ' ' + singer.lastName + ' ' + 'tem ' + singer.age + ' ' + 'porquinhos da india');

//mostrar apenas chaves(propriedades)
for(let key in singer) {
    console.log(key);
}
//mostrar valores do meu objeto
for(let key in singer) {
    console.log([key]);
}
//unificar as informações do objeto
for(let key in singer) {
    console.log(key + ': ' + singer[key]);
}