
// Adding event listener to hear clicks on TicTacToe board
let cells = document.querySelectorAll('.cell');

cells.forEach(function(cell) {
    cell.addEventListener("click", cellClicked);
});

// When a cell is clicked, cellClicked() returns list of classes for that cell
function cellClicked(e) {
    let cellData = e.target.classList;
    console.log(cellData);
    console.log(cellData[0]);
    console.log(cellData[1]);
    console.log(cellData[2]);
    e.target.innerHTML = cellOutput();
};

// Changes the cell to read 'X' or 'O' based on which turn. Stores value in array for win/loss testing.
let userTurn = 0;

function cellOutput(cellData) {

    if (userTurn % 2 == 0) {
        return 'X';
    } else if (userTurn % 2 == 1) {
        return 'O';
    } else {
        console.log('Error: userTurn undefined');
    };
};


// MAIN GAME STRUCTURE

console.log('Game Start');




console.log('Game Over')