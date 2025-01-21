// Cadastrar os usuarios
const entrada = require("readline-sync")

// Usuario -> Jogador
let jogador1 = {
  nome: entrada.question("Qual o nome do primeiro jogador (x)?"),
  casasPreenchidas: []
}
let jogador2 = {
  nome: entrada.question("Qual o nome do segundo jogador (O)?"),
  casasPreenchidas: []
}
let rodada = 1
let historicoDeCasas = []
const casas = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let quadro = Array.from({ length: 9 }, () => ' ')
const jogadasVencedoras = [
  [1, 2, 3], [4, 5, 6], [7, 8, 9], //Linhas
  [1, 4, 7], [2, 5, 8], [3, 6, 9], // Colunas
  [1, 5, 9], [3, 5, 7] //Diagonais
]

function desenharQuadro(quadro) {
  return `
 ${quadro[0]} | ${quadro[1]} | ${quadro[2]}
___|___|___
 ${quadro[3]} | ${quadro[4]} | ${quadro[5]} 
___|___|___
 ${quadro[6]} | ${quadro[7]} | ${quadro[8]} 
`
}

function oJogadorVenceu(jogador) {
  for (let i = 0; i < jogadasVencedoras.length; i++) {
    const [a, b, c] = jogadasVencedoras[i]
    const casasPreenchidas = jogador.casasPreenchidas

    //  Verificando se nas jogadas feitas pelo jogador1, contem as jogadas vencedoras.
    if (casasPreenchidas.includes(a) && casasPreenchidas.includes(b) && casasPreenchidas.includes(c)) {
      return true
    }
  }

  return false
}

function oJogoTerminou() {
  return rodada === 9
}


function entradaEValida(entr) {
  const entradaInt = parseInt(entr)
  const aCasaJaFoiPreenchida = historicoDeCasas.includes(entradaInt)

  if (entradaInt >= 1 && entradaInt <= 9 && !aCasaJaFoiPreenchida) {
    return true
  }

  console.clear()
  console.log(desenharQuadro(quadro))

  return false
}

function pegandoCasasDisponiveis() {
  return casas.filter(casa => !historicoDeCasas.includes(casa))
}

while (true) {
  const quadroDesenhado = desenharQuadro(quadro)
  console.log(quadroDesenhado)

  const jogadorDaVez = rodada % 2 === 1 ? jogador1 : jogador2

  const numeroDaCasa = parseInt(entrada.question(
    `${jogadorDaVez.nome}, qual casa você deseja preencher ${pegandoCasasDisponiveis()} ?`,
    { limit: entradaEValida, limitMessage: "<!!!> Por favor, verifique as casas disponiveis e tente novamente." }
  ))

  quadro[numeroDaCasa - 1] = jogadorDaVez.nome === jogador1.nome ? 'X' : 'O' // numeroDaCasa - 1, pois casa 1 -> elemento 0 do array, casa 2 -> elemento 1 do array, assim por diante.
  historicoDeCasas.push(numeroDaCasa)
  jogadorDaVez.casasPreenchidas.push(numeroDaCasa)

  if (rodada >= 5 && oJogadorVenceu(jogadorDaVez)) {
    console.log(desenharQuadro(quadro))
    console.log(`O jogador ${jogadorDaVez.nome}, venceu a partida!`)
    break
  }

  if (oJogoTerminou(quadro)) {
    console.log("O jogo terminou, não houve vencedores. Jogo empatado")
    break
  }

  rodada++
}