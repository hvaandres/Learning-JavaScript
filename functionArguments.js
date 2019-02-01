
// Function

function fullName(firstName, lastName) {
    return lastName.toUpperCase() + "," + firstName.toUpperCase();
}

fullName('Alan', 'Haro');

// Another example

//This is a classic error on Javascript because it will never tell you that this is wrong 
function sample(arg1, arg2) {
    console.log(arg1);
    console.log(arg2);
}

//Build something to have default values

function fullName(firstName, lastName, language) {
    var language = language || 'English';
    return lastName.toUpperCase() + "," + firstName.toUpperCase() + " - " + language;
}

console.log(fullName('Andres', "Haro", 'Spanish'));