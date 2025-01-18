// Cadastrar os usuarios
const entrada = require("readline-sync")

const usuario1 = entrada.question("Qual o nome do primeiro jogador (x)?")
const usuario2 = entrada.question("Qual o nome do segundo jogador (O)?")
let rodada = 1
let terminou = false

const matrizJogoDaVelha = [
     [0, 0, 0],
     [0, 0, 0],
     [0, 0, 0]
]

console.log(`
     |     |     \n
_____|_____|_____\n
     |     |     \n
_____|_____|_____\n
     |     |     \n
     |     |     
`)

while (!terminou) {
     const jogadorDaVez = rodada % 2 === 1 ? usuario1 : usuario2
     console.log(`
     |       |     \n
_____|_______|_____\n
     |       |     \n
_____|_______|_____\n
     |       |     \n
     |       |     
`)
     const numeroDaCasa = entrada.question(`${jogadorDaVez}, qual casa você deseja preencher ?\n1, 2, 3, 4, 5, 6, 7, 8 ou 9`)

     console.log(numeroDaCasa)
     rodada++
     console.clear()
}