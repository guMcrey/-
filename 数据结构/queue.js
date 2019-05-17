// 队列是一种特殊的列表，和栈不同的是，队列是一种先进先出的数据结构，只能在队首删除元素，在队尾添加元素。

function queue() {
    this.dataStore = [];
    // 入队，从队尾添加元素
    this.enqueue = enqueue;
    // 出队，从队首删除元素
    this.dequeue = dequeue;
    // 返回队首元素
    this.front = front;
    // 返回队尾元素
    this.back = back;
    // 显示队列中所有元素
    this.display = display;
    // 判断队列是否为空
    this.isEmpty = isEmpty;
}

// 从队尾入栈
function enqueue(element) {
    this.dataStore.push(element);
}

// 从队首出栈
function dequeue() {
    return this.dataStore.shift();
}

// 返回队首元素
function front() {
    return this.dataStore[0];
}

// 返回队尾元素
function back() {
    return this.dataStore[this.dataStore.length - 1];
}

// 显示队列中所有元素
// slice可以从已有的数组中返回选定的元素，slice(start,end)->开始位置，结束位置
function display() {
    return this.dataStore.slice();
};

// 判断队列是否为空
function isEmpty() {
    return this.dataStore.length ? false : true
};

// 测试 
let q = new queue();
q.enqueue("insert1");
q.enqueue("insert2");
console.log(q.display());
q.dequeus();