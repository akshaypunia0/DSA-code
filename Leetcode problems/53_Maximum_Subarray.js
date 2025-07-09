//Bruteforce solution

// const array = [-2,1,-3,4,-1,2,1,-5,4]

// const maxSum = (array) => {
//     let maximumSum = 0;

//     for(let i=0; i<array.length-1; i++) {

//         let currentSum = 0;
        
//         for(let j=i; j<array.length; j++) {

//             currentSum += array[j];

//             if (currentSum > maximumSum) {
//                 maximumSum = currentSum;
//             }
//         }
//     }

//     return maximumSum;
// }

// console.log(maxSum(array));












// Kadane's algorithm

// const array = [-2,1,-3,4,-1,2,1,-5,4]

// function maxSum(array) {

//     let maximumSum = -Infinity;

//     let currentSum = 0;

//     for(let i=0; i<array.length; i++){

//         currentSum += array[i]

//         if(currentSum > maximumSum){
//             maximumSum = currentSum
//         };

//         if(currentSum < 0) {
//             currentSum = 0;
//         };
//     }

//     return maximumSum
// }

// console.log(maxSum(array));
