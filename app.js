let player1 = document.getElementById('player1')
let player2 = document.getElementById('player2')
let btnPlayer1 = document.getElementById('btnPlayer1')
let btnPlayer2 = document.getElementById('btnPlayer2')
let gameLevel = document.getElementById('gameLavel')
let reset = document.querySelector('#reset')

let scorePlayer1 = 0
let scorePlayer2 = 0
let winningNumber = parseInt(gameLevel.value)
let isGameOver = false

btnPlayer1.addEventListener('click', function () {
  if (!isGameOver) {
    scorePlayer1++
    if (scorePlayer1 === winningNumber) {
      isGameOver = true
      player1.classList.add('winner')
      player2.classList.add('loser')
    }
  }
  player1.textContent = scorePlayer1
})

btnPlayer2.addEventListener('click', function () {
  if (!isGameOver) {
    scorePlayer2++
    if (scorePlayer2 === winningNumber) {
      isGameOver = true
      player2.classList.add('winner')
      player1.classList.add('loser')
    }
  }
  player2.textContent = scorePlayer2
})

gameLevel.addEventListener('change', function (e) {
  winningNumber = parseInt(gameLevel.value)
  resetAll()
})

reset.addEventListener('click', function () {
  resetAll()
})

function resetAll() {
  isGameOver = false
  scorePlayer1 = 0
  scorePlayer2 = 0
  player1.textContent = 0
  player2.textContent = 0
  player1.classList.remove('winner', 'loser')
  player2.classList.remove('loser', 'winner')
}
