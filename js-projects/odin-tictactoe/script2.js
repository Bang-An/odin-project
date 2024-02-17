// Gameboard: IFEE
//     board 
//     getBoard()
//     render() 
//     update()
//     return {getBoard, render, update}


// createPlayer: factory Function 

// game: IFEE
//     players = []
//     currPlayerIndex = 0
//     gameOver = false 
//     start()
//     handleClick()
//     restart()
//     checkforWin(Gameboard.get)
//     checkforTie(Gameboard.get)

// displayController: IFEE

const Gameboard = (() => {
    let board = ["", "", "", "", "", "", "", "", ""];

    function getBoard(){
        return board;
    }

    function render(){
        let displayBoard = document.getElementById('gameboard');
        let boardContent = "";

        board.forEach((value, index) => {
            boardContent += `<div class="square" id="square-${index}">${value}</div>`;
        })
        displayBoard.innerHTML = boardContent;
        board.forEach((_ , index) => {
            document.getElementById(`square-${index}`).addEventListener('click', Game.handleClick);
        })
    }

    function update(index, maker){
        board[index] = maker;
        render();
    }
    
    return {
        getBoard,
        render,
        update
    }
    
})()

function createPlayer(name, maker){
    return {name, maker};
}

const displayController = (() => {
    function diplayMessage(message){
        document.querySelector('#message').innerHTML = message;
    }

    return {
        diplayMessage
    }
})()

const Game = (() =>{
    let players;
    let currPlayerIndex;
    let gameOver;

    function startGame(){
        players = [
            createPlayer(document.querySelector('#player1').value, "X"),
            createPlayer(document.querySelector("#player2").value, "O")
        ]

        currPlayerIndex = 0;
        gameOver = false;
        Gameboard.render();

    }

    function restartGame(){
        Gameboard.getBoard().forEach((_, index) => {
            Gameboard.update(index, "");
        });
        startGame();
        document.querySelector("#message").innerHTML = "";
        gameOver = false;
    }

    function handleClick(event){
        if(gameOver){
            return;
        }

        let index = parseInt(event.target.id.split("-")[1]);
        if(Gameboard.getBoard()[index] !== ""){
            displayController.diplayMessage("this cell is already taken")
            return;
        }   
        Gameboard.update(index, players[currPlayerIndex].maker);

        if(checkWinner(Gameboard.getBoard())){
            gameOver = true;
            displayController.diplayMessage(`${players[currPlayerIndex].name} won the game`)
        }else if(checkTie(Gameboard.getBoard())){
            gameOver = true;
            displayController.diplayMessage("Tie!")
        }
        
        
        currPlayerIndex = currPlayerIndex === 0 ? 1 : 0;
    }

    function checkWinner(board){
        const winningCondition = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]
        for(let i = 0; i < winningCondition.length; i++){
            const [a, b, c] = winningCondition[i];
            if(board[a] && board[a] === board[b] && board[b] === board[c]){
                return true;
            }
        }
        return false;
    }

    function checkTie(board){
        return board.every(cell => cell !== "");
    }

    return{
        startGame,
        handleClick,
        restartGame
    }
})()


const domControl = (() => {
    const startBtn = document.querySelector('#start-button');
    startBtn.addEventListener('click', () => {
        Game.startGame();
    })

    const restartBtn = document.querySelector('#restart-button');
    restartBtn.addEventListener('click', () => {
        Game.restartGame();
});
})()