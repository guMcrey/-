import { createSecureContext } from "tls";

// 链表的节点
function Node(element) {
    this.element = element;
    this.next = null;
}

// 链表类，提供操作链表的一些方法
function linkList() {
    this.head = new Node("head");
    this.find = find; // 查找给定值
    this.insert = insert; // 在链表插入给定值

    // 查找给定值
    function find(element) {
        let currNode = this.head;
        while(currNode.element != element) {
            currNode = currNode.next;
        }
        return currNode;
    }

    // 在item元素之后插入元素
    function insert(insertElement, item) {
        let newNode = new Node(insertElement);
        let currNode = this.find(item);
        newNode.next = currNode.next;
        currNode.next = newNode;
    }
}
