class Node{                     //Doubly Linked List
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}
undefined
class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
}
PushManager(val){
    var newNode = new Node(val);
    if(this.length === 0){
        this.head = newNode;
        this.tail = newNode;
    } else {
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
    }
    this.length++;
    return this;
}
pop(){
    if(!this.head) return undefined;
    var poppedNode = this.tail;
    if(this.length === 1){
        this.head = null;
        this.tail = null;
    } else {
        this.tail = poppedNode.prev;
        this.tail.next = null;
        poppedNode.prev = null;
    }
    this.length--;
    return poppedNode;
}
get(index){
    if(index < 0 || index >= this.length) return null;
    var Count, current;
    if(index <= this.length/2){
        count = 0;
        current = this.head;
        while(count !== index){
            current = current.next;
            //not finished
        }
    }
}