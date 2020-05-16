function LinkedList() {
    this.head = null;
    this.tail = null;
}
function Node(value, next, prev) {
    this.value = value;
    this.next = next;
    this.prev = prev;
}
LinkedList.prototype.addToHead = function(value) {
    var newNode = new Node(value, this.head, null);
    if (this.head) this.head.prev = newNode;
    else this.tail = newNode;
    this.head = newNode;
};
LinkedList.prototype.addToTail = function(value) {
    var newNode = new Node(value, null, this.tail);
    if (this.tail) this.tail.next = newNode;
    else this.head = newNode;
    this.tail = newNode;
};
LinkedList.prototype.removeHead = function() {
    if (!this.head) return null;
    var val = this.head.value;
    this.head = this.head.next;
    if (this.head) this.head.prev = null;
    else this.tail = null;
    return val;
};
LinkedList.prototype.removeTail = function() {
    if (!this.tail) return null;
    var val = this.tail.value;
    this.tail = this.tail.prev;
    if (this.tail) this.tail.next = null;
    else this.head = null;
    return val;
};
LinkedList.prototype.search = function(searchValue) {
    var currentNode = this.head;
    while (currentNode){
        if (currentNode.value === searchValue) return currentNode.value;
        currentNode = currentNode.next;
    }
    return null;
};
LinkedList.prototype.indexOf = function(value) {
    var indexes = [];
    var currentIndex = 0;
    var currentNode = this.head;
    while (currentNode){
        if (currentNode.value === value){
            indexes.push(currentIndex);
        }
        currentNode = currentNode.next;
        currentIndex++;
    }
    return indexes;
};

var myLL = new LinkedList();

//1 addToHead
// myLL.addToHead(100);
// myLL.addToHead(200);
// myLL.addToHead(300);
// console.log(myLL);

//2 addToTail
// myLL.addToTail(100);
// myLL.addToTail(200);
// myLL.addToTail(300);
// console.log(myLL);

//3 removeHead
// myLL.addToHead(100);
// myLL.addToHead(200);
// myLL.addToTail(300);
// myLL.removeHead();
// console.log(myLL.removeHead());

//4 removeTail
// myLL.addToHead('one');
// myLL.addToHead('two');
// myLL.addToHead('tree');
// console.log(myLL.removeTail());

//5 search
// myLL.addToHead('one');
// myLL.addToHead(2);
// myLL.addToHead(300);
// console.log(myLL.search(300));

//6 indexOf
myLL.addToTail(1);
myLL.addToTail(2);
myLL.addToTail(1);
myLL.addToTail(300);
myLL.addToTail(1);
myLL.addToTail(300);
console.log(myLL.indexOf(1));

//Uncomment 1-6 parts
// A linked list is an ordered collection of data elements.
// A data element can be represented as a node in a linked list.
// Each node consists of two parts: data & pointer to the next node.
