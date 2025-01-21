// Square of a Sorted Array and return a sorted array

// const array = [-4, -1, 0, 3, 10]


// const squareOfArray = (arr) => {

//     const squareArray = [];

//     for (i = 0; i < arr.length; i++) {
//         let square = arr[i] * arr[i];
//         squareArray.push(square)


//         // squareArray = [...squareArray, square] --> if want to use this, declare array with let not with const
//     }

//     console.log(squareArray);


//     for (let i = 0; i < squareArray.length; i++) {
//         for (let j = i + 1; j < squareArray.length; j++) {
//             if (squareArray[j] < squareArray[i]) {
//                 let temp = squareArray[j];
//                 squareArray[j] = squareArray[i];
//                 squareArray[i] = temp;
//             }
//         }
//     }

//     return squareArray
// }

// console.log(squareOfArray(array));






//With two pointer

const array = [-4, -1, 0, 1, 2, 3, 4, 10];

const squareOfArray = (arr) => {
    
    let left = 0;
    let right = arr.length-1;
    const resultArray = Array(arr.length).fill(0)
    let position = resultArray.length-1;

    while(left <= right) {

        let leftValue = Math.abs(arr[left]);
        let rightValue = Math.abs(arr[right]);

        if(leftValue > rightValue) {
            resultArray[position] = leftValue * leftValue;
            left++;
        }
        else if(leftValue < rightValue){
            resultArray[position] = rightValue * rightValue;
            right--;
        }
        else if(rightValue == leftValue){
            resultArray[position] = rightValue * rightValue
            right--;
        }

        position--;
    }

    return resultArray
}


console.log(squareOfArray(array));