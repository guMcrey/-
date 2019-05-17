// 栈是一种后入先出的数据结构，其实是一种特殊的列表，栈内的元素只能通过列表的一端访问，这一端成为i栈顶，任何不在栈顶的元素无法访问，为了访问到栈底的元素，必须先拿到上面的元素。

function stack() {
    this.dataStore = [];
    // top：记录栈顶位置
    this.top = 0;
    // 入栈：将一个元素压入栈，并返回该元素
    this.push = push;
    // 出栈：将一个元素弹出栈，并返回该元素
    this.pop = pop;
    // 返回栈顶元素，并不删除
    this.peek = peek;
    // 清空栈内的所有元素
    this.clear = clear;
    // 记录栈内元素的个数
    this.length = length;
}

// 往栈中压入一个元素
function push(element) {
    this.dataStore[this.top++] = element;
}

// 将战中元素弹出
function pop() {
    // 返回栈顶，同时将top减一，即删除栈顶元素
    return this.dataStore[--this.top];
}

// 返回栈顶元素
function peek() {
    // top值从1开始计数，数组访问从0开始
    return this.dataStore[this.top - 1]
}

// 清空栈
function clear() {
    this.top = 0;
};

// 计算栈的长度
function length() {
    // top值从0开始计数
    return this.top;
}

// 测试
let testStack = new stack();
testStack.push("test1");
testStack.push("test2");
testStack.push("test3");
console.log(testStack.length());