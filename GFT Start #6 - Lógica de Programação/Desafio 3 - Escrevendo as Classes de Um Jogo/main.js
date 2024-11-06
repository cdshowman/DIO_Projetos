class heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque;

    switch (this.tipo.toLowerCase()) { //toLowerCase foi usado para evitar erros caso o usuário digite alguma letra maiúscula
      case 'mago':
        ataque = 'magia';
        break;
      case 'guerreiro':
        ataque = 'espada';
        break;
      case 'monge':
        ataque = 'artes marciais';
        break;
      case 'ninja':
        ataque = 'shuriken';
        break;
      default:
        ataque = 'um ataque desconhecido';
    }

    console.log(`O ${this.tipo} atacou usando ${ataque}`);
    alert(`O ${this.tipo} atacou usando ${ataque}`); //Exibição em tela do mesmo resultado exibido no prompt. A variável "ataque" não precisa do "this" pois está no mesmo escopo do Switch ao contrário da variável "tipo".

  }
}

const nome = prompt("Digite o nome do herói:"); //Prompts para permitir comunicação dinâmica com o usuário.
const idade = prompt("Digite a idade do herói:");
const tipo = prompt("Digite o tipo do herói (mago, guerreiro, monge, ninja):");

const meuHeroi = new heroi(nome, idade, tipo);

meuHeroi.atacar(); //Chamada para permitir o uso das avaliações do Switch nas informações armazenadas na variável "meuHeroi" que recebe de forma dinâmica os dados digitados pelo usuário.

