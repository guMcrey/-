// 方法1: typeof
function a(obj) {
    return typeof (obj) == 'string';
}
alert(a(123)); // false
alert(a('abdc'));  // true

// 方法2：constructor
function b(obj) {
    return obj.constructor === String
}
alert(b(123));  // false
alert(b('abc'));  // true

// 方法3: Object.prototype.toString.call()：判断数据类型
//       Object.prototype.slice.call()：将类数组转换为数组
function c(obj) {
    return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
}
alert(c(123));  // number
alert(c('abc'));  // string
