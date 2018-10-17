console.log('Start Program')

// GLOBAL VARIABLE DECLARATIONS
var friends = ['Matt', 'Will', 'Jackson', 'David', 'Paul', 'Kimberly', 'Jio'];
var val = 55;

/*

console.log('Start If/Then & Boolean Ops');

if(val == 55) {
    console.log('True');
} else if(val > 50 && val <100) {
    console.log('Between 50 and 100');
} else {
    console.log('False');
}

console.log('');
console.log('Start For Loop');

for(var i = 0; i < friends.length; i++) {
    console.log (i);

    if (friends[i] == 'David') {
        console.log('Found him!');
        break;
    }

}

console.log('');
console.log('Start While Loop');

var count = 0;
while(count < friends.length) {
    console.log(friends[count]);
    count++;
}

*/

function add(num1, num2) {
    console.log('Addition Function Used');
    return num1 + num2;
}

var sum = add(221, 34);
console.log(sum);

console.log(add(10, 15));


console.log('');
console.log('END PROGRAM');