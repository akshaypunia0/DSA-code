const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]


function removeDuplicate(nums) {
    
    let i = 0;
    let j = 1;

    while (j < nums.length) {
        if(nums[i] !== nums[j]){
            nums[i+1] = nums[j];
            i++;
        }
        j++;
    }

    return console.log("Number of unique elements: ", i+1);
    
}

removeDuplicate(nums)

console.log(nums);
