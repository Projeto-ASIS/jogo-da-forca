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
let quadro = Array.from({ length: 9 }, () => ' ')
const jogadasVencedoras = [
     [0, 1, 2], [3, 4, 6], [6, 7, 8], //Linhas
     [0, 3, 6], [1, 4, 7], [2, 5, 8], // Colunas
     [0, 4, 8], [2, 4, 6] //Diagonais
]

function desenharQuadro(quadro) {
     return `
 ${quadro[0]}   |  ${quadro[1]}  |   ${quadro[2]} \n
_____|_____|_____\n
 ${quadro[3]}   |  ${quadro[4]}  |   ${quadro[5]} \n
_____|_____|_____\n
 ${quadro[6]}   |  ${quadro[7]}  |   ${quadro[8]} \n
     |     |     \n
`
}

function oJogadorVenceu(jogador) {
     for (let i = 0; i < jogadasVencedoras.length; i++) {
          const [a, b, c] = jogadasVencedoras[i]
          const casasPreenchidas = jogador.casasPreenchidas
          
          //  Verificando se nas jogadas feitas pelo jogador1, contem as jogadas vencedoras.
          if (a in casasPreenchidas && b in casasPreenchidas && c in casasPreenchidas) {
               return true
          }
     }

     return false
}

while (true) {
     const quadroDesenhado = desenharQuadro(quadro)
     console.log(quadroDesenhado)
     const jogadorDaVez = rodada % 2 === 1 ? jogador1 : jogador2

     const numeroDaCasa = entrada.questionInt(`${jogadorDaVez.nome}, qual casa você deseja preencher ?\n1, 2, 3, 4, 5, 6, 7, 8 ou 9`)
     quadro[numeroDaCasa - 1] = jogadorDaVez.nome == jogador1.nome ? 'X' : 'O';
     
     jogadorDaVez.casasPreenchidas.push(numeroDaCasa - 1) // numeroDaCasa - 1, pois casa 1 -> elemento 0 do array, casa 2 -> elemento 1 do array, assim por diante.
     
     if (rodada >= 5 && oJogadorVenceu(jogadorDaVez)) {
          console.log(desenharQuadro(quadro))
          console.log(`O jogador ${jogadorDaVez.nome}, venceu a partida!`)
          break
     }

     rodada++
}




