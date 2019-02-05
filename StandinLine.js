function nextInline(arr, item) {

    arr.push(item);
    return arr.shift();
}

var testArr = [1, 2, 3, 4, 5];

console.log("Before: " + JSON.stringify(testArr));
// Will return the array that we called before [1,2.3,4,5]
console.log(nextInline(testArr, 6));
// Will return the extra item in the array [1,2.3,4,5,6]
console.log("After " + JSON.stringify(testArr));



