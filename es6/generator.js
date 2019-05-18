// Generator函数是es6提供的一种异步编程解决方案。Generator函数是一个状态机，封装了多个内部状态。执行Generator函数会返回一个遍历器对象，Generator函数除了 状态机还是一个遍历器对象生成函数。返回的遍历器对象，可以依次遍历Generator函数内部的每一个状态。
// 形式上，Generator函数是一个普通函数，有两个特征，1.function和关键字与函数之间有一个星号，2.函数体内部使用yield表达式，定义不同的内部状态。

function* helloWorldGenerator() {
    yield 'hello';
    yield 'world';
    return 'ending';
}
var hw = helloWorldGenerator();

/** 
 * 1.Generator函数helloWorldGenerator，内部有两个yield表达式，即该函数有三种状态：hello,world,return语句
 * 2.调用Generator函数后，该函数并不执行，返回的也不是函数运行结果，而是一个指向内部状态的指针对象。
 * 3.必须使用遍历器对象的next方法，是的指针指向下一个状态。即每次调用next方法，内部指针就从函数头部或第一次停下来的地方开始执行，直到遇到下一个yield表法师（或return语句）为止。
 * 4.Generator函数是分段执行的，yield表达式是暂停执行的标记，而next方法可以恢复执行
*/

// 第一次调用，Generator函数开始执行，直到遇到第一个yield表达式为止。next()返回一个对象。它的value属性就是当前yield表达式的值hello，done属性的值false，表示遍历还没有结束。

hw.next()  // {value: "hello", done: false}

// 第二次调用，Generator函数从上次yield表达式停下的地方，一直执行到下一个yield表达式。next()返回的对象的value属性就是当前yield表达式的值world,done书相的值false,表示遍历的值还没有结束

hw.next() // {value: "world", done: false}

// 第三次调用，Generator函数从上次yield表达式停下的地方，一直执行到return语句（如果没有return语句，就执行到函数结束）。next方法返回的对象的value属性，就是紧跟在return语句后面的表达式的值（如果没有return语句，则value属性的值为undefined），done书相的值true，表示遍历已经结束。
hw.next() // {value: "ending", done: true}

// 第四次调用，此时Generator函数已经运行完毕，next方法返回对象的value属性为undefined，done属性为true。以后再调用next方法，返回的就是这个值。
hw.next() // {value:"undefined", done: true}


/**
 * 1.需要注意的是: yield表达式后面的表达式，只有当调用next方法，内部指针指向该语句时才会执行，因此等于为JavaScript提供了手动的"惰性求值”的语法功能
 * 2.yield表达式与return语句既有相似之处，也有区别。相似之处在于，都能返回紧跟在语句后面的那个表达式的值。区别是每次遇到yield，函数暂停执行，下一次再从该位置继续向后执行，而return语句不具备位置记忆的功能。在函数里面，只能执行一次（或者说一个）return语句，但是可以执行多次yield表达式。正常函数只能返回一个值，因为只能执行一次return；Genreator函数可以返回一系列的值，因为可以有任意多个yield。从另一个角度看，Genertor生成了一系列的值（生成器）
 */

 // Generator 函数可以不用yield表达式，这就变成了一个单纯的暂缓执行函数
 function* f() {
     console.log('执行了！')
 }
 var generator = f()
 setTimeout(function() {
     generator.next()
 }, 2000);


 // for...of循环
/**
 * 1.for...of循环可以自动遍历Generator函数。一次显示5个yield表达式的值。
 * 2.一旦next方法的返回对象的done属性为true，for...of循环就会终止，且不包含该返回对象，所以上面代码的return语句返回的6，不包括在for...of循环中
 */
function* foo() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
    return 6;
}
for (let v of foo()) {
    console.log(v) // 1 2 3 4 5
}

// 除了for...of循环外，拓展运算符（...）、解构赋值和Array.from方法内部调用的，都是遍历器接口。
function* numbers() {
    yield 1
    yield 2
    return 3
    yield 4
}
// 拓展运算符
[...numbers()]  // [1,2]

// Array.from方法
Array.from(numbers()) // [1,2]

// 解构赋值
let [x,y] = numbers()
x // 1
y // 2

// for...of循环
for(let n of numbers()) {
    console.log(n)
} 
// 1
// 2

// next(),throw(),return的共同点
/**
 *next(),throw(),return()这三个方法本质上是同一件事，可以放在一起理解。他们的作用都是让Generator函数恢复指向，并且使用不同的语句替换yield表达式
 */



