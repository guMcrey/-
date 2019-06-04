// 不改变原数组：join()，concat()，slice()，indexOf(), forEach(), map(), filter()

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


// 2. push():可以接收任意数量的参数，把它们逐个添加到数组末尾，并返回修改后数组的长度。
//    pop()：数组末尾移除最后一项，减少数组的length值，然后返回移除的项。
var arr = ['lily', 'lucy', 'tom'];
var count = arr.push('Jack', 'Sean');
console.log('count', count);  // 5
console.log('arr', arr);  // ["lily", "lucy", "tom", "Jack", "Sean"]

var item = arr.pop();
console.log('item', item);  // Sean
console.log('arr', arr)  // ["lily", "lucy", "tom", "Jack"]


// 3. shift():删除原数组第一项，并返回删除元素的值，如果数组为空则返回undefined
//    unshift():将参数添加到原数组开头，并返回数组的长度
var arr = ['lily', 'lucy', 'tom'];
var count = arr.unshift('Jack', 'sean');
console.log('count', count); // 5
console.log('arr', arr) // ["Jack", "sean", "lily", "lucy", "tom"]
var item = arr.shift();
console.log('item', item); // Jack
console.log('arr', arr); // ["sean", "lily", "lucy", "tom"]


// 4. sort():按升序排列数组项--即最小的值位于最前面，最大的值排在最后面。sort()方法会调用每个数组项的toString()转型方法，然后比较得到的字符串，以确定如何排序，即使数组中的每一项都是数组，sort()方法比较的也是字符串。
var arr1 = ['a', 'd', 'c', 'b'];
console.log(arr1.sort());  //["a", "b", "c", "d"]
arr2 = [12, 31, 3, 23];
console.log(arr2.sort())  // arr2 = [12,31,3,23];
console.log(arr2);  // 原数组被改变

// 为了解决上述问题，sort()方法可以接收一个比较函数作为参数，以便我们指定哪个值位于哪个值的前面。比较函数接收两个参数，如果第一个参数位于第二个之前则返回一个负数，如果两个参数相等则返回0，如果第一个参数应该位于第二个之后则返回一个正数。
function compare(value1, value2) {
    if (value1 < value2) {
        return -1;
    } else if (value1 > value2) {
        return 1;
    } else {
        return 0;
    }
}
arr2 = [12, 31, 3, 23];
console.log(arr2.sort(compare)); //  [3, 12, 23, 31]

// 5. reverse():反转数组项的顺序
var arr = [13, 24, 21, 3];
console.log(arr.reverse()); // var arr = [13,24,21,3];
console.log(arr) // 原数组改变


// 6. concat():将参数添加到原数组中。这个方法会先创建当前数组一个副本，然后将接收到的参数添加到这个副本的末尾，最后返回新构建的数组，在没有给concat()方法传递参数的情况下，它只是复制当前数组并返回副本。
var arr = [1, 3, 4, 5];
var arrCopy = arr.concat(9, [11, 13]);
console.log(arrCopy)  // [1, 3, 4, 5, 9, 11, 13]
console.log(arr) // [1, 3, 4, 5] 原数组未被改变

// 当传入的不是数组，则直接把参数添加到数组后面，如果传入的是数组，则将数组中的各个项添加到数组中，但是如果传入的是一个二维数组呢？
var arrCopy2 = arr.concat([9, [11, 13]]);
console.log(arrCopy2); // [1, 3, 4, 5, 9, Array(2)]
console.log(arrCopy2[5]); // [11,13]
// arrCopy2数组的第五项是一个包含两项的数组，即concat方法只能将传入数组中的每一项添加到数组中，如果传入数组中有些项是数组，那么也会把这一数组项当作一项添加到arrCopy2中。


// 7. slice():返回从原数组中指定开始下标到结束下标之前的项组成的新数组。slice()方法可以接受一或两个参数，即要返回想的起使和结束位置。在只有一个参数的情况下，slice()方法返回从该参数指定位置开始到当前数组末尾的所有项。如果有两个参数，该方法返回起使和结束位置之间的项--但不包括结束位置的项。
var arr = [1, 3, 5, 7, 9, 22];
var arrCopy = arr.slice(1);
var arrCopy2 = arr.slice(1, 4)
var arrCopy3 = arr.slice(1, -2);
var arrCopy4 = arr.slice(-4, -1);
console.log(arr);  //  [1, 3, 5, 7, 9, 22] 原数组未发生改变
console.log(arrCopy);  // [3, 5, 7, 9, 22]
console.log(arrCopy2);  // [3, 5, 7]
console.log(arrCopy3);  // [3, 5, 7]
console.log(arrCopy4);  // [5, 7, 9]


// 8.splice():可以实现删除，插入和替换
// 删除：可以删除任意数量的想，只需指定2个参数--要删除的第一项的位置和要删除的项数。
// 插入：可以向指定位置插入任意数量的项，只需提供3个参数；起使位置、要删除的项数和要插入的任意数量的项。插入的项数不必与删除的项数相等。
// splice()方法始终会返回一个数组，该数组中包含从原数组中删除的项，如果没有删除任何项，则返回一个空数组。
var arr = [1, 2, 34, 24, 4, 11];
var arrRemoved = arr.splice(0, 2);
console.log(arrRemoved); //  [1, 2]
console.log(arr); // [34, 24, 4, 11] 原数组被改变
var arrRemoved2 = arr.splice(2, 0, 4, 6);
console.log(arr); // [34, 24, 4, 6, 4, 11]
console.log(arrRemoved2) // []
var arrRemoved3 = arr.splice(1, 1, 2, 4);
console.log(arr); // [34, 2, 4, 4, 6, 4, 11]
console.log(arrRemoved3);


// 9. indexOf()：接收两个参数--要查找的项和表示查找起点位置的索引。其中，从数组的开头（位置0）开始向后查找。
//     lastIndexOf():接收两个参数，要查找的项和表示查找起点位置的索引，其中，从数组的末尾开始向前查找。
// 这两个方法都返回要查找的项在数组中的位置，或者在没找到的情况下返回-1，在比较第一个参数与数组中的第一项时，会使用全等操作符。
var arr = [1, 3, 5, 7, 7, 3, 1];
console.log(arr.indexOf(5));  // 2
console.log(arr.lastIndexOf(5)) // 2
console.log(arr.indexOf(5, 2)); // 2
console.log(arr.lastIndexOf(5, 4)); // 2
console.log(arr.indexOf("5")); // -1
console.log(arr)


// 10. forEach():对数组每一项进行遍历循环，对数组中的每一项运行给定函数，这个方法没有返回值。参数都是function类型，默认有传参，参数分别是：遍历的数组内容；对应的数组索引，数组本身。
var arr = [1, 2, 3, 4, 5];
arr.forEach(function (x, index, a) {
    console.log(x + '|' + index + '|' + (a === arr));
});
console.log(arr); // 不改变原有数组
// 1 | 0 | true
// 2 | 1 | true
// 3 | 2 | true
// 4 | 3 | true
// 5 | 4 | true


// 11. map()：指“映射”，对数组中的每一项运行给定函数，返回每次函数调用的结果组成的数组。
var arr = [1, 2, 3, 4, 5];
var arr2 = arr.map(function (item) {
    return item * item;
})
console.log(arr2);  // [1, 4, 9, 16, 25]
console.log(arr);  // 不改变原有数组

// 12. filter()：“过滤”功能，数组中每一项运行给定函数，返回满足过滤条件组成的数组。
var arr = [1, 12, 3, 23, 423, 34];
var arr2 = arr.filter(function (x, index) {
    return index % 3 === 0 || x >= 8
});
console.log(arr2); // [1, 12, 23, 423, 34]
console.log(arr);  // 不改变原数组


// 13. every()：判断数组中每一项都是否满足条件，只有所有项都满足条件，才会返回true
var arr = [1, 2, 3, 4, 5];
var arr2 = arr.every(function (x) {
    return x < 10;
});
console.log(arr2);  // true


// 14. some():判断数组中是否存在满足条件的项，只要有一项满足条件，就会返回true
var arr = [1, 2, 3, 4, 5];
var arr2 = arr.some(function (x) {
    return x < 3;
});
console.log(arr2); // true


// 15. reduce()和reduceRight()
// 这两个方法都会实现迭代数组的所有项，然后构建一个最终返回的值。reduce()方法从数组的第一项开始，逐个遍历到最后，而reduceRight()则从数组的最后一项开始，向前遍历到第一项。
// 这两个方法都接收两个参数：一个在每一项上调用的函数和作为归并基础的初始值。
// 传给reduce()和reduceRight()的函数接受4个参数：前一个值，当前值，项的索引和数组对象。这个函数返回的任意值都作为第一个参数自动传给下一项。第一次迭代放生在数组的第二项上，因此第一个参数是数组的第一项，第二个参数是数组的第二项。
var values = [1, 2, 3, 4, 5];
var sum = values.reduceRight(function (prev, cur, index, array) {
    return prev + cur;
}, 10);
console.log(sum);  // 5