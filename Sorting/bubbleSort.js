// Asscending order --->  In this we swap the smallest element to left


const array = [25, 10, 12, 5, 11, 2];

console.log("Array without sorting", array);


for (i = 0; i < array.length; i++) {

    for (j = i + 1; j < array.length; j++) {

        if (array[i] > array[j]) {
            let temp = array[j];
            array[j] = array[i];
            array[i] = temp;
        }

    }

}

console.log("Array After sorting", array);
