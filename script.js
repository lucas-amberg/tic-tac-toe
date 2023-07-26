const gameBoard = function() {
    const currentGameboard = ["","","","","","","","",""];
    function _addToArray(playerTurn, selection) {
        currentGameboard[selection] = playerTurn;
    }
    function addToGameboard(turn, id) {
        _addToArray(turn, id);
        document.getElementById(id).textContent = currentTurn;
        currentTurn === "X" ? currentTurn = "O" : currentTurn = "X";
        _checkGameStatus();
    }
    function resetGame() {
        for (let i = 0; i < 9; i++) {
            gameBoard.currentGameboard[i] = "";
        }
        currentTurn = "X";
        documentElement.gameButtons.forEach((item) => {
            item.textContent = "";
            item.removeAttribute("disabled");
        });
        documentElement.popUp.style.display = "none";
    }
    function _endGame() {
        documentElement.gameButtons.forEach((item) => {
            item.setAttribute("disabled", true);
        })
        documentElement.updateMobileScore();
        documentElement.popUp.style.display = "flex";
    }
    function _checkGameStatus() {
        if (currentGameboard[0] === "X" && 
        currentGameboard[1] === "X" &&
        currentGameboard[2] === "X") {
            playerOne.win();
            _endGame();
        }
        else if (currentGameboard[0] === "O" && 
        currentGameboard[1] === "O" &&
        currentGameboard[2] === "O") {
            playerTwo.win();
            _endGame();
        }
        else if (currentGameboard[3] === "X" && 
        currentGameboard[4] === "X" &&
        currentGameboard[5] === "X") {
            playerOne.win();
            _endGame();
        }
        else if (currentGameboard[3] === "O" && 
        currentGameboard[4] === "O" &&
        currentGameboard[5] === "O") {
            playerTwo.win();
            _endGame();
        }
        else if (currentGameboard[6] === "X" && 
        currentGameboard[7] === "X" &&
        currentGameboard[8] === "X") {
            playerOne.win();
            _endGame();
        }
        else if (currentGameboard[6] === "O" && 
        currentGameboard[7] === "O" &&
        currentGameboard[8] === "O") {
            playerTwo.win();
            _endGame();
        }
        else if (currentGameboard[0] === "X" && 
        currentGameboard[3] === "X" &&
        currentGameboard[6] === "X") {
            playerOne.win();
            _endGame();
        }
        else if (currentGameboard[0] === "O" && 
        currentGameboard[3] === "O" &&
        currentGameboard[6] === "O") {
            playerTwo.win();
            _endGame();
        }
        else if (currentGameboard[1] === "X" && 
        currentGameboard[4] === "X" &&
        currentGameboard[7] === "X") {
            playerOne.win();
            _endGame();
        }
        else if (currentGameboard[1] === "O" && 
        currentGameboard[4] === "O" &&
        currentGameboard[7] === "O") {
            playerTwo.win();
            _endGame();
        }
        else if (currentGameboard[2] === "X" && 
        currentGameboard[5] === "X" &&
        currentGameboard[8] === "X") {
            playerOne.win();
            _endGame();
        }
        else if (currentGameboard[2] === "O" && 
        currentGameboard[5] === "O" &&
        currentGameboard[8] === "O") {
            playerTwo.win();
            _endGame();
        }
        else if (currentGameboard[0] === "X" && 
        currentGameboard[4] === "X" &&
        currentGameboard[8] === "X") {
            playerOne.win();
            _endGame();
        }
        else if (currentGameboard[0] === "O" && 
        currentGameboard[4] === "O" &&
        currentGameboard[8] === "O") {
            playerTwo.win();
            _endGame();
        }
        else if (currentGameboard[2] === "X" && 
        currentGameboard[4] === "X" &&
        currentGameboard[6] === "X") {
            playerOne.win();
            _endGame();
        }
        else if (currentGameboard[2] === "O" && 
        currentGameboard[4] === "O" &&
        currentGameboard[6] === "O") {
            playerTwo.win();
            _endGame();
        }
        else if (currentGameboard.includes("") === false) {
            documentElement.updatePopUpText("tie");
            _endGame();
        }
    }
    return {currentGameboard, addToGameboard, resetGame};
}();

function Player(letterChoice) {
    let score = 0;
    let name = "Player";
    let letter = letterChoice;
    function win() {
        this.score++;
        documentElement.updateScore(this.letter);
        documentElement.updatePopUpText(this.letter);
    }
    function updateName(nameInput) {
        console.log(nameInput);
        this.name = nameInput;
    }
    return {name, letter, win, updateName, score};
}

const documentElement = {
    gameButtons: document.querySelectorAll(".game-button"),

    playerOneNameButton: document.querySelector(".player-one-name"),
    playerTwoNameButton: document.querySelector(".player-two-name"),

    playerOneNameInput: document.querySelector('input[placeholder="Player One"]'),
    playerTwoNameInput: document.querySelector('input[placeholder="Player Two"]'),

    playerOneNameContainer: document.querySelector(".player-one .player-name"),
    playerTwoNameContainer: document.querySelector(".player-two .player-name"),

    playerOneScoreCard: document.querySelector(".player-one-score"),
    playerTwoScoreCard: document.querySelector(".player-two-score"),

    popUp: document.querySelector(".game-end-pop-up"),
    newGameButton: document.querySelector(".new-game-button"),
    popUpText: document.querySelector(".who-won").textContent,

    updateMobileScore() {
        document.querySelector(".mobile-score").textContent = `Score: ${playerOne.score} - ${playerTwo.score}`
    },

    updateScore (playerLetter) {
        if (playerLetter === "X") {
            documentElement.playerOneScoreCard.textContent = `Score: ${playerOne.score}`;
        } 
        else if (playerLetter === "O") {
            documentElement.playerTwoScoreCard.textContent = `Score: ${playerTwo.score}`;
        }
        
    },
    updatePopUpText (winner) {
        if (winner === "X") {
            document.querySelector(".who-won").textContent = `Player One Won`;
        } 
        else if (winner === "O") {
            document.querySelector(".who-won").textContent = `Player Two Won`;
        }
        else if (winner === "tie") {
            document.querySelector(".who-won").textContent = `Cats Game`;
        }
    }
};

playerOne = Player("X");
playerTwo = Player("O");
currentTurn = "X";

documentElement.gameButtons.forEach((item) => {
    item.addEventListener("click", () => {
        if (item.textContent !== "") {
            return;
        }
        else {
            gameBoard.addToGameboard(currentTurn, item.id);
        }
    })
});

documentElement.playerOneNameButton.addEventListener("click", ()=> {
    changePlayerName(1);
});

documentElement.playerTwoNameButton.addEventListener("click", ()=> {
    changePlayerName(2);
});

documentElement.newGameButton.addEventListener("click", () => {
    gameBoard.resetGame();
})

function changePlayerName(playerNum) {
    if (playerNum === 1) {
        playerOne.updateName(documentElement.playerOneNameInput.value);
        documentElement.playerOneNameContainer.innerHTML = `<div class="player-name-change">${playerOne.name}</div>`;
    }
    else if (playerNum === 2) {
        playerTwo.updateName(documentElement.playerTwoNameInput.value);
        documentElement.playerTwoNameContainer.innerHTML = `<div class="player-name-change">${playerTwo.name}</div>`;
    }
}