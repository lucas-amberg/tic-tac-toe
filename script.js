const gameboard = function() {
    const currentGameboard = ["","","","","","","","",""];
    function addToGameboard(playerTurn, selection) {
        currentGameboard[selection] = playerTurn;
    }
    return {currentGameboard, addToGameboard};
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