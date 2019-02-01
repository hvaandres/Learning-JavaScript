// Global Scope

var myGlobal = 10;

function fun1() {

    oopsGlobal = 5;

}

function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
        output += "oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}

fun1();
fun2();

// Local Scope & functions

function myLocalScope() {
    var myVar = 5;
    console.log(myVar);

}
myLocalScope();

console.log(myVar); // This is not going to work because it's outside of the local scope


// Local vs Global

//Global Variable

var seasonUtah = Sprint;

function seasonGuadalajara() {

    return seasonUtah;
}

console.log(seasonGuadalajara); // It will return Sprint

//Local Variable

var seasonUtah = Sprint;

function seasonGuadalajara() {
    var seasonUtah = "Summer"
    return seasonUtah;
}

console.log(seasonGuadalajara()); //it will return Summer




