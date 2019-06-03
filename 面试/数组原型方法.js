// 不改变原数组：join()

// 1. join(): 将数组的元素组成一个字符串，该方法只接收一个参数，即分隔符。
var arr = [1, 2, 3];
console.log(arr.join()); // 1,2,3
console.log(arr.join('-')); // 1-2-3
console.log(arr); // [1,2,3]元素组不变

// 通过join()方法可以实现重复字符串，只需传入字符串以及重复的次数，就能返回重复后的字符串。
function repeatString(str, n) {
    return new Array(n + 1).join(str);
}
console.log(repeatString('abc', 3)); // abcabcabc
console.log(repeatString('hi', 5)); // hihihihihi

