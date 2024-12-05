const arr = [];
for (let index = 2; index < 10; index++) {
    arr[0] = 1;
    arr[1] = 9;
    arr[index] = SecretAction(arr[index - 1], arr[index - 2], Add)
}
console.log(arr);

function SecretAction(num1, num2, operation) {
    return operation(num1, num2);
}

function Add(num1, num2) {
    return num1 + num2;
}

function Divide(num1, num2) {
    return num1 / num2;
}
function Multiply(num1, num2) {
    return num1 * num2;
}
function Subtract(num1, num2) {
    return num1 - num2;
}
let numS = 12;
let numK = 34;
console.log(SecretAction(numS, numK, Add));