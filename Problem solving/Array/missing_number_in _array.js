// Find the Missing Number in an Array
// Hint --> sum of N natural number - sum of interger in array 

// const array = [1, 3, 2, 6 ,7, 4, 8]

function missingNumber(arr) {

    let sumOfArrayInteger = 0;
    let lengthOfArray = arr.length+1;

    for( i=0; i<arr.length; i++){
        sumOfArrayInteger += arr[i];
    }

    let sumOf_n_NaturalNumbers = lengthOfArray*(lengthOfArray+1)/2

    return sumOf_n_NaturalNumbers-sumOfArrayInteger 

}

console.log(missingNumber([1, 2, 3, 5]));
