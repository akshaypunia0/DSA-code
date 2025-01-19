// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order

//Approach 01--> brute force

// const nums = [11, 15, 6, 3, 2]
// const target = 18

// function twoSum(arr, target) {

//     for(i=0; i<arr.length; i++) {
//         for(j=i+1; j<arr.length; j++) {
//             if (arr[i] + arr[j] == target) {
//                 return [i,j]
//             }
//         }
//     }
//     return console.log("Not found");


// }

// console.log(twoSum(nums, target));





//Approach 02--> two pointer

const nums = [2, 7 ,11, 15]
const target = 13

function twoSum(nums, target) {

    let left = 0;
    let right = nums.length-1;
    let sum = 0;

    while(left < right){
        sum = nums[left] + nums[right];

        if(sum == target){
            console.log("found");
            
            return [left, right];
        }
        else if(sum < target){
            left++;
        }
        else{
            right--;
        }
    }

    console.log("found");
    
}

console.log(twoSum(nums, target));