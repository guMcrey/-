var arr = [8, 94, 15, 88, 55, 76, 21, 39];
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
        if (arr[j + 1] > arr[j]) {
            var temp = arr[j + 1];
            arr[j + 1] = arr[j];
            arr[j] = temp;
        }
    }
}
console.log(arr)


// function.__proto__ = function.prototype
// function.prototype.__proto__ = Object.prototype