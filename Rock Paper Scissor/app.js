let userScore = 0;
let compScore = 0;

const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("computer-score");

const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result p");

const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissor_div = document.getElementById("scissor");

function getComputerChoice() {
  const choices = ["rock", "paper", "scissor"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function convertToLetter(letter) {
  if (letter === "paper") 
    return "Paper";
  if (letter === "rock") 
    return "Rock";
  return "Scissors";
}

function win(userChoice, compChoice) {
  userScore++;
  const userChoice_div = document.getElementById(userChoice);
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
  result_p.innerHTML = `${convertToLetter(userChoice)} beats ${convertToLetter(compChoice)}. You win! 🔥`;
  document.getElementById(userChoice).classList.add("green-glow");
  setTimeout(() => userChoice_div.classList.remove("green-glow"), 600);
}

function lose(userChoice, compChoice) {
  compScore++;
  const userChoice_div = document.getElementById(userChoice);
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
  result_p.innerHTML = `${convertToLetter(userChoice)} loses to ${convertToLetter(compChoice)}. You lost.. 😥`;
  document.getElementById(userChoice).classList.add("red-glow");
  setTimeout(() => userChoice_div.classList.remove("red-glow"), 600);
}

function draw(userChoice, compChoice) {
  const userChoice_div = document.getElementById(userChoice);
  result_p.innerHTML = `${convertToLetter(userChoice)} equals ${convertToLetter(compChoice)}. It's a draw 👐`;
  document.getElementById(userChoice).classList.add("gray-glow");
  setTimeout(() => userChoice_div.classList.remove("gray-glow"), 600);
}

function game(userChoice) {
  const compChoice = getComputerChoice();
  switch (userChoice + compChoice) {
    case "rockscissor":
    case "paperrock":
    case "scissorpaper":
      win(userChoice, compChoice);
      break;
    case "rockpaper":
    case "paperscissor":
    case "scissorrock":
      lose(userChoice, compChoice);
      break;
    case "paperpaper":
    case "rockrock":
    case "scissorscissor":
      draw(userChoice, compChoice);
      break;
  }
}

function main() {
  rock_div.addEventListener("click", () => game("rock"));

  paper_div.addEventListener("click", () => game("paper"));

  scissor_div.addEventListener("click", () => game("scissor"));
}

main();