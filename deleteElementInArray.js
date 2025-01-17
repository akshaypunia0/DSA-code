const array = [23, 54, 34 ,78 ,9, 65]

const deleteElement = (arr, index) => {

    for(let i=0; i<arr.length; i++){

        console.log(arr[i]);
        

        if(i>=index){
            arr[i] = arr[i+1]
        }
    }

    arr.length = arr.length-1

    console.log(arr);
    

}

deleteElement(array, 5)