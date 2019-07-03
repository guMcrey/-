var array = [
    { number: 1 },
    { number: 2 },
    { number: 3 }
];
function copy(obj) {
    var newObj = obj.constructor === Array ? [] : {};
    if (typeof obj !== 'object') {
        return;
    }
    for (var i in obj) {
        newObj[i] = typeof obj[i] === 'object' ? copy(obj[i]) : obj[i];
    }
    return newObj;
}
var copyArray = copy(array);
copyArray[0].number = 100;
console.log(array); // [{number: 1}, { number: 2 }, { number: 3 }]
console.log(copyArray) // [{number: 100}, { number: 2 }, { number: 3 }]