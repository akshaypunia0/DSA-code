//Creating stack and PUSH POP function

const array = []

const push = (stack, element) => {

    let length = stack.length;

    stack[length] = element;

    return stack;

}

const pop = (stack) => {
    stack.length--;

    return stack;
}

console.log(push(array, 5));
console.log(push(array, 8));
console.log(pop(array));
console.log(push(array, 23));
console.log(push(array, 51));
// console.log(pop(array));
// console.log(push(array, 81));
// console.log(array);

