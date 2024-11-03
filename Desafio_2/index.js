function calculoVitorias(vitorias, derrotas) {
    return vitorias - derrotas 
}

let vitorias = prompt("Quantas vitórias o herói teve? ")
let derrotas = prompt("Quantas derrotas o herói teve? ")
let saldoVitorias = calculoVitorias(vitorias, derrotas)
let nivel = ""

switch (true) {
  case saldoVitorias < 10:
  	nivel = "Ferro" //A variável 'nivel' recebe um valor diferente em cada passo da avaliação do switch
    console.log("Ferro");
    break;
  case saldoVitorias > 11 && saldoVitorias <= 20:
    nivel = "Bronze"
    console.log("Bronze");
    break;
  case saldoVitorias > 21 && saldoVitorias <= 50:
    nivel = "Prata"
    console.log("Prata");
    break;
  case saldoVitorias > 51 && saldoVitorias <= 80:
    nivel = "Ouro"
    console.log("Ouro");
    break;
  case saldoVitorias > 81 && saldoVitorias <= 90:
    nivel = "Diamante"
    console.log("Diamante");
    break;
  case saldoVitorias > 91 && saldoVitorias <= 100:
    nivel = "Lendário"
    console.log("Lendário");
    break;
  default:
    nivel = "Imortal"
    console.log("Imortal");   

}

alert("O Herói tem saldo de " + saldoVitorias + " e está no nível de " + nivel) //Pop-Up com as informações do personagem.