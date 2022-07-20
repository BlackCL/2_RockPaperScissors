// Create a create() function here:

const config = {
  type: Phaser.AUTO,
  width: 450,
  height: 600,
  backgroundColor: "#3d3d3d",
  scene: {
    create,
  },
};

const game = new Phaser.Game(config);

//store game state
const gameState = {};

var userInput;
var computerChoice;

function create() {
  //create choices
  gameState.rect1 = this.add.rectangle(70, 100, 100, 60, 0xffaaaa);
  gameState.rect2 = this.add.rectangle(220, 100, 100, 60, 0xabfff7);
  gameState.rect3 = this.add.rectangle(370, 100, 100, 60, 0xffe9ab);
  //innner side
  gameState.rect10 = this.add.rectangle(70, 100, 90, 50, 0x3d3d3d);
  gameState.rect20 = this.add.rectangle(220, 100, 90, 50, 0x3d3d3d);
  gameState.rect30 = this.add.rectangle(370, 100, 90, 50, 0x3d3d3d);
  this.add.text(10, 20, "Choose Your Weapon!");
  this.add.text(50, 95, "ROCK");
  this.add.text(195, 95, "PAPER");
  this.add.text(330, 95, "SCISSORS");

  gameState.rect9 = this.add.rectangle(370, 30, 90, 30, 000000);
  this.add.text(335, 24, "Refresh");
  gameState.rect9.setInteractive();
  gameState.rect9.on("pointerup", () => {
    this.scene.restart();
  });

  //computer making choices
  const id = Math.floor(Math.random() * 3);
  if (id == 0) {
    this.computerChoice = "rock";
  } else if (id == 1) {
    this.computerChoice = "paper";
  } else {
    this.computerChoice = "scissors";
  }

  function disable() {
    gameState.rect10.disableInteractive();
    gameState.rect20.disableInteractive();
    gameState.rect30.disableInteractive();
  }

  //click rock
  gameState.rect10.setInteractive();
  gameState.rect10.on("pointerup", () => {
    gameState.rect10.fillColor = 0xf00f0aa;
    this.userInput = "rock";
    //print out results
    this.add.text(20, 180, `Your choice: ${this.userInput}`);
    this.add.text(20, 200, `Computer choice: ${this.computerChoice}`);
    this.add.text(
      20,
      250,
      determineWinner(this.userInput, this.computerChoice)
    );
    disable();
  });

  //click paper
  gameState.rect20.setInteractive();
  gameState.rect20.on("pointerup", () => {
    gameState.rect20.fillColor = 0xf00f0aa;
    this.userInput = "paper";
    this.add.text(20, 180, `Your choice: ${this.userInput}`);
    this.add.text(20, 200, `Computer choice: ${this.computerChoice}`);
    this.add.text(
      20,
      250,
      determineWinner(this.userInput, this.computerChoice)
    );
    disable();
  });
  //click scissors
  gameState.rect30.setInteractive();
  gameState.rect30.on("pointerup", () => {
    gameState.rect30.fillColor = 0xf00f0aa;
    this.userInput = "scissors";
    this.add.text(20, 180, `Your choice: ${this.userInput}`);
    this.add.text(20, 200, `Computer choice: ${this.computerChoice}`);
    this.add.text(
      20,
      250,
      determineWinner(this.userInput, this.computerChoice)
    );
    disable();
  });

  //determin the winner
  function determineWinner(userChoice, computerChoice) {
    //check if equal
    if (userChoice === computerChoice) {
      return "It's a tie!";
    }

    //test other user input
    switch (userChoice) {
      case "rock":
        if (computerChoice === "scissors") {
          return "You win!";
        } else {
          return "Computer wins.";
        }
        break;
      case "paper":
        if (computerChoice === "rock") {
          return "You win!";
        } else {
          return "Computer wins.";
        }
        return "paper";
        break;
      case "scissors":
        if (computerChoice === "paper") {
          return "You win!";
        } else {
          return "Computer wins.";
        }
        return "scissors";
        break;
    }
  }
}
