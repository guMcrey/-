// symbol

/**
 * 1.ES5d的对象属性名都是字符串，这容易造成属性名冲突。symbol为了保证每个属性的名字都是独一无二的，防止属性名冲突。
 * 2.Symbol值通过Symbol函数生成。凡是属性名属于Symbol类型，就都是独一无二的，可以保证不会与其他属性名冲突
 * 3.Symbol函数前不能使用new命令，否则会报错。因为生成的Symbol是原始类型的值不是对象，所以不能添加属性。基本上它是一种类似于字符串的数据类型。
 */

 let s = Symbol();
 typeof s // symbol

 // Symbol函数的参数只是表示对当前Symbol值的描述，因此相同参数的Symbol函数的返回值是不相等的

 let s1 = Symbol();
 let s2 = Symbol();
 s1 === s2

 // symbol值不能与其他类型的值进行运算，会报错。但Symbol值可以显式转为字符串，也可以转为布尔值，但是不能转为数值。