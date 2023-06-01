var player = null
const playerSelected = document.getElementById('player-select')
const allSquad = document.getElementsByClassName('squad')


changePlayer('X')

function chooseSquad(id) {
  var squad = document.getElementById(id)

  if(squad.innerHTML !== '-'){
    return
  }
  
  squad.innerHTML = player
  squad.style.color ='#000000'

  if(player === 'X') {
    player = 'O'
    squad.style.backgroundColor = '#e233'
  } else {
    player = 'X'
    squad.style.backgroundColor = '#9ff3ff'
  }

  changePlayer(player)
}

function changePlayer(value) {
  player = value
  playerSelected.innerHTML = player
}

function checkingWinner() {

}