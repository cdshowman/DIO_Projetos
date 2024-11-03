let nome = prompt("Informe o nome do personagem: ") //Inseri um prompt na variável para criar uma interatividade melhor.
let xp = prompt("Quantos XP's ele têm? ") //Variável para armazenar a quantidade de XP informada também em formato de prompt.
let nivel = "" //Variável vazia para armazenar o nível do personagem de acordo de a a valiação do switch.

switch (true) {
  case xp < 1000:
  	nivel = "Ferro" //A variável 'nivel' recebe um valor diferente em cada passo da avaliação do switch
    console.log("Ferro");
    break;
  case xp > 1000 && xp <= 2000:
    nivel = "Bronze"
    console.log("Bronze");
    break;
  case xp > 2000 && xp <= 5000:
    nivel = "Prata"
    console.log("Prata");
    break;
  case xp > 5000 && xp <= 7000:
    nivel = "Ouro"
    console.log("Ouro");
    break;
  case xp > 7000 && xp <= 8000:
    nivel = "Platina"
    console.log("Platina");
    break;
  case xp > 8000 && xp <= 9000:
    nivel = "Ascendente"
    console.log("Ascendente");
    break;
  case xp > 9000 && xp <= 10000:
    nivel = "Imortal"
    console.log("Imortal");
    break;
  default:
    nivel = "Radiante"
    console.log("Radiante");   

}

alert("O Herói de nome " + nome + " está no nível de " + nivel) //Pop-Up com as informações do personagem.
