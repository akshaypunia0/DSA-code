const value = 4
const recursion = (num) => {
    if(num >= 1) {
        if (num == 1) {
            return 1
        }
       return num * recursion(num-1)
    }
}

console.log(recursion(value));
