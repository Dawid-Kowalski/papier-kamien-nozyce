const numberOfRoundsHTML = document.getElementById("number-of-rounds");
const playerPointsHTML = document.getElementById("player-points");
const computerPointsHTML = document.getElementById("computer-points");
const roundHTML = document.getElementById("round");
const roundInfoHTML = document.getElementById("round-info");

let numberOfRounds;
let playerPoints;
let computerPoints;
let round;
let roundInfoText;

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
	}
}