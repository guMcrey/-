// 参考链接：https://www.cnblogs.com/cnsdhzzl/p/10208323.html

// 将对象转化为数组
var obj = { jjj: "111", ggg: "222" }
console.log('obj', obj)

// 在es5中
var arr = [];
for (var i in obj) {
    arr.push(obj[i])
}
console.log('array', arr)

// 在es6中
console.log(Object.keys(obj))

// es7中引入了跟Object.keys配套的Object.values和Object.entries,作为遍历一个对象的补充手段，供for...of循环使用
let { keys, values, entries } = Object;
for (let key of keys(obj)) {
    console.log('key', key)
}

for (let value of values(obj)) {
    console.log('value', value)
}

for (let [key, value] of entries(obj)) {
    console.log('key,value', [key, value]);
}

// Object.values()方法返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历属性的键值
Object.values(obj)

// Object.values()只返回对象自身可遍历属性
const obj = Object.create({}, { p: { value: 42 } });
Object.values(obj) // []

// Object.create()方法的第二个参数添加的对象属性p，如果不显试声明，默认是不可遍历的，因为p的属性描述对象默认是false,Object.values不会返回这个属性。
const obj = Object.create({}, {
    p:
    {
        value: 42,
        enumerable: true
    }
});
Object.values(obj) // [42]

// Object.values会过滤掉属性名为Symbol的值属性
Object.values({[Symbol()]: 123, foo: 'abc'});  // ['abc']

// 如果Object.values方法的参数是一个字符串，会返回各个字符串组成的数组
Object.values('obj'); // ['o','b','j']

// 如果参数不是对象，Object.values会先将其转为对象。由于数值和布尔值的包装对象，都不会为实例添加沸即成的属性。所以Object.values会返回空数组。
Object.values(42) // []
Object.values(true) // []

// Object.entries返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历属性的键值对数组
Object.entries(obj); // ["jjj", "111"],["ggg", "222"]

// 如果原对象的属性名是一个Symbol值，该属性会被忽略
Object.entries({[Symbol()]: 123, foo: 'abc'});  //['foo', 'abc']

// Object.entires的基本用途是遍历对象的属性
for (let [k,v] of Object.entries(obj)) {
    console.log(`${JSON.stringify(k)}: ${JSON.stringify(v)}`)
}

// Object.entries方法的另一个用处是，将对象转为真正的Map结构
const obj = { foo: 'bar', baz: 42 };
const map = new Map(Object.entries(obj));
map // Map {"jjj": "111", "ggg": "222"}


