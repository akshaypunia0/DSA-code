const array = [1,1,1,3,3,4,3,2,4,2];

function containsDuplicate(array) {

    let existedEle = new Set();

    for(let num of array) {

        if(existedEle.has(num)) return true;

        existedEle.add(num);
    }

    return false;
}

console.log(containsDuplicate(array));
