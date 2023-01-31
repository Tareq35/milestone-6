// function declaration.
// function add(first, second) {
//     const total = first + second;
//     return total;
// }

// function expression.
const add1 = function add1(first, second) {
    const total = first + second;
    return total;
}

// function expression with anonymous function.
const add2 = function (first, second) {
    const total = first + second;
    return total;
}

function add(first, second) {
    const total = first + second;
    return total;
}

function add4(first, second) {
    return first + second;
}

const add5 = function (first, second) {
    return first + second;
}

const add6 = (first, second) => first + second;

const result = add6(10, 20);
console.log(result);