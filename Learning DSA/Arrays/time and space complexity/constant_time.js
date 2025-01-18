let growsery = ['egg', 'bread', 'strawberry', 'milk', 'banana'];

let findItem = (array, item) => {
    if (array[3] === item) {
        console.log(`found ${item}`);
        
    }
    else {
        console.log("Not found");
        
    }
}

findItem(growsery, 'milk');