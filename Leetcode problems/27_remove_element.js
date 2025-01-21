// problem => Remove Element

// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the 
// elements may be changed. Then return the number of elements in nums which are not equal to val.

// Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:

// Change the array nums such that the first k elements of nums contain the elements which are not equal to val.
// The remaining elements of nums are not important as well as the size of nums. Return k.



const array = [5, 1, 3, 2, 2, 3, 5]

const removeElement = (nums, val) => {

    let start = 0;
    let end = nums.length-1;
    let k = 0;

    while(start <= end) {

        if(nums[start] == val) {
            if (nums[end] != val) {
                let temp = nums[start];
                nums[start] = nums[end];
                nums[end] = temp;
                end--;
                start++;
                nums.length = nums.length-1;
            }
            else {
                end--;
                nums.length = nums.length-1;
            }

        }
        else {
            start++;
        }
    }

    k = nums.length;
    console.log(k);
    return nums;
    

}

console.log(removeElement(array, 3));