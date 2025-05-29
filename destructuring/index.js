// object destructuring
const user = {
    id: 1,
    name: 'Jak',
    age: 30,
    education: {
        degree: 'Bachelor',
        field: 'Computer Science',
        year: 2015
    },
}

var name = user['name']; // old way

const { name: userName } = user;
// console.log(userName);

const { education: { degree } } = user;
// console.log(degree);

const { education: { degree: userDegree } = {} } = user; // if education is undefined, it will default to an empty object
// console.log(userDegree);


// array destructuring
const numbers = [1, 2, [3, 100, 500], 4, 5]

const [a, b] = numbers;
// console.log(a, b);

const [, c, , , d] = numbers; // skipping elements
// console.log(c, d);

const [, , [, e, f]] = numbers;
// console.log(e, f);

const [first, , , ...rest] = numbers;
// console.log(rest); // rest operator, collects remaining elements into an array

// value swapping
let x = 10;
let y = 20;

// old way
// var temp = x;
// x = y;
// y = temp;

[y, x] = [x, y]
console.log(x, y);




