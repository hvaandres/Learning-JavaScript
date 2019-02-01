

// Manipulate the arrays with Push

var ourArray = ["Stimpson", "J", "cat"];
ourArray.push(["happy", "joy"]); // The result will be ["Stimpson", "J", "cat", ["happy", "joy"]]

// Manipulate Arrays with pop ();

var ourArray = [1, 2, 3];
var removedFromOurArray = ourArray.pop();

//removedFromOurArray now equals 3, and ourArray now equals [1,2]

//Another Example

var myArray = [["John", 23], ["cat", 2]];
var removedFromMyArray = myArray.pop();

console.log(myArray) // The result will be ["John",23]

//Manipulate Arrays with Shift() 

var myArray = [["John", 23], ["cat", 2]];
var removedFromMyArray = myArray.shift();

console.log(myArray) // The resul will be ["cat", 2]

// Manipulate Arrays with unshift()

var ourArray = ["Stimpson", "J", "cat"];
ourArray.unshift(["happy"]); // The result will be ["Happy", "J", "cat"]




