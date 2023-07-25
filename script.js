let gameButtons = document.querySelectorAll(".game-button");

const gameBoard = function() {
    const currentGameboard = ["","","","","","","","",""];
    function _addToArray(playerTurn, selection) {
        currentGameboard[selection] = playerTurn;
    }
    function addToGameboard(turn, id) {
        _addToArray(turn, id);
        document.getElementById(id).textContent = currentTurn;
        currentTurn === "X" ? currentTurn = "O" : currentTurn = "X";
    }
    function resetGame() {
        for (let i = 0; i < 9; i++) {
            gameBoard.currentGameboard[i] = "";
        }
        currentTurn = "X";
        gameButtons.forEach((item) => {
            item.textContent = "";
        });
    }
    return {currentGameboard, addToGameboard, resetGame};
}();

function Player(letterChoice) {
    let _score = 0;
    let _nameUpdated = false;
    let name = "Player";
    let letter = letterChoice;
    
    function win() {
        _score++;
    }
    function updateName(nameInput) {
        _nameUpdated = true;
        console.log(nameInput);
        this.name = nameInput;
    }
    return {name, letter, win, updateName};
}



playerOne = Player("X");
playerTwo = Player("O");
currentTurn = "X";

gameButtons.forEach((item) => {
    item.addEventListener("click", () => {
        if (item.textContent !== "") {
            return;
        }
        else {
            gameBoard.addToGameboard(currentTurn, item.id);
        }
    })
})