var player = null
const playerSelected = document.getElementById('player-select')


changePlayer('X')

function chooseSquad(id) {
  var squad = document.getElementById(id)
  
  squad.innerHTML = player
  squad.style.color ='#000000'

  if(player === 'X') {
    player = 'O'
    squad.style.backgroundColor = '#e233'
  } else {
    player = 'X'
    squad.style.backgroundColor = '#a2a3e5'
  }

  changePlayer(player)
}

function changePlayer(value) {
  player = value
  playerSelected.innerHTML = player
}