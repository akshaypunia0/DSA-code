// Linear seaarch


const array = [23, 4, 5, 67, 32, 5, 0, 15];

const linearSearch = (arr, value) => {

    let found = undefined;

    for(i=0; i<arr.length; i++) {
        if(arr[i] == value) {
            found = i;
            break;
        }
    }

    if (found === undefined) {
        found = "Value not found";
    }

    return found;

}

console.log(linearSearch(array, 23));
