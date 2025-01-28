const array1 = [1, 1, 1, 1];
const array2 = [1, 1, 1, 1]

const findTheInteger = (num1, num2) => {

    let smallestNum1 = Infinity;
    let smallestNum2 = Infinity;

    for(i=0; i<num1.length; i++) {
        
        if(smallestNum1 > num1[i]) {
            smallestNum1 = num1[i]
        }

        if(smallestNum2 > num2[i]) {
            smallestNum2 = num2[i]
        }
        
    }

    console.log(smallestNum1, smallestNum2);
    

    return smallestNum2 - smallestNum1;
}

console.log(findTheInteger(array1, array2));
