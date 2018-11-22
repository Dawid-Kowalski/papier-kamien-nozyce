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
let computerNumber;

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

function computerMove() {

	let move;

	while(computerMoveHTML.firstChild) {
    		computerMoveHTML.removeChild(computerMoveHTML.firstChild);
	}

	move = Math.floor(Math.random()*3+1);


	if(move == 1) {
		let moveIcon = document.createElement("i");
		moveIcon.classList.add('far', 'fa-hand-paper', 'v-b-ikon');
		computerMoveHTML.appendChild(moveIcon);
		computerNumber = 1;
	}
	if(move == 2) {
		let moveIcon = document.createElement("i");
		moveIcon.classList.add('far', 'fa-hand-rock', 'v-b-ikon');
		computerMoveHTML.appendChild(moveIcon);
		computerNumber = 2;
	}
	if(move == 3) {
		let moveIcon = document.createElement("i");
		moveIcon.classList.add('far', 'fa-hand-scissors', 'v-b-ikon');
		computerMoveHTML.appendChild(moveIcon);
		computerNumber = 3;
	}
}

function move (move) {
	playerMove(move);
	computerMove();
	countResult();
}

function countResult() {

	let newResult ="\n";

	if(playerNumber == computerNumber){
		round++;
		roundHTML.innerHTML = round;
		newResult += round + " Runda zakończona remisem";
		roundInfoHTML.innerHTML += newResult;
		alert("Remis");
	}
	if(playerNumber == 2 && computerNumber == 1 || playerNumber == 3 && computerNumber == 2 || playerNumber == 1 && computerNumber == 3){
		computerPoints++;
		computerPointsHTML.innerHTML = computerPoints;
		round++;
		roundHTML.innerHTML = round;
		newResult += round + " Runda zakończona wygraną komputera";
		roundInfoHTML.innerHTML += newResult;
		alert("Komputer wygrywa runde");
	}
	if(playerNumber == 3 && computerNumber == 1 || playerNumber == 1 && computerNumber == 2 || playerNumber == 2 && computerNumber == 3){
		playerPoints++
		playerPointsHTML.innerHTML = playerPoints;
		round++;
		roundHTML.innerHTML = round;
		newResult += round + " Runda zakończona wygraną gracza";
		roundInfoHTML.innerHTML += newResult;
		alert("Gracz wygrywa runde");
	}
}