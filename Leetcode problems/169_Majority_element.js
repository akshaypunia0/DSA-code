//My approach :----> Brute force  


// let nums1 = [3, 4, 2, 4, 4, 4, 3]
// let nums1 = [2, 2, 1, 1, 1, 2, 2]

// let minOccurance = Math.floor(nums1.length / 2)

// function majorityElement(nums1) {
//     let obj = {};

//     for(let i=0; i<nums1.length; i++) {
//         if(obj[nums1[i]]){
//             obj[nums1[i]] += 1;
//         }
//         else obj[nums1[i]] = 1;
//     }

//     for(let [key, value] of Object.entries(obj)){
//         if (value > minOccurance) {
//             console.log(obj);
//             return Number(key)
//         }
//     }

// }

// console.log(majorityElement(nums1));












// Boyer-Moore Majority Vote Algorithm

// let nums1 = [3, 4, 2, 4, 4, 4, 3]
let nums1 = [2, 2, 1, 1, 1, 2, 2]

const majorityElement = (array) => {

    let finalAnswer = array[0];
    let count = 1;

    for(let i=1; i<array.length; i++) {
        if(count == 0) {
            finalAnswer = array[i];
            count = 1;
        }
        else {
            if(finalAnswer == array[i]) count++
            else count--;
        }
    }

    return finalAnswer;
}

console.log(majorityElement(nums1));
