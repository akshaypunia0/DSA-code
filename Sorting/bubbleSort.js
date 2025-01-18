// Asscending order --->  In this we swap the smallest element to left


const array = [25, 10, 12, 5, 11, 2];

console.log("Array without sorting", array);


for (i = 0; i < array.length; i++) {

    for (j = 0; j < array.length; j++) {

        if (array[j] > array[j + 1]) {
            let temp = array[j];
            array[j] = array[j + 1];
            array[j + 1] = temp;
        }

    }

    console.log(array);

}

console.log("Array After sorting", array);
