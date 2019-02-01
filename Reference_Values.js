// Function Arguments: Reference vs Value

var someUser = {
    name: 'Jordan'
}

function nameFormatter(user) {
    return user.name = 'Oops';
}

// We need to pass someUser;
//Result: Object {name: "Oops"}

var someName = 'Tifanni';

function someOtherNameFormatter(name) {
    return name = "Oops";
}

// someOtherNameFormatter(someName);
// Result: "Oops"
//someName; "Tiffany"

//How to pass in object: 

function NameFormatter(userName) {
    return userName = "Oops";
}

someUser.name; "Oops";
someUser.name = 'Andres';
someUser.name; "Andres"
nameFormatter(someUser.name); "Oops"
someUser.name; "Andres"