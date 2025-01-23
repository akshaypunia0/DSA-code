// Binary search

//Iterative approach

const array = [2, 5, 8, 12, 17]

const binarySearch = (arr, value) => {

    let start = 0;
    let end = arr.length - 1;

    let position = undefined;

    while (start <= end) {

        let mid = Math.floor((start + end) / 2);

        if (arr[mid] == value) {
            position = mid;
            break;
        }
        else if (arr[mid] < value) {
            start = mid + 1;
        }
        else {
            end = mid - 1;
        }
    }

    if(position === undefined) {
        position = "Value not found in array";
    }

    return position;

}

console.log(binarySearch(array, 2));
