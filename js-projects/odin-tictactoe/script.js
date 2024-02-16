/* object:
    gameboard  
        - matrix board
        - setter function for making a move 
    palyer 
        - name, maker 
    gameController
        - initialize game (create players, select markers)
        - startGame 
        - game over/tie check 
    displayController  
*/

const gameBoard = (function () {
    const board = []

    const createBoard = function(length){
        let defaultValue = null;
        for(let i = 0; i < length; i++){
            let row = [];
            for(let j = 0; j < length; j++){
                row.push(defaultValue);
            }
            board.push(row)
        }
    }

    const markBoard = function(row, col, marker){
        if(board[row][col] === null){
            board[row][col] = marker;
        }else{
            console.error("You can not mark a cell that is already markeed ");
        }
    }

    return { board, createBoard, markBoard };
})();

const makePlayer = function(name, marker){
    return { name, marker }
}

const domController = (() => {
    let startBtn = document.getElementById("start-btn");
    function displayPrompt(playerName){
        let input = prompt(playerName + " Please enter two numbers separated by a space:")
        const parts = input.split(' ');
        const row = parseInt(parts[0], 10);
        const col = parseInt(parts[1], 10);
        return [row, col];
    } 
    return {startBtn, displayPrompt}
})();



const game = function(){
    let firstPlayer, secPlayer;

    const createFirstPlayer = function(name, marker){
        firstPlayer = makePlayer(name, marker)
    }

    const createSecPlayer = function(name, marker){
        secPlayer = makePlayer(name, marker)
    }
    
    // return winner marker, return null if no winner
    function checkWinner() {
        // check row 
        for (let i = 0; i < gameBoard.board.length; i++){
            let firstElementInRow = gameBoard.board[i][0];
            if(firstElementInRow === null){
                continue;
            }
            let count = 0;
            for (let j = 0; j < gameBoard.board.length; j++){
                if(gameBoard.board[i][j] === firstElementInRow){
                    count++;
                    if(count === gameBoard.board.length){
                        return firstElementInRow
                    }
                }
            }
        }
        // check col 
        for (let i = 0; i < gameBoard.board.length; i++){
            let firstElementInCol = gameBoard.board[0][i];
            if(firstElementInCol === null){
                continue;
            }
            let count = 0;
            for (let j = 0; j < gameBoard.board.length; j++){
                if(gameBoard.board[j][i] === firstElementInCol){
                    count++;
                    if(count === gameBoard.board.length){
                        return firstElementInCol
                    }
                }
            }
        }
        // check diagonal 
        let count = 0;
        let diagonalElement = gameBoard.board[0][0]
        for(let i = 0; i < gameBoard.board.length; i++){
            if(gameBoard.board[i][i] === diagonalElement){
                count++;
            }
        }
        if(diagonalElement !== null && count === gameBoard.board.length){
            return diagonalElement;
        }

        let count2 = 0;
        let diagonalElement2 = gameBoard.board[0][gameBoard.board.length -1]
        for(let i = 0; i < gameBoard.board.length; i++){
            if(gameBoard.board[i][gameBoard.board.length - i - 1] === diagonalElement2){
                count2++;
            }
        }
        if(diagonalElement2 !== null && count2 === gameBoard.board.length){
            return diagonalElement2;
        }
        return null;
    }

    // return true if board full, false otherwise
    function checkBoardFull(){
        for(let i = 0; i < gameBoard.board.length; i++){
            for(let j = 0; j < gameBoard.board.length; j++){
                if(gameBoard.board[i][j] === null){
                    return false;
                } 
            }
        }
        return true;
    }

    function checkGameStatus(){
        // case one party winner 
        let winnerMarker = checkWinner();
        if(winnerMarker !== null){
            return winnerMarker;
        }
        // case full 
        if(checkBoardFull()){
            return "tie"
        }
        return "continue"
    }

    function printBoard(board) {
        board.forEach(row => {
            console.log(row.join(' | '));
        });
    }

    function startGame(){
        gameBoard.createBoard(3);
        let res = "continue";
        let currentPlayer = firstPlayer;
        while(res === "continue"){
            let [row, col] = domController.displayPrompt(currentPlayer.name);
            gameBoard.markBoard(row, col, currentPlayer.marker);
            res = checkGameStatus();
            currentPlayer = currentPlayer === firstPlayer ? secPlayer : firstPlayer;
            printBoard(gameBoard.board);
        }
        return res;
    }

    return {createFirstPlayer, createSecPlayer, startGame}
}

let newGame = game();
newGame.createFirstPlayer("Allen", "X");
newGame.createSecPlayer("Shirly", "O");
let res = newGame.startGame();
console.log(res);