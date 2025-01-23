//Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, 
// return the index where it would be if it were inserted in order.

//You must write an algorithm with O(log n) runtime complexity.


const nums = [1,3,5,6];
const target = 7;

const searchInsertPosition = (arr, target) => {

    let start = 0;
    let end = arr.length-1;


    while(start <= end) {

        let mid = Math.floor((start + end) / 2);

        if(arr[mid] == target) {
            console.log("Target present at: ");
            
            return mid;
        }
        else if(arr[mid] > target) {
            end = mid - 1;
        }
        else {
            start = mid + 1;
        }
    }

    // if(start > end && arr[start] != target) {
    //     console.log("Target to be inserted in array at: ");
        
    //     return start;
    // }

    return start

}


console.log(searchInsertPosition(nums, target));
