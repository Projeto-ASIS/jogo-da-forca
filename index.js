// Cadastrar os usuarios
const entrada = require("readline-sync")

const usuario1 = entrada.question("Qual o nome do primeiro jogador (x)?")
const usuario2 = entrada.question("Qual o nome do segundo jogador (O)?")
let rodada = 1
let jaTerminou = false
let quadro = Array.from({length: 9}, ()=>' ')
const jogadasVencedoras = [
 [0, 1, 2], [3,4,6], [6, 7, 8], //Linhas
 [0, 3, 6], [1, 4, 7], [2, 5, 8], // Colunas
 [0,4,8], [2,4,6] //Diagonais
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

while (!jaTerminou) {
     const quadroDesenhado = desenharQuadro(quadro)
     console.log(quadroDesenhado)
     const jogadorDaVez = rodada % 2 === 1 ? usuario1 : usuario2
     const numeroDaCasa = entrada.question(`${jogadorDaVez}, qual casa você deseja preencher ?\n1, 2, 3, 4, 5, 6, 7, 8 ou 9`)
     quadro[numeroDaCasa - 1] = jogadorDaVez == usuario1 ?'X' : 'O';
     
     console.clear()
     rodada++
}



