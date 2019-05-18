
// 参考链接：https://blog.csdn.net/sinat_41695090/article/details/81284355
// https://segmentfault.com/a/1190000018477740

/**
 * 1.引擎在读取js代码的过程中，分为两步。第一步是整个js代码的解析读取，第二步是执行。
 * 2.在读取代码的过程中，就产生了将所有声明提升到顶端，然后再从上往下执行。因此产生了变量提升和函数提升
 * 3.函数声明存在函数提升，函数表达式不存在函数提升
 * 4.函数提升的优先级高与变量提升
 * 5.function存在变量提升，可以定义在调用语句之后，箭头函数以字面量形式赋值，是不存在变量提升的
 */

console.log('foo1', foo); // foo()
foo();  // 可以执行
var foo = 10;
foo();  // foo赋值为一个变量，无法执行foo函数
console.log(foo); // foo is not a function
function foo() {
    var a;
    console.log('a1', a); // undefined
    a = 12; // 12
    console.log('a2', a);
}
console.log('foo2', foo);


//  实际的执行顺序
function foo() {
    var a;
    console.log(a);
    a = 12;
    console.log(a);
}
var foo;
console.log(foo);
foo();
foo = 10;
foo();  //由于这里报错，foo已经被赋值，找不到这个函数，下面的都不会被执行
console.log(foo);
console.log(foo);


// 例子1：
function foo() {
    var x = 1;
}
foo();
console.log(x); // x is not defined

// 例子2：
function foo() {
    console.log(x); // 1
}
var x = 1;
foo();

// 例子3：
function foo() {
    console.log(x);
}
foo();
var x = 1;  // undefined

// 例子4：
// 函数表达式不存在变量提升
console.log(f1());  // aa
console.log(f2());  // undefined
function f1() {
    console.log('aa');
}
var f2 = function () { }



// 箭头函数和function的区别
/**
 * 1.写法不同
 */

//function的写法
function fn(a, b) {
    return a + b;
}

// 箭头函数的写法
let foo = (a, b) => { return a + b }

/**
 * 2.this的指向不同
 */

// 在function中，this指向的是调用该函数的对象
//  ---------------
function foo() {
    console.log(this)
}
var obj = { aa: foo };
foo();  // window
obj.aa(); // obj

//  -----------------
function Timer() {
    this.s1 = 0;
    this.s2 = 0;
    // 箭头函数
    setInterval(() => {
        this.s1++;
        console.log(this) // this指向timer
    }, 1000)

    // 普通函数
    setInterval(function () {
        console.log(this)  // this指向window的this
        this.s2++;
    }, 1000)
}
var timer = new Timer();
setTimeout(() => console.log('s1', timer.s1), 3100);
setTimeout(() => console.log('s2', timer.s2), 3100)
// s1: 3
// s2: 0


/**
 * 3.箭头函数不可以当构造函数:
 * 由于箭头函数没有自己的this，当然也就没有call(),apply(),bind()这些方法去改变this的指向。
 */

// 使用function方法定义构造函数
function Person(name, age) {
    this.name = name;
    this.age = age;
}
var lenhart = new Person(lenhart, 25);
console.log(lenhart); // {name:'lenhart', age: 25}

// 使用箭头函数
var Person = (name, age) => {
    this.name = name;
    this.age = age;
}
var lenhart = new Person('lenhart', 25)  // Uncaught TypeError: Person is not a constructor



/**
 * 4.变量提升:
 */

// function存在变量提升，可以定义在调用语句后
foo(); // 123
function foo() {
    console.log('123')
}

// 箭头函数以字面量形式赋值，不存在变量提升
arrowFn(); // Uncaught TypeError: arrowFn is not a function
var arrowFn = () => {
    console.log('123')
}
