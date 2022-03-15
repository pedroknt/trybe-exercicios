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

//função para retornar bom dia
let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };
  info['recorrente'] = 'Sim';

  function goodMorningMargarida(){
      return 'Bom dia, ' + info.personagem
  }
  console.log(goodMorningMargarida())

  //função para imprimir nova propriedade adicionada ao objeto
  function logNew(){
      return info.recorrente
  }
  console.log(logNew());

  //imprimir todos os valores das chaves
  for(let keys in info){
      console.log(info[keys])
  }

  //
  let info1 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
    nota: 'O último MacPatinhas',
  };
  info1['recorrente'] = 'Sim';

  for(let keys in info && info1){
  }
  console.log(info.personagem + ' e ' + info1.personagem)
  console.log(info.origem + ' e ' + info1.origem)
  console.log(info.nota + ' e ' + info1.nota)

  if(info.recorrente && info1.recorrente == 'Sim'){
    console.log('Ambos são recorrentes')
}

//

let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };
leitor.livrosFavoritos[1] = {
  titulo: 'Harry Potter e o Prisioneiro de Azkaban',
  autor: 'JK Rowling',
  editora: 'Rocco',
}
console.log(leitor.nome + ' tem 2 livros favoritos: ' + leitor.livrosFavoritos[0]['titulo'] + ' e ' + leitor.livrosFavoritos[1]['titulo']);
  console.log(leitor.livrosFavoritos)
  console.log('O livro favorito de ' + leitor.nome + ' se chama ' + leitor.livrosFavoritos[0]['titulo'])
  

  //function
  let animal = 'arara';
  function verificaPalindrome(animal){
    if(animal === 'arara'){
      return true;
    }else{
      return false;
    }
  }
  console.log(verificaPalindrome(animal))

