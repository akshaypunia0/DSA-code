// Problem: Find the Second Largest Element in an Array

const array = [23, 23, 7, -34, 9, 55, 6, 66, 66, 1]

const secondLargeNumber = (array) => {
    let largestNumber = -Infinity
    let secondLargest = -Infinity

    if (array.length < 2) {
        console.log(" Null ");
        return null
    }


    for (let i = 0; i < array.length; i++) {

        if (array[i] > largestNumber) {
            secondLargest = largestNumber;
            largestNumber = array[i];
        }
        else if (array[i] > secondLargest && largestNumber != array[i]) {
            secondLargest = array[i];
        }

    }

    return secondLargest 
    
}

console.log(secondLargeNumber(array));