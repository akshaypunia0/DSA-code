// const arr = [60, 30, 3, 9, 10, 50]

// let newEl = 70
// let position = 3
// console.log(arr);

// for( let i=arr.length-1; i>=0; i--){

//     if (i >= position)
//     {
//         arr[i+1] = arr[i]

//         if (i == position) {
//             arr[position] = newEl
//         }
//     }
// }

// console.log(arr);


// const addEleInArray = (array, index, element) => {

//     console.log(array);
    
//     for( let i=array.length-1; i>=0; i--) {

//         if(i >= index){
//             array[i+1] = array[i]

//             if (i == index) {
//                 array[index] = element
//             }
//         }
//     }

//     console.log(array);
// }

// addEleInArray(arr, 2, 34);








const array = [6, 3, 8, 32 ,1 , 89]

const insertElement = (arr, ele, index) => {

    for(let i=arr.length-1; i>=0; i--){
        if(i>=index){
            arr[i+1] = arr[i]

            if(i==index){
                arr[i] = ele
            }
        }
    }

    console.log(arr);
    
}

insertElement(array, 95, 3)