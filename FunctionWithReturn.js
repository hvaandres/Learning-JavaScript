function minusSeven(num) {
    return num - 7;
}

console.log(minusSeven(10)); //result 3

function timeFive(num) {
    return num * 5;
}
console.log(timeFive(5)); //Return 25

// Understanding Undefined Value Returned from a Function

var sum = 0;
function addThree() {
    sum = sum + 3;
}

// Will return an undefined default

// Assignment with a return Value

var changed = 0;

function change(num) {
    return (num + 5) / 3;
}

changed = change(10);

var processed = 0;

function processArg(num) {
    return (num + 3) / 5;
}

processArg = processArg(7);