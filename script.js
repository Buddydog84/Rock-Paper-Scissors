function getComputerChoice() {
    const randomNumber = Math.random();  // Generate a random number between 0 and 1
    
    if (randomNumber < 0.33) {
      return "rock";
    } else if (randomNumber < 0.66) {
      return "paper";
    } else {
      return "scissors";
    }
  }

  console.log(getComputerChoice());