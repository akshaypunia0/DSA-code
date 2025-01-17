const array = [23, 54, 12, 76, 56, 54, 98, 57]

let count = 0

const search = (arr, element) => {

    for( let i=0; i<arr.length; i++){

        if(element == arr[i]) {
            console.log(`Element found ${arr[i]} at index ${i}`);
            count++
            // return true
        }
    }

    console.log("Element count frequency:", count);
    


}

search(array, 54)