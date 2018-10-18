// currentTurn will increment up to 8 (end of game) within the cellClicked() function.
let currentTurn = 0;

// cellClassArray is an object that contains cell objects and their properties.
// Used for win/loss/tie analysis.
let cellClassArray = [];
let xArray1 = [];       // X and O arrays contain all element class names in order of clicked, based on current turn.
let xArray2 = [];
let oArray1 = [];
let oArray2 = [];




// Adding event listener to hear clicks on TicTacToe board
let cells = document.querySelectorAll('.cell');


// MAIN GAME STRUCTURE


cells.forEach(function(cell) {
    cell.addEventListener("click", cellClicked);
});


// When a cell is clicked, cellClicked() initiates game structure,
// and pushes class values of cells into arrays for win/loss/tie analysis.

function cellClicked(e) {
    console.log('Current Turn:', currentTurn);

    if (e.target.innerHTML == '') {

        if (currentTurn <= 8){

            let cellData = e.target.classList;
            
            cellClassArray.push(cellData);  // cellClassArray will contain all box classes
                                            // in the order they are clicked, for troubleshooting purposes.
            
            if (currentTurn % 2 == 0) {
                xArray1.push(cellData[1]);  // cellData[1] is 'top', 'middle', or 'bottom'
                console.log(xArray1);
                xArray2.push(cellData[2]);  // cellData[2] is 'left','middle', 'right', or 'center'
                console.log(xArray2);
            } else if (currentTurn % 2 == 1) {
                oArray1.push(cellData[1]);
                console.log(oArray1);
                oArray2.push(cellData[2]);
                console.log(oArray2);
            }

            console.log('Cell Data:', cellData);
            e.target.innerHTML = cellOutput(currentTurn);
            
            
            winLossTie(currentTurn, xArray1, xArray2, oArray1, oArray2); // Determine win/loss/tie
            
            
        };

        ++currentTurn; // End of turn
    }
};

// cellOutput(currentTurn) returns 'X' or 'O' based on the current turn, used in program to define output to HTML of cell <div>.

function cellOutput(currentTurn) {

    if (currentTurn % 2 == 0) {
        return 'X';
    } else if (currentTurn % 2 == 1) {
        return 'O';
    } else {
        console.log('Error: currentTurn undefined');
    };
};


// winLossTie() analyzes the game board to determine if a win, loss, or tie has occurred.

function winLossTie(currentTurn, xArray1, xArray2, oArray1, oArray2) {
    
    var xCenter = null;
    var oCenter = null;

    for (let index=0; index <= currentTurn; index++) {

        // Who controls center?
        if (xArray2[index] == 'center'){
            xCenter = true;
            oCenter = false;
            console.log('X controls center:', xCenter, '|', 'O controls center:', oCenter, 'flag1');
        };
        if (oArray2[index] == 'center') {
            oCenter = true;
            xCenter = false;
            console.log('X controls center:', xCenter, '|', 'O controls center:', oCenter, 'flag2');
        };
        if (index == currentTurn && xCenter != true) {
            xCenter = false;
        };
        if (index == currentTurn && oCenter != true) {
            oCenter = false;
        }; 
    };
    console.log('X controls center:', xCenter, '|', 'O controls center:', oCenter, 'flag3');

/*
    for (let index=0; index < currentTurn; index++) {
        if (xArray1[index] ) {

        }
    }
*/
    

};


// maybe I should push cellData into an array of objects
// maybe create an X array and an O array, and push cellData values into them.
// then check X and O arrays to see if, e.g. 3 'top' values exist, or 3 'left' values,
// or special case 'left', 'center', 'right' etc.