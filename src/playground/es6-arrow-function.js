const square = function (x) {
    return x * x;
};

const squareArrow = (x) => {
    return x * x;
}
const squareArrow2 = x => x * x;

// const firstName = (fullName) => {
//     return fullName.split(' ')[0];
// }

const firstName = fullName => fullName.split(' ')[0]

console.log(square(4));

console.log(squareArrow(5));

console.log(squareArrow2(50));

console.log(firstName('Gaurav Goyal'));