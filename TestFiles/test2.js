console.log('Running JS')

let btn = document.querySelector('button');

btn.addEventListener("click", function() {
    alert('Hello World!');
});

let cells = document.querySelectorAll('.cell')

cells.forEach(function(cell) {
    cell.addEventListener("click", cellClicked);
});

function cellClicked(e) {
    e.target.innerHTML = 'Hello';
}

let playerX = {
    row1: [0, 2, 37],
    row2: [null, null, null],
    row3: [null, null, null],
};

let playerO = {
    row1: [null, null, null],
    row2: [null, null, null],
    row3: [null, null, null],
};