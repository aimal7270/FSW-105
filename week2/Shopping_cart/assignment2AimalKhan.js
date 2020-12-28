// Preliminaries:

var i = 5;
if (i > 3) {
    console.log(i + " is greater than 3.");
}

var str1 = "Cat";
var str2 = "Dog";
if (str1.length == 3) {
    console.log(str1 + "'s length is equal to " + 3.);
}

if (str1 === str2) {
    console.log(str1 + " is equal to " + str2)
} else {
    console.log(str1 + " and " + str2 + " is not the same.");
}

// Bronze Medal:

// Create a person object.
var  person = {
    name: "Bobby",
    age: 12,
}

// Check if person is 18 or older.
if(person.age >= 18){
    console.log(person.name + " is allowed to go to movies.");
} else {
    console.log(person.name + " is not allowed to go to movies.");
}

// Check if person.name starts with "B".
if (person.name[0]=="B"){
    console.log(person.name + " whose name starts with 'B' can go to movies.");
}else {
    console.log("You are not allowed to go to movies.")
}

// check if person name starts with "B" and is 18 or older.
if((person.name[0]=="B")  && (person.age >= 18)) {
    console.log(person.name + " of age " + person.age + " is allowed to go to movies.");
} else {
    console.log("This person is not allowed to go to movies.")
}

// Silver Medal:

// Compare equality and strict equality.
if(1 === "1"){
    console.log("Strict");
} else if(1 == "1"){
    console.log("Loose");
} else{
    console.log("not equal at all.");
}

// Use multiple conditions in "if statement."
if((1<=2) && (2==4)){
    console.log("Yes")
} else{
    console.log("No")
}

// Gold Medal (Extra Extra Credit):

//check if dog is a "string using ternary operators."
console.log(typeof "dog" == "string"? "Yes! 'dog' is a string value.": "No! 'dog' isn't a string value.'");

// check to see if "true" is a boolean.
console.log(typeof true == "boolean"? "Yes! 'true' is a boolean value.": "No! 'true' is not a boolean value.");

// checks to see if a variable has been defined or not
var firstName;
console.log(typeof firstName == "undefined"? "Variable is not defined." : "Variable is defined.");

// check if "s" is greater than 12.
console.log('s' > 12? " Yes! 's' is greater than 12." : "No! 's' is not greater than 12.");

// Just trying the same statement with few more numbers and letters.
console.log('ge' > 15? " Yes! 'ge' is greater than 15." : "No! 'ge' is not greater than 15.");
console.log('jhg' > 213? " Yes! 'jhg' is greater than 213." : "No! 'jhg' is not greater than 213.");
console.log('mrnj' > 7852? " Yes! 'mrnj' is greater than 7852." : "No! 'mrnj' is not greater than 7852.");
console.log('losak' > 46269? " Yes! 'losak' is greater than 46269." : "No! 'losak' is not greater than 46269.");

// ternary statement that uses console.log to display whether a number is odd or even.
var myNum = 14;
console.log(myNum % 2 == 0? myNum + " is an even number.": myNum + " is an odd number.");