//Brute force approach

// const array = [8, 1, 15, 3, 7, 6, 4]

// let profit = 0;

// function maxProfit(array) {
    
//     for(let i = 0; i < array.length; i++) {
//         for(let j=1; j<array.length; j++) {
//             if (array[j] > array[i]) {
//                 let difference = array[j] - array[i];
//                 if (difference > profit) {
//                     profit = difference
//                 } 
//             }
//         }
//     }

// }

// maxProfit(array)
// console.log(profit);









// optimise way

const array = [8, 2, 3, 7, 6, 1, 4]

let maxProfit = 0;
let minElement = array[0]

for(let i=0; i<array.length; i++) {
    if(array[i] > minElement){

        let differernce = array[i] - minElement;

        if(differernce > maxProfit){
            maxProfit = differernce;
        }
    }
    else if (array[i] < minElement) {
        minElement = array[i]
    }
}

console.log(maxProfit);
