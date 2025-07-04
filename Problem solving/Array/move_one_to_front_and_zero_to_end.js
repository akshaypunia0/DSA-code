let array = [0, 1, 0, 1, 0, 0, 1, 0]


let i = 0 //0
let j = 0 //1

while(i < array.length) {

    let temp;
    if (array[i] == 0) {
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
        j++;
    }
    i++;

}

console.log(array);