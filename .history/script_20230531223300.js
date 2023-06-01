var player,
  winner = null;
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
  checkingWinner()
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

  if (checkSession(squad1, squad2, squad3)) {
    changeBackSquad(squad1, squad2, squad3);
    changeWinnerName(squad1);
    return
  }

  if (checkSession(squad4, squad5, squad6)) {
    changeBackSquad(squad4, squad5, squad6);
    changeWinnerName(squad4);
  }

  if (checkSession(squad7, squad8, squad9)) {
    changeBackSquad(squad7, squad8, squad9);
    changeWinnerName(squad7);
  }

  if (checkSession(squad1, squad4, squad7)) {
    changeBackSquad(squad1, squad4, squad7);
    changeWinnerName(squad1);
  }

  if (checkSession(squad2, squad5, squad8)) {
    changeBackSquad(squad2, squad5, squad8);
    changeWinnerName(squad2);
  }

  if (checkSession(squad3, squad6, squad9)) {
    changeBackSquad(squad3, squad6, squad9);
    changeWinnerName(squad3);
  }

  if (checkSession(squad1, squad5, squad9)) {
    changeBackSquad(squad1, squad5, squad9);
    changeWinnerName(squad1);
  }

  if (checkSession(squad3, squad5, squad7)) {
    changeBackSquad(squad3, squad5, squad7);
    changeWinnerName(squad3);
  }
}

function changeWinnerName(squad) {
  winner = squad.innerHTML;
  winnerPlayer.innerHTML = winner;
}

function changeBackSquad() {
  squad1.style.backgroundColor = "#7efa6b";
  squad2.style.backgroundColor = "#7efa6b";
  squad3.style.backgroundColor = "#7efa6b";
}

function checkSession(squad1, squad2, squad3) {
  const equal = false;

  if (
    squad1.innerHTML !== "-" &&
    squad1.innerHTML === squad2.innerHTML &&
    squad2.innerHTML === squad3.innerHTML
  ) {
    equal = true;
  }

  return equal;
}
