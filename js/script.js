const numberOfRoundsHTML = document.getElementById("number-of-rounds");
const playerPointsHTML = document.getElementById("player-points");
const computerPointsHTML = document.getElementById("computer-points");
const roundHTML = document.getElementById("round");
const roundInfoHTML = document.getElementById("round-info");
const playerMoveHTML = document.getElementById("player-move");
const computerMoveHTML = document.getElementById("computer-move");

let numberOfRounds;
let playerPoints;
let computerPoints;
let round;
let roundInfoText;
let playerNumber;

function prepareGame() {

	if(numberOfRoundsHTML.value == 0) {
		alert("nie wybrano ilości rund");
	} else {
		numberOfRounds = parseInt(numberOfRoundsHTML.value);
		numberOfRoundsHTML.disabled = true;

		playerPoints = 0;
		playerPointsHTML.innerHTML = playerPoints;
		computerPoints = 0;
		computerPointsHTML.innerHTML = computerPoints;
		round = 0;
		roundHTML.innerHTML = round;
		roundInfoText = "";
		roundInfoHTML.innerHTML = roundInfoText;

		while (playerMoveHTML.firstChild) {
    		playerMoveHTML.removeChild(playerMoveHTML.firstChild);
		}

		while (computerMoveHTML.firstChild) {
    		computerMoveHTML.removeChild(computerMoveHTML.firstChild);
		}
	}
}

function playerMove(move) {

	while(playerMoveHTML.firstChild) {
    		playerMoveHTML.removeChild(playerMoveHTML.firstChild);
	}

	if(move == 1) {
		let moveIcon = document.createElement("i");
		moveIcon.classList.add('far', 'fa-hand-paper', 'v-b-ikon');
		playerMoveHTML.appendChild(moveIcon);
		playerNumber = 1;
	}
	if(move == 2) {
		let moveIcon = document.createElement("i");
		moveIcon.classList.add('far', 'fa-hand-rock', 'v-b-ikon');
		playerMoveHTML.appendChild(moveIcon);
		playerNumber = 2;
	}
	if(move == 3) {
		let moveIcon = document.createElement("i");
		moveIcon.classList.add('far', 'fa-hand-scissors', 'v-b-ikon');
		playerMoveHTML.appendChild(moveIcon);
		playerNumber = 3;
	}
}

