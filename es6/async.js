// es7引入了async函数，使得异步操作变得更加方便。

/**
 * 1.async函数是Generator的语法糖
 * 2.async函数就是将Generator函数的星号替换成async，将yield替换成await而已
 */

const fs = require('fs')
const readFile = function (fileName) {
    return new Promise(function (resolve, reject) {
        fs.readFile(fileName, function (error, data) {
            if (error) return reject(error);
            resolve(data)
        });
    });
};
const gen = function* () {
    const f1 = yield readFile('/etc/fstab');
    const f2 = yield readFile('/etc/shells');
    // toString()方法可把一个逻辑值转换为字符串，并返回结果
    console.log(f1.toString());
    console.log(f2.toString());
};

// async
const asyncReadFile = async function () {
    const f1 = await readFile('/etc/fstab');
    const f2 = await readFile('/etc/shells');
    console.log(f1.toString())
    console.log(f2.toString())
}

// async函数对Generator函数进行了改进：
/**
 * 1.内置执行器：Generator函数的执行必需靠执行器，而async函数自带执行器。
 * 
 * 2.更好的语义：async和await，比起星号和yield，语义更清楚，async表示函数里有异步操作，await表示紧跟在后面的表达式需要等待结果
 * 3.更广的适用性：yiled命令后面只能是Thunk函数或Promise对象，而async函数的await命令后面，可以是Promise对象和原始类型的值（数值，字符串和布尔值，会自动转成立即resolved的Promise对象）
 * 4.返回值是Promise:async函数的返回值是Promise对象，这比Generator函数的返回值是Iterator对象方便多了
 * 5.async函数完全可以看作多个异步操作，包装成的一个Promise对象，而await命令就是内部then命令的语法糖
 */

// 基本用法
/**
 *1.async函数返回一个Promise对象，可以使用then方法添加回调函数。当函数执行的时候，一旦遇到await就会先返回，等到异步操作完成，再接着执行函数体内后面的语句。
 *  */

async function getStockPriceByName(name) {
    const symbol = await getStockSymbol(name);
    const stockPrice = await getStockPriceByName(symbol);
    return stockPrice;
}

getStockPriceByName('goog').then(function (result) {
    console.log(result);
});

 // 返回promise对象
/**
 * 1.async函数返回一个Promise对象；
 * 2.async函数内部return语句返回的值，会称为then方法回掉函数的参数
 * 3.async函数内部抛出错误，会导致返回的promise对象变为reject状态，抛出的错误对象会被catch方法回掉函数接收到。
 * 4.async函数返回的Promise对象，必须等到内部所有await命令后面的Promise对象执行完，才会发生状态改变，除非遇到return语句或者抛出错误。即只有async函数内部的异步操作执行完，才会执行then方法指定的回掉函数。
 */

// await命令
/**
 * 1，await命令后面后面是一个Promise对象，返回该对象的结果，如果不是Promise对象，就直接返回对应的值。
 * 2.任何一个await语句后面的Promise对象变为reject状态，那么整个async函数就会中断执行
 */