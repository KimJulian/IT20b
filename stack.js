class Stack{

    constructor(){
        this.data ={};
        this.topIndex = -1;
    }

    push(element){
        this.topIndex++;
        this.data[this.topIndex] = element;
    }

     traverse(){
        let output = "";

        for(let i=0; i<this.topIndex; i++){
            output += this.data[i] + " ";
        }

        console.log(output);
    }

    is_empty(){
        return this.topIndex === -1;
    }

    
}

//
stack1 = new Stack();

console.log(stack.is_empty());
stack1.push(4);
stack1.push(2);
stack1.push(3);
stack1.push(5);
stack1.push(8);
stack1.traverse();
console.log(stack.is_empty());
console.log(stack1.size());
console.log("The top element is " + stack1.peek());