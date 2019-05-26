"use strict";
exports.__esModule = true;
var node_1 = require("./node");
var LinkedList = /** @class */ (function () {
    function LinkedList() {
    }
    LinkedList.prototype.append = function (data) {
        var node = new node_1.Node(data);
        if (!this.head) {
            this.head = this.tail = node;
        }
        else {
            node.prev = this.tail;
            this.tail.next = node;
            this.tail = node;
        }
    };
    LinkedList.prototype.insertAtFront = function (data) {
        var node = new node_1.Node(data);
        if (!this.head) {
            this.head = this.tail = node;
        }
        else {
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
        }
    };
    LinkedList.prototype.remove = function (data) {
        var current = this.head;
        while (current) {
            if (current.data === data) {
                if (current === this.head) {
                    if (current.next) {
                        current.next.prev = null;
                    }
                    this.head = current.next;
                }
                else if (current === this.tail) {
                    this.tail = current.prev;
                    this.tail.next = null;
                }
                else {
                    current.prev.next = current.next;
                    current.next.prev = current.prev;
                }
            }
            current = current.next;
        }
    };
    LinkedList.prototype.reverse = function () {
        var current = this.head;
        var prev = null;
        while (current) {
            current.prev = current.next;
            current.next = prev;
            prev = current;
            current = current.next;
        }
        this.tail = this.head;
        this.head = prev;
    };
    LinkedList.prototype.find = function (data) {
        var current = this.head;
        while (current) {
            if (current.data === data) {
                return current;
            }
            current = current.next;
        }
        return null;
    };
    return LinkedList;
}());
exports.LinkedList = LinkedList;
