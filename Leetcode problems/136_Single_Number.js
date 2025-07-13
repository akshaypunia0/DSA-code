// My approach having both complexity O(n)

// let array = [2,2,1]
// let array = [4,1,2,1,2]

// function singleNumber(array) {

//     let obj = {};

//     for(let i=0; i<array.length; i++) {
//         if(obj[array[i]]) {
//             obj[array[i]] += 1;
//         }
//         else obj[array[i]] = 1;
//     }

//     for(let [key, value] of Object.entries(obj)) {
//         if(Number(value) === 1){
//             return Number(key)
//         }
//     }

//     return -1;
// }

// console.log(singleNumber(array));













// Optimal solution using XOR 


// let array = [2,2,1]
let array = [4,1,2,1,2]

function singleNumber(array) {

    let result = 0;

    for(i=0; i<array.length; i++) {
        result ^= array[i];
    }

    return result;
}

console.log(singleNumber(array));
