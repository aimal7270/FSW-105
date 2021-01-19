var readline = require("readline-sync");
var sum = require('./sum');
var difference = require('./difference');
var product = require('./product');
var quotient = require('./quotient');

var num1 = readline.questionInt("Please enter first number: ");
var num2 = readline.questionInt("Please enter second number: ");
var operation = readline
.question("Please enter the operation to perform: add, sub, mul, div: ");

switch (operation) {
    case 'add':
        console.log("The result is: " + sum(num1, num2));
        break;
    case 'sub':
        console.log("The result is: " + difference(num1, num2));
        break;
    case 'mul':
        console.log("The result is: " + product(num1,num2));
        break;
    case 'div':
        console.log("The result is: " + quotient(num1,num2));
        break;
    default:
        console.log("Invalid operation!");
}
