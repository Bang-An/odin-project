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

    function handleClick(event){
        let index = parseInt(event.target.id.split("-")[1]);
        if(Gameboard.getBoard()[index] !== ""){
            alert("this cell is already marked")
            return
        }   
        Gameboard.update(index, players[currPlayerIndex].maker);
        currPlayerIndex = currPlayerIndex === 0 ? 1 : 0;
    }

    return{
        startGame,
        handleClick
    }
})()

const startBtn = document.querySelector('#start-button');
startBtn.addEventListener('click', () => {
    Game.startGame();
})
// Game.startGame();