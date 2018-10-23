// currentTurn will increment up to 8 (end of game) within the cellClicked() function.
let currentTurn = 0;
let winner = 'UNDEFINED';
let gameOver = false;
let cellClassArray = [];

// cellClassArray is an object that contains cell objects and their properties.
// Used for win/loss/tie analysis.

let gameBoard = {
    row1: [null, null, null],
    row2: [null, null, null],
    row3: [null, null, null],
};

// Adding event listener to hear clicks on TicTacToe board
if (gameOver=false) {
    let cells = document.querySelectorAll('.cell');

    cells.forEach(function(cell) {
        cell.addEventListener("click", cellClicked);
    });
}



// When a cell is clicked, cellClicked() initiates game structure,
// and pushes class values of cells into arrays for win/loss/tie analysis.

function cellClicked(e) {
    console.log('----------');
    console.log('Current Turn:', currentTurn);

    let columnIndex = null;

    if (e.target.innerHTML == '') {

        e.target.innerHTML = cellOutput(currentTurn);

        if (currentTurn <= 8){
            let cellData = e.target.classList;
            cellClassArray.push(cellData);  // cellClassArray will contain all box classes
                                            // in the order they are clicked, for troubleshooting purposes.

            if (cellData[2] == 'left') {            // Identify which column was clicked
                columnIndex = 0;
            };
            if (cellData[2] == 'center') {
                columnIndex = 1;
            };
            if (cellData[2] == 'right') {
                columnIndex = 2;
            };

            if (currentTurn % 2 == 0) {                 // If Player X turn
                if (cellData[1] == 'top') {
                    gameBoard.row1[columnIndex] = 'X';
                };
                if (cellData[1] == 'middle') {
                    gameBoard.row2[columnIndex] = 'X';
                };
                if (cellData[1] == 'bottom') {
                    gameBoard.row3[columnIndex] = 'X';
                };

            } else if (currentTurn % 2 == 1) {          // If Player O turn
                if (cellData[1] == 'top') {
                    gameBoard.row1[columnIndex] = 'O';
                };
                if (cellData[1] == 'middle') {
                    gameBoard.row2[columnIndex] = 'O';
                };
                if (cellData[1] == 'bottom') {
                    gameBoard.row3[columnIndex] = 'O';
                };
            };
            
            if (winLossTest(gameBoard) == 'X') {
                console.log("X wins");
                endGame('X WINS!');
            };
            if (winLossTest(gameBoard) == 'O') {
                console.log('O');
                endGame('O WINS!');
            };
        } else if (currentTurn == 8 && winLossTest(gameBoard) != ('X' || 'O')) {
            endGame('Tie!');

            
        };

        ++currentTurn; // End of turn
    };
    console.log('Game Board:', gameBoard);
};


function winLossTest(gameBoard) {
    console.log('Testing Win/Loss')
    // Testing victory conditions for Player X

    if (gameBoard.row1[0] == 'X' && gameBoard.row1[1] == 'X' && gameBoard.row1[2] == 'X') {
        return 'X';
    }; 
    if (gameBoard.row2[0] == 'X' && gameBoard.row2[1] == 'X' && gameBoard.row2[2] == 'X') {
        return 'X';
    };
    if (gameBoard.row3[0] == 'X' && gameBoard.row3[1] == 'X' && gameBoard.row3[2] == 'X') {
        return 'X';
    };
    if (gameBoard.row1[0] == 'X' && gameBoard.row2[0] == 'X' && gameBoard.row3[0] == 'X') {
        return 'X';
    };
    if (gameBoard.row1[1] == 'X' && gameBoard.row2[1] == 'X' && gameBoard.row3[1] == 'X') {
        return 'X';
    };
    if (gameBoard.row1[2] == 'X' && gameBoard.row2[2] == 'X' && gameBoard.row3[2] == 'X') {
        return 'X';
    };
    if (gameBoard.row1[0] == 'X' && gameBoard.row2[1] == 'X' && gameBoard.row3[2] == 'X') {
        return 'X';
    };
    if (gameBoard.row3[0] == 'X' && gameBoard.row2[1] == 'X' && gameBoard.row1[2] == 'X') {
        return 'X';
    };

    // Testing victory conditions for Player O

    if (gameBoard.row1[0] == 'O' && gameBoard.row1[1] == 'O' && gameBoard.row1[2] == 'O') {
        return 'O';
    }; 
    if (gameBoard.row2[0] == 'O' && gameBoard.row2[1] == 'O' && gameBoard.row2[2] == 'O') {
        return 'O';
    };
    if (gameBoard.row3[0] == 'O' && gameBoard.row3[1] == 'O' && gameBoard.row3[2] == 'O') {
        return 'O';
    };
    if (gameBoard.row1[0] == 'O' && gameBoard.row2[0] == 'O' && gameBoard.row3[0] == 'O') {
        return 'O';
    };
    if (gameBoard.row1[1] == 'O' && gameBoard.row2[1] == 'O' && gameBoard.row3[1] == 'O') {
        return 'O';
    };
    if (gameBoard.row1[2] == 'O' && gameBoard.row2[2] == 'O' && gameBoard.row3[2] == 'O') {
        return 'O';
    };
    if (gameBoard.row1[0] == 'O' && gameBoard.row2[1] == 'O' && gameBoard.row3[2] == 'O') {
        return 'O';
    };
    if (gameBoard.row3[0] == 'O' && gameBoard.row2[1] == 'O' && gameBoard.row1[2] == 'O') {
        return 'O';
    };


    // Testing tie conditions
        if (gameBoard.row1[0] != null && 
            gameBoard.row1[1] != null && 
            gameBoard.row1[2] != null &&
            
            gameBoard.row2[0] != null && 
            gameBoard.row2[1] != null && 
            gameBoard.row2[2] != null &&

            gameBoard.row3[0] != null && 
            gameBoard.row3[1] != null && 
            gameBoard.row3[2] != null &&

            currentTurn < 9) {
            endGame('TIE GAME');
        };

};

// cellOutput(currentTurn) returns 'X' or 'O' based on the current turn, used in program to define output to HTML of cell <div>.

function cellOutput(currentTurn) {
    if (gameOver == false) {
        if (currentTurn % 2 == 0) {
            return 'X';
        } else if (currentTurn % 2 == 1) {
            return 'O';
        } else {
            console.log('Error: currentTurn undefined');
        };
    };
};

function endGame(gameResult) {
    console.log(gameResult);
    gameOver = true;
    console.log('gameOver =', gameOver)
    document.getElementById('messageBanner').innerHTML = 'GAME OVER';
    document.getElementById('messageBanner').style.display = 'block'
    document.getElementById('resultBanner').innerHTML = gameResult;
    document.getElementById('resultBanner').style.display = 'block';
    document.getElementById('resetButton').style.display = 'block';


    cells.forEach(function(cell) {
        cell.removeEventListener("click", cellClicked);
    });

}

let resetButton = document.querySelectorAll('#resetButton');
resetButton.forEach(function(reset) {
    reset.addEventListener("click", resetButtonClicked);
});



function resetButtonClicked(e) {

    if (gameOver == true) {

        console.log('Board Reset');

        document.getElementById('messageBanner').innerHTML = '';
        document.getElementById('resultBanner').innerHTML = '';
        document.getElementById('resultBanner').style.display = 'none';
        document.getElementsByClassName('cell').innerHTML = '';

        gameBoard.row1[0] = null;
        gameBoard.row1[1] = null; 
        gameBoard.row1[2] = null;
        
        gameBoard.row2[0] = null; 
        gameBoard.row2[1] = null;
        gameBoard.row2[2] = null;

        gameBoard.row3[0] = null; 
        gameBoard.row3[1] = null; 
        gameBoard.row3[2] = null;

        gameResult = null;
        gameOver = false;


    };
};


