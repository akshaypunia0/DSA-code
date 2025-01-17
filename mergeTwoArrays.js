// Method 1

// const array1 = [1, 2, 3, 4, 5, 6, 33]
// const array2 = [7, 8, 9, 10, 78, 65, 34]

// const newArray = []

// for(let i=0; i<array1.length; i++){
//     newArray[i] = array1[i];
// }

// for(let j=0; j<array2.length; j++){

//     // let newArrayLength = newArray.length 
//     // newArray[newArrayLength] = array2[j]


//     newArray[array1.length + j] = array2[j]
// }


// console.log(newArray);





// const array1 = [1, 2, 3, 4, 5, 6, 33]
// const array2 = [7, 8, 9, 10, 78, 65, 34]

// console.log("Array1 Before merge", array1);

// let i = 0;

// let lengthofArray1 = array1.length

// while (i < array2.length) {
//     array1[lengthofArray1] = array2[i]
//     lengthofArray1++;
//     i++;
// }


// console.log("Array1 After merge", array1);











//Method 2 (With while loop -> Best approach and recommended)


const arrayA = [1, 6 ,12, 25, 34, 67, 63];
const arrayB = [2, 8, 9, 10, 11,];

const newArray = [];

let i = 0;
let j = 0;
let k = 0;

while((i < arrayA.length) && (j < arrayB.length)) {
    if (arrayA[i] < arrayB[j]) {
        newArray[k] = arrayA[i];
        i++;
    }
    else {
        newArray[k] = arrayB[j];
        j++;
    }
    k++;
    
}

if(arrayA.length > arrayB.length){
    while (i < arrayA.length) {
        newArray[k] = arrayA[i];
        i++;
        k++;
    }
}
else {
    while (j < arrayB.length) {
        newArray[k] = arrayB[j];
        j++;
        k++;
    }
}


console.log(`i = ${i}, j = ${j}, k = ${k}`);
console.log("NewArray = ", newArray);

