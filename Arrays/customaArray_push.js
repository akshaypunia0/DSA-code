class myArray {

    constructor() {

        this.length = 0;
        
        this.data = {};
    }

    push(item) {

        this.data[this.length] = item;

        // console.log("------", this.data);

        this.length++;

        return this.length;
        

    }

    // get(index) {

    //     return this.data[index];

    // }

    pop() {

        const lastElement = this.data[this.length-1]
        
        delete this.data[this.length - 1];

        this.length--;

        return lastElement;
    }
 


}

const myNewArray = new myArray();

myNewArray.push("Akshay");
myNewArray.push("Vishal");
myNewArray.push("Abhishek");
myNewArray.push("Ashish");



console.log(myNewArray);

// console.log(myNewArray.get(0));

myNewArray.pop();

console.log(myNewArray);


