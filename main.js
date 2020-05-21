const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' ) {
    return userInput;
  } else {
    console.log('Error!');
  }
  };
  
  const getComputerChoice = () => {
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
      case 0: 
      return 'rock';
      break;
      case 1:
      return 'paper';
      break;
      case 2:
      return 'scissors'
      break;
    }
  }
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      return 'This game is a tie!';
    }
    if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
        return "The computer won!"
      } else {
        return 'You won!';
      }
    }
    if (userChoice === 'paper') {
      if (computerChoice === 'scissors') {
        return 'Computer wins!'
      } else {
        return 'You win!'
      }
      if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
          return 'The computer won!'
        } else {
          return 'you won!'
        }
      }
    }
  };
  
  const playGame = () => {
    let userChoice = getUserChoice('rock');
    let computerChoice = getComputerChoice();
     console.log('You threw: ' + userChoice);
    console.log('The computer threw:' + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
  } 
  playGame();