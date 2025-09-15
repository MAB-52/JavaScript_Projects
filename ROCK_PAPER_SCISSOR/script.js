function play(userChoice) {
  const choices = ["rock", "paper", "scissors"];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  // Update choices
  document.getElementById("user-choice").textContent = `You chose: ${userChoice}`;
  document.getElementById("computer-choice").textContent = `Computer chose: ${computerChoice}`;

  let result = "";

  if (userChoice === computerChoice) {
    result = "It's a Draw 🤝";
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    result = "You Win 🎉";
  } else {
    result = "You Lose 😢";
  }

  document.getElementById("result").textContent = `Result: ${result}`;
}
