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











//Method 2 (With while loop -> Best approach and recommended) Gives a sorted array finally


// const arrayA = [1, 6 ,12, 25, 34, 67, 63];
// const arrayB = [2, 8, 9, 10, 11,];

// const newArray = [];

// let i = 0;
// let j = 0;
// let k = 0;

// while((i < arrayA.length) && (j < arrayB.length)) {
//     if (arrayA[i] < arrayB[j]) {
//         newArray[k] = arrayA[i];
//         i++;
//     }
//     else {
//         newArray[k] = arrayB[j];
//         j++;
//     }
//     k++;

// }

// if(arrayA.length > arrayB.length){
//     while (i < arrayA.length) {
//         newArray[k] = arrayA[i];
//         i++;
//         k++;
//     }
// }
// else {
//     while (j < arrayB.length) {
//         newArray[k] = arrayB[j];
//         j++;
//         k++;
//     }
// }
// console.log(`i = ${i}, j = ${j}, k = ${k}`);
// console.log("NewArray = ", newArray);






// My own solution


const array1 = [1, 4, 7];
const array2 = [2, 3, 4, 6, 8, 9];


const mergeTwoArray = (array1, array2) => {

    const newArray = Array(array1.length + array2.length);

    let arrayOneIndex = array1.length - 1;
    let arrayTwoIndex = array2.length - 1;

    let i = newArray.length - 1;


    while (i >= 0) {

        if ((arrayOneIndex >= 0) && (arrayTwoIndex >= 0)) {

            if (array1[arrayOneIndex] > array2[arrayTwoIndex]) {
                newArray[i] = array1[arrayOneIndex];
                arrayOneIndex--;
            }
            else if (array1[arrayOneIndex] < array2[arrayTwoIndex]) {
                newArray[i] = array2[arrayTwoIndex];
                arrayTwoIndex--;
            }
            else {
                console.log("Entering else where i is:", i);

                newArray[i] = array1[arrayOneIndex];
                newArray[i - 1] = array1[arrayOneIndex];
                i--;
                arrayOneIndex--;
                arrayTwoIndex--;
            }

        }

        else if (arrayOneIndex >= 0) {
            newArray[i] = array1[arrayOneIndex];
            arrayOneIndex--;
        }
        else if (arrayTwoIndex >= 0) {
            newArray[i] = array2[arrayTwoIndex];
            arrayTwoIndex--;
        }

        i--;

    }

    return newArray
}

const result = mergeTwoArray(array1, array2)

console.log(result);
