const gameBoardGridContainer = document.querySelector(
  "#game-board-grid-container"
);
const ticTacToeCells = gameBoardGridContainer.childNodes;
const gameStatusDisplayer = document.querySelector("#game-status")
const restartButton = document.querySelector("#restart-button")


for (let i = 0; i < ticTacToeCells.length; i++) {
  let item = ticTacToeCells[i];
  item.addEventListener("click", function (event) {
    gameBoard.playPlayerTurn(event.target.id - 1, event.target);
  });
}
const gameBoard = (function () {
  let board = ["", "", "", "", "", "", "", "", ""];
  const returnBoard = () => board;
  const returnBoardIndex = (index) => board[index];
  const setBoard = (index, symbol) => (board[index] = symbol);
  const resetBoard = () => (board = ["", "", "", "", "", "", "", "", ""]);
  const checkEmptyBoardIndex = (index) => returnBoardIndex(index) === "";
	let gameOver = false
  // Game Logic Functions
  const playPlayerTurn = function (inputCellNumber, inputCell) {
    if (checkEmptyBoardIndex(inputCellNumber) === true) {
      if (playerOne.returnPlayerTurn() == true) {
        playerOne.changePlayerTurn();
        playerTwo.changePlayerTurn();
        let playerSymbol = playerOne.returnPlayerSymbol();
        setBoard(inputCellNumber, playerSymbol);
        inputCell.textContent = playerSymbol;
        console.log(returnBoard());
      } else {
        playerOne.changePlayerTurn();
        playerTwo.changePlayerTurn();
        let playerSymbol = playerTwo.returnPlayerSymbol();
        setBoard(inputCellNumber, playerSymbol);
        inputCell.textContent = playerSymbol;
        console.log(returnBoard());
      }
    }
		console.log(checkDraw() + " draw")
    checkWinner();
  };
  const checkWinner = function () {
    console.log("Checking Winner");
    if (board[0] == "X" && board[1] == "X" && board[2] == "X") {
      gameOver = true
      console.log("Player One Won");
      gameStatusDisplayer.textContent = "Player One Won!"
    } else if (board[3] == "X" && board[4] == "X" && board[5] == "X") {
			gameOver = true
      console.log("Player One Won");
      gameStatusDisplayer.textContent = "Player One Won!"
    } else if (board[6] == "X" && board[7] == "X" && board[8] == "X") {
			gameOver = true
      console.log("Player One Won");
      gameStatusDisplayer.textContent = "Player One Won!"
    } else if (board[0] == "X" && board[3] == "X" && board[6] == "X") {
			gameOver = true
      console.log("Player One Won");
      gameStatusDisplayer.textContent = "Player One Won!"
    } else if (board[1] == "X" && board[4] == "X" && board[7] == "X") {
			gameOver = true
      console.log("Player One Won");
      gameStatusDisplayer.textContent = "Player One Won!"
    } else if (board[2] == "X" && board[5] == "X" && board[8] == "X") {
			gameOver = true
      console.log("Player One Won");
      gameStatusDisplayer.textContent = "Player One Won!"
    } else if (board[0] == "X" && board[4] == "X" && board[8] == "X") {
			gameOver = true
      console.log("Player One Won");
      gameStatusDisplayer.textContent = "Player One Won!"
    } else if (board[2] == "X" && board[4] == "X" && board[6] == "X") {
			gameOver = true
      console.log("Player One Won");
      gameStatusDisplayer.textContent = "Player One Won!"
    } else if (board[0] == "O" && board[1] == "O" && board[2] == "O") {
			gameOver = true
      console.log("Player Two Won");
      gameStatusDisplayer.textContent = "Player Two Won!"
    } else if (board[3] == "O" && board[4] == "O" && board[5] == "O") {
			gameOver = true
      console.log("Player Two Won");
      gameStatusDisplayer.textContent = "Player Two Won!"
    } else if (board[6] == "O" && board[7] == "O" && board[8] == "O") {
			gameOver = true
      console.log("Player Two Won");
      gameStatusDisplayer.textContent = "Player Two Won!"
    } else if (board[0] == "O" && board[3] == "O" && board[6] == "O") {
			gameOver = true
      console.log("Player Two Won");
      gameStatusDisplayer.textContent = "Player Two Won!"
    } else if (board[1] == "O" && board[4] == "O" && board[7] == "O") {
			gameOver = true
      console.log("Player Two Won");
      gameStatusDisplayer.textContent = "Player Two Won!"
    } else if (board[2] == "O" && board[5] == "O" && board[8] == "O") {
			gameOver = true
      console.log("Player Two Won");
      gameStatusDisplayer.textContent = "Player Two Won!"
    } else if (board[0] == "O" && board[4] == "O" && board[8] == "O") {
			gameOver = true
      console.log("Player Two Won");
      gameStatusDisplayer.textContent = "Player Two Won!"
    } else if (board[2] == "O" && board[4] == "O" && board[6] == "O") {
			gameOver = true
      console.log("Player Two Won");
      gameStatusDisplayer.textContent = "Player Two Won!"
    }
  };
	const checkDraw = function(){

    if (gameOver){
      return false
    }
    for (let i = 0; i < board.length; i++) {
      if (board[i] === "") {
        return false; // Game is still ongoing
      }
    }
    gameStatusDisplayer.textContent = "Its a draw!"
		return true
	}
  const restart = function(){
    console.log("reseting")
    board = ["", "", "", "", "", "", "", "", ""];
    gameOver = false;
    for (let i = 0; i < ticTacToeCells.length; i++) {
      let item = ticTacToeCells[i];
      item.textContent = ""
    }
    gameStatusDisplayer.textContent = ""
  }
  // End Of Game Logic Functions
  return {
    returnBoard,
    setBoard,
    resetBoard,
    returnBoardIndex,
    playPlayerTurn,
    restart,
  };
})();

restartButton.addEventListener("click" , gameBoard.restart)
const playerOne = (function () {
  let playerName = "Player 1";
  let playerSymbol = "X";
  let playerTurn = true;
  const returnPlayerName = () => playerName;
  const returnPlayerSymbol = () => playerSymbol;
  const returnPlayerTurn = () => playerTurn;
  const changePlayerName = (newName) => (playerName = newName);
  const changePlayerTurn = () => (playerTurn = !playerTurn);
  return {
    returnPlayerName,
    returnPlayerSymbol,
    returnPlayerTurn,
    changePlayerName,
    changePlayerTurn,
  };
})();
const playerTwo = (function () {
  let playerName = "Player 2";
  let playerSymbol = "O";
  let playerTurn = "false";
  const returnPlayerName = () => playerName;
  const returnPlayerSymbol = () => playerSymbol;
  const returnPlayerTurn = () => playerTurn;
  const changePlayerName = (newName) => (playerName = newName);
  const changePlayerTurn = () => (playerTurn = !playerTurn);
  return {
    returnPlayerName,
    returnPlayerSymbol,
    returnPlayerTurn,
    changePlayerName,
    changePlayerTurn,
  };
})();
