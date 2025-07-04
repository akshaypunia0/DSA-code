// let array = [1, 2, 3, 4, 5]

// let last = array.length-1
// let change = array.length-2

// while(change >= 0) {
//     let temp = array[last];
//     array[last] = array[change];
//     array[change] = temp;

//     change--

// }

// console.log(array);




let array = [1, 2, 3, 4, 5]

let first = 0, second = 1

while (second < array.length) {
    let temp = array[first];
    array[first] = array[second];
    array[second] = temp

    first++
    second++
}

console.log(array);
