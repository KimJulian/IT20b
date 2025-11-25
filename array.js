class Array{

    constructor(initialData = []){
        this.data = {};
        this.length = 0;

        //Assign Element to index
        for(let i=0; i<initialData.length; i++){
            this.data[i] = initialData[i];
            this.length++;
        }
    }

    traverse(){
        let output = " ";

        for(let i=0; i<this.length; i++){
            output += this.data[i] + "";
        }

        console.log(output);
    }

    insert(index, element){

        if(index <0 || index > this.length){
            //Correcting Statement || Must be False
            console.log("Invalid Index");
            return;
        }

        //Shifting Condition
        for(let i=this.length; i>index; i--){
            this.data[i] = this.data[i-1];
        }

        //After Condition
        this.data[index] = element;
        this.length++;
    }
}

//
arr1 = new Array([4,2,3]);

arr1.traverse();