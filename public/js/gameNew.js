class Game {
  #gameOver;
  constructor(indicator) {
    this.#gameOver = false;
    this.indicator = indicator;
  }

  getWinner(
    player,
    computer,
    VS_INDICATOR,
    PLAYER_WIN_INDICATOR,
    com_WIN_INDICATOR
  ) {
    if (this.#gameOver) {
      console.log("Game is over. Please click Restart button to play again!");
      return;
    }
    let winner;
    if (
      (player.getHand() == "rock" && computer.getHand() == "scissors") ||
      (player.getHand() == "paper" && computer.getHand() == "rock") ||
      (player.getHand() == "scissors" && computer.getHand() == "paper")
    ) {
      winner = player;
      console.log(`The Winner is: ${winner.getName().toUpperCase()}!`);
      this.#setPlayerWin();
    } else if (
      (computer.getHand() == "rock" && player.getHand() == "scissors") ||
      (computer.getHand() == "paper" && player.getHand() == "rock") ||
      (computer.getHand() == "scissors" && player.getHand() == "paper")
    ) {
      winner = computer;
      console.log(`The Winner is: ${winner.getName().toUpperCase()}!`);
      this.#setComputerWin();
    } else {
      winner = "draw";
      console.log(`Its's a DRAW!!!`);
      this.#setDraw();
    }
    this.#setGameOver();
    return winner;
  }
  isOver() {
    return this.#gameOver;
  }
  #setGameOver() {
    this.#gameOver = true;
  }
  #setPlayerWin() {
    if (this.#gameOver) {
      console.log("Game is Over. Please click Restart button to play again!");
      return;
    }
    this.indicator.vs.classList.add("d-none");
    this.indicator.vs.playerWin.classList.remove("d-none");
  }
  #setDraw() {
    if (this.#gameOver) {
      console.log("Game is Over. Please click Restart button to play again!");
      return;
    }
    this.indicator.vs.classList.add("d-none");
    this.indicator.vs.draw.classList.remove("d-none");
  }
  restart() {
    this.#gameOver = false;
    this.indicator.vs.classList.remove("d-none");
    if (!this.indicator.draw.classList.contains("d-none")) {
      this.indicator.draw.classList.add("d-none");
    }
    if (!this.indicator.playerWin.classList.contains("d-none")) {
      this.indicator.playerWin.classList.add("d-none");
    }
    if (!this.indicator.computerWin.classList.contains("d-none")) {
      this.indicator.computerWin.classList.add("d-none");
    }
    console.log(`Restarting the Game...`);
  }
}

class Player {
  constructor(name, hands) {
    this.name = name;
    this.hands = hands;
  }

  getName() {
    return this.name;
  }
  setHand(hand) {
    console.log(
      `${this.name.toUpperCase()}  throw a hand: ${hand.toUpperCase}!`
    );
    this.hand = hand;
    this.selectedHandDOM = Array.from(this.hands).fillter(
      (h) => h.datasethand == this.hand
    )[0];
  }
}
