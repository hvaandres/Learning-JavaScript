// Equality Operator

// Set Up
function testEqual(val) {
    if (val == 12) {
        return "Equal";

    }

    return "Not Equal";
}

// change this value to test

console.log(testEqual(10));

// Comparison with the Stict Equality Operator
// One = sign will means that you are giving the value
// Two == You will be looking for the same values or will try to compare
// Three === It would look for values that are the same 


//Practice Comparing Different Values

function testEqual(val) {
    if (a == b) {
        return "Equal";

    }

    return "Not Equal";
}

console.log(testEqual(10 == 10)); // Equal
console.log(testEqual(10 === '10')); // Not Equal

// Comparison with the Inequality Operator

function testEqual(val) {
    if (val != 99) {
        return "Not Equal";

    }

    return "Equal";
}

console.log(testEqual(10)); //Result Not Equal

// Comparison with Strict Inequality Operator

function testEqual(val) {
    if (val !== 17) {
        return "Not Equal";

    }

    return "Equal";
}

console.log(testEqual(10)); // Result No Equal

//Comparison with the Logical and Operator

function testGreaterThan(val) {
    if (val > 100) {
        return "Over 100";
    }
    if (val > 10) {
        return "Over 10";
    }
    return "10 or Under"

}

console.log(testGreaterThan(10)); // Return = 10 or Under
