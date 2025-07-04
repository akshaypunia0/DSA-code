let array = [23, 54, 12, 78, 4]

let start = 0;
let end = array.length-1;

while(start < end) {
    let temp = array[start];

    array[start] = array[end];
    array[end] = temp;

    start++
    end--
}

console.log(array);
