
var player = null
const playerSelected = document.getElementById('player-select')


changePlayer('X')

function chooseSquad(id) {
  const squad = document.getElementById('id')
  const x = 

  squad.innerHTML = player
  squad.styled.color ='#000'
}

function changePlayer(value) {
  player = value
  playerSelected.innerHTML = player
}