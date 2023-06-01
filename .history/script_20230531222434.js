var player, winner = null;
const playerSelected = document.getElementById("player-select");
const winnerPlayer = document.getElementById("winner-player");
const allSquad = document.getElementsByClassName("squad");

changePlayer("X");

function chooseSquad(id) {
  var squad = document.getElementById(id);

  if (squad.innerHTML !== "-") {
    return;
  }

  squad.innerHTML = player;
  squad.style.color = "#000000";

  if (player === "X") {
    player = "O";
    squad.style.backgroundColor = "#e233";
  } else {
    player = "X";
    squad.style.backgroundColor = "#9ff3ff";
  }

  changePlayer(player);
}

function changePlayer(value) {
  player = value;
  playerSelected.innerHTML = player;
}

function checkingWinner() {
  var squad1 = document.getElementById(1);
  var squad2 = document.getElementById(2);
  var squad3 = document.getElementById(3);
  var squad4 = document.getElementById(4);
  var squad5 = document.getElementById(5);
  var squad6 = document.getElementById(6);
  var squad7 = document.getElementById(7);
  var squad8 = document.getElementById(8);
  var squad9 = document.getElementById(9);

  if(checkSession(squad1, squad2, squad3)) {

  }
}

function changeWinnerName(squad) {
  winner = squad.
} 


function changeBackSquad() {
  squad1.style.backgroundColor = "#7efa6b";
  squad2.style.backgroundColor = "#7efa6b";
  squad3.style.backgroundColor = "#7efa6b";
}




function checkSession(squad1, squad2, squad3) {
  const equal = false;

  if(squad1.innerHTML !== '-' && squad1.innerHTML === squad2.innerHTML && squad2.innerHTML === squad3.innerHTML) {
    equal = true;
  }

  return equal;
}
