// You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer.
// The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain
// any leading 0's.

// Increment the large integer by one and return the resulting array of digits.


const array = [9, 9, 9, 1];

const plusOne = (digits) => {

    let end = digits.length-1;

    for(let i=end; i>=0; i--) {
        if(digits[i] < 9) {
            digits[i]++;
            return digits;
        }

        else if(digits[i] == 9) {
            digits[i] = 0;
        }
    }

    digits.unshift(1);

    return digits;

}

console.log(plusOne(array));
