Console.log('Running JS')

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