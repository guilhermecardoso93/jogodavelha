
var player = null
const playerSelected = document.getElementById('player-select')


changePlayer('X')

function chooseSquad(id) {
  const squad = document.getElementsById('id')
  const x = 

  squad.innerHTML = player
  squad.styled.color ='#000'
}

function changePlayer(value) {
  player = value
  playerSelected.innerHTML = player
}