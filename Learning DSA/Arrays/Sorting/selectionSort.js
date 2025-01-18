// Asscending order --->  In this we compare 1 element to every next element of the array and swap the smaller one


const array = [33, 25, 10, 12, 5, 11, 2, 1];

// console.log("Array without sorting", array);


for (i = 0; i < array.length; i++) {

    for (j = i + 1; j < array.length; j++) {

        if (array[j] < array[i]) {
            let temp = array[j];
            array[j] = array[i];
            array[i] = temp;
        }

    }

}

console.log("Array After sorting", array);
