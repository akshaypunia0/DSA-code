// const array = [2,2,3,4]
const array = [1,1,2,2,2,3,3]

let obj = {};
const allLucky = [];

function luckyNumber(array) {

    for(let i=0; i<array.length; i++) {

        if(obj[array[i]]){
            obj[array[i]] += 1;
        }
        else obj[array[i]] = 1;
    }

    for(let [key, value] of Object.entries(obj)) {
        if(key == value) {
            allLucky.push(key)
        }
    }


    // let finalNumber = allLucky[0];

    // for(let i=1; i<allLucky.length; i++) {
    //     if(allLucky[i] > finalNumber) {
    //         finalNumber = allLucky[i];
    //     }
    // }

    // return finalNumber || -1;

    return allLucky.length > 0 ? Math.max(...allLucky) : -1;
}

console.log(luckyNumber(array));
