var player = null
const playerSelected = document.getElementById('player-select')


changePlayer('X')

function chooseSquad(id) {
  var squad = document.getElementById(id)
  
  squad.innerHTML = player
  squad.style.color ='#000000'
}

function changePlayer(value) {
  player = value
  playerSelected.innerHTML = player
}