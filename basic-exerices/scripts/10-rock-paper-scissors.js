let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};

updateScoreElement();

function playGame(playerMove) {
  computerMove = pickComputerMove();
  let result = "";
  if (playerMove === "Scissors") {
    if (computerMove === "Scissors") {
      result = "Tie.";
    } else if (computerMove === "Rock") {
      result = "You Lose.";
    } else if (computerMove === "Paper") {
      result = "You Win.";
    }
  } else if (playerMove === "Paper") {
    if (computerMove === "Paper") {
      result = "Tie.";
    } else if (computerMove === "Scissors") {
      result = "You Lose.";
    } else if (computerMove === "Rock") {
      result = "You Win.";
    }
  } else if (playerMove === "Rock") {
    if (computerMove === "Rock") {
      result = "Tie.";
    } else if (computerMove === "Paper") {
      result = "You Lose.";
    } else if (computerMove === "Scissors") {
      result = "You Win.";
    }
  }

  if (result === "You Win.") {
    score.wins += 1;
  } else if (result === "You Lose.") {
    score.losses += 1;
  } else if (result === "Tie.") {
    score.ties += 1;
  }

  localStorage.setItem("score", JSON.stringify(score));

  updateScoreElement();
  updateResultElement(result);
  updateMovesElement(playerMove, computerMove);

  // alert(
  //   `You picked ${playerMove}. Computer picked ${computerMove}. ${result}\nWins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`
  // );
}

function updateScoreElement() {
  document.querySelector(
    ".js-score"
  ).innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function updateResultElement(result) {
  document.querySelector(".js-result").innerHTML = `${result}`;
}

function updateMovesElement(playerMove, computerMove) {
  document.querySelector(
    ".js-moves"
  ).innerHTML = `You <img src="10-emojis/${playerMove}-emoji.png" class="move-icon"> VS <img src="10-emojis/${computerMove}-emoji.png" class="move-icon"> Computer`
}

function removeMovesElement() {
  document.querySelector(".js-moves").innerHTML = "";
}

function pickComputerMove() {
  const randomNumber = Math.random();
  let computerMove = "";
  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "Rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "Paper";
  } else if (randomNumber < 1) {
    computerMove = "Scissors";
  }

  return computerMove;
}