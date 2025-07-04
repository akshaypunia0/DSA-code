// let array = [1, 2, 3, 4, 5, 6, 7]

// for (i = 0; i < 2; i++) {

//     let fix = 0
//     let change = 1


//     while (change < array.length) {
//         let temp = 0;
//         temp = array[fix];
//         array[fix] = array[change];
//         array[change] = temp;

//         change++
//     }
// }

// console.log(array);






// let array = [1, 2, 3, 4, 5]

// for(let j=0; j<2; j++) {

//     for(let i=array.length-1; i>0; i--) {
//         let temp = array[i];
//         array[i] = array[i-1];
//         array[i-1] = temp

//     }

// }

// console.log(array);






//left rotation

// let array = [1, 2, 3, 4, 5]
// let k = 2

// let newArray = new Array(array.length)

// for(let i = 0; i<array.length; i++) {
//     newArray[i] = array[(i+k)%array.length]
// }

// console.log(newArray);








// Right rotation

let array = [1, 2, 3, 4, 5]
let k = 2

let newArray = new Array(array.length)

for(let i=0; i<array.length; i++) {
    newArray[(i+k)%array.length] = array[i]
}

console.log(newArray);
