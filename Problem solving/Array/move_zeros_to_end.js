// Two pointer approach

// const arr = [23, 0 ,54, 1, 0, 1, 0, 3, 12]

const moveZeros = (array) => {

    let i = 0;
    let j = 0;

    while(j < array.length) {

        if(array[i] == 0 && array[j] != 0) {
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
            i++;
            j++;
        }
        else if(array[i] == 0 && array[j] == 0) {
            j++;
        }
        else{
            i++;
            j++;
        }

    }

    return array
}

// console.log(moveZeros(arr));







// const arr = [2, 0, 1, 0, 3, 12, 0]

// function moveZeros(array) {
    
//     let i = 0;

//     for(j=0; j<array.length; j++) {
//         if(array[j] != 0) {
//             let temp = array[i];
//             array[i] = array[j];
//             array[j] = temp;
//             i++;
//         }
//     }

//     return array
// }

// console.log(moveZeros(arr));
