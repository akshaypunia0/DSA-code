// Solution time complexity O(n)

// const array = [5,7,7,8,8,10];
// const array = []

// function searchRange(array, target) {

//     const result = [];

//     for(let i=0; i<array.length; i++) {
//         if(array[i] === target) {
//             result.push(i);
//         }
//     }

//     return result.length > 0 ? [result[0], result[result.length-1]] : [-1, -1]
// }

// console.log(searchRange(array, 0));











// Solution time complexity O(log n)


// const array = [5,7,7,8,8,10];
const array = []

function searchRange(array, target) {

    function findFirst(array, target) {

        let start = 0;
        let end = array.length-1;
        let first;

        while(start <= end) {
            let mid = Math.floor((start + end)/2);

            if(target == array[mid]) {
                first = mid;
                end = mid - 1;
            }
            else if(target > array[mid]) {
                start = mid + 1;
            }
            else end = mid - 1;
        }

        return first;
    }


    function findLast(array, target) {
        let start = 0;
        let end = array.length-1;
        let last;

        while(start <= end) {

            let mid = Math.floor((start + end)/2);

            if(target == array[mid]) {
                last = mid;
                start = mid + 1;
            }
            else if(target < array[mid]) {
                end = mid - 1;
            }
            else start = mid + 1;
        }

        return last;
    }

    let first = findFirst(array, target);
    let last = findLast(array, target);

    return first && last ? [first, last] : [-1, -1]
}


console.log(searchRange(array, 0));
