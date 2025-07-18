
const height = [4,2,0,3,2,5]
// const height = [0,1,0,2,1,0,1,3,2,1,2,1];

function trap(array) {

    const right = new Array(array.length);
    const left = new Array(array.length);

    let result = 0;

    left[0] = array[0];
    right[right.length-1] = array[array.length-1];

    let maxLeft = array[0];
    let maxright = array[array.length-1]


    //for finding left maximum
    function findLeftMax(array) {
        for(let i=1; i<array.length; i++) {
            for(let j=i-1; j>=0; j--) {
                if(array[j] > maxLeft) {
                    maxLeft = array[j];
                    left[i] = array[j];
                }
                else left[i] = maxLeft;
            }
        }
    }
    


    //for finding left maximum
    function findRightMax(array) {
        for(let i=array.length-2; i>=0; i--) {
            for(let j=i+1; j<array.length; j++) {
                if(array[j] > maxright){
                    maxright = array[j];
                    right[i] = array[j];
                }
                else right[i] = maxright;
            }
        }
    }

    findLeftMax(array);
    findRightMax(array);

    console.log(left);
    console.log(right);
    
    


    for(let i=0; i<array.length; i++) {
        let minValue = Math.min(left[i], right[i]);

        result += minValue - array[i]
    }

    return result;

}

console.log(trap(height));
