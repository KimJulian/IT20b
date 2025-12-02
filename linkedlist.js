class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList{

    constructor(){
        this.head = null;
    }

   
}

let list1 = new LinkedList();
list1.insert_at_beginning(4);
list1.insert_at_beginning(2);
list1.insert_at_beginning(3);
console.log(list1.traverse());