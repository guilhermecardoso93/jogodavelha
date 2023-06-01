
var player = null
const playerSelected = document.getElementById('player-select')


changePlayer('X')

function chooseSquad(id) {
  var squad = document.getElementById(id)
  var squadColor = document.getElementsByClassName('squad')
  squad.innerHTML = player
  squadColor.styled.color ='#000000'
}

function changePlayer(value) {
  player = value
  playerSelected.innerHTML = player
}