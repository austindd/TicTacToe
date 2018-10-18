// userTurn will increment up to 8 (end of game) within the cellClicked() function.
let userTurn = 0;

// cellClassArray is an object that contains cell objects and their properties.
// Used for win/loss/tie analysis.
let cellClassArray = [];


// Adding event listener to hear clicks on TicTacToe board
let cells = document.querySelectorAll('.cell');

cells.forEach(function(cell) {
    cell.addEventListener("click", cellClicked);
});

// MAIN GAME STRUCTURE

// When a cell is clicked, cellClicked() returns list of classes for that cell
function cellClicked(e) {
    if (userTurn <= 8){

        let cellData = e.target.classList;
        cellClassArray.push(cellData[0], cellData[1], cellData[2]);
        console.log(cellData);
        console.log(cellData[0]);
        console.log(cellData[1]);
        console.log(cellData[2]);
        console.log('cellClassArray contains', cellClassArray);
        e.target.innerHTML = cellOutput(userTurn);
        ++userTurn;

    } else if (userTurn > 8){
        //winLossTie();
        alert('Game Over');
    }
};

if (userTurn == 8) {
    alert('Game Over (outside of function)')
}

// cellOutput(userTurn) changes the cell to read 'X' or 'O' based on which turn.
// Stores value in array for win/loss testing.
function cellOutput(userTurn) {

    if (userTurn % 2 == 0) {
        console.log('userTurn =', userTurn);
        ++userTurn;
        return 'X';
    } else if (userTurn % 2 == 1) {
        console.log('userTurn =', userTurn);
        ++userTurn;
        return 'O';
    } else {
        console.log('Error: userTurn undefined');
    };
};


// winLossTie() analyzes the game board to determine if a win, loss, or tie has occurred.
function winLossTie(cellClassArray) {

}
