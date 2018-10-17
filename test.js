console.log('Start If/Then & Boolean Ops');
var friends = ['Matt', 'Will', 'Jackson', 'David', 'Paul', 'Kimberly', 'Jio'];
var val = 55;

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

};

console.log('');
console.log('Start While Loop');

var count = 0;
while(count < friends.length) {
    console.log(friends[count]);
    count++;
};

console.log('')
console.log('END PROGRAM');