// 数据结构描述：列表是一组有序的数据，每个列表中的数据项称为元素。在JavaScript中，列表中的元素可以是任意数据类型。

function list() {
    this.listSize = 0;   // 列表索引
    this.length = length;  // 元素个数
    this.toString = toString; // 显示列表中元素
    this.find = find; // 查找列表中指定元素
    this.remove = remove; // 在列表中移除指定元素
    this.append = append; // 在列表末尾添加新元素
    this.dataStore = []; // 使用数组来模拟
    this.clear = clear; // 清空列表
    this.insert = insert; // 在列表指定位置插入元素
    this.contains = contains; // 判断给定值是否在列表中

    // 在列表末尾添加一个元素
    function append(element) {
        this.dataStore[this.listSize++] = element;
    };

    // 查找列表中指定元素
    function find(element) {
        let elementPos;
        this.dataStore.forEach((value, index, array) => {
            if (element == value) {
                elementPos = index;
            }
        })
        return elementPos;
    };

    // 在列表中移除一个元素
    function remove(element) {
        let elementIndex = this.find(element);
        if (elementIndex != -1) {
            this.dataStore.splice(elementIndex, 1);
            --listSize;
            return true;
        }
        return false;
    };

    // 显示列表中元素
    function toString() {
        return this.dataStore;
    };

    // 清空列表
    function clear() {
        delete this.dataStore;
        this.dataStore.length = 0;
        this.listSize = 0
    };

    // 在指定位置插入一个元素
    // splice()用于添加或删除数组中元素，（index，number,item）->开始索引，要操作的元素个数，要添加到数组的新元素。
    function insert(element, beforeElement) {
        let insertPos = this.find(beforeElement);
        if (insertPos != -1) {
            this.dataStore.splice(insertPos + 1, 0, element);
            return true;
        }
        return false;
    };

    // 判断是否包含某个元素
    function contains(element) {
        return this.find(element) != -1 ? true : false;
    };
};

// 测试
// new操作符做了什么？1. 创建一个空对象 2. 将空对象的__proto__属性指向函数的函数的原型prototype 3. 将空对象作为函数的this传进去 4. 判断函数的返回值，如果是值类型返回这个对象，如果是引用类型返回return的内容
var name = new list();
name.append("test");
name.insert("test", "oven");
name.remove("test");
name.clear()
console.log(name.toString())