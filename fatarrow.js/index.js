// old syntax
// function number(n) {
//     return n;
// }
// console.log(number(10));

// new syntax
const number = (n) => n;
console.log(number(10));

const add = (a, b) => {
    if (a === 10 && b === 20) {
        return a + b;
    }
}
console.log(add(10, 20));