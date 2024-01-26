// AliJavascriptPortfolio.js

// Uitleg wat JavaScript is met enkele beginnersvoorbeelden
console.log("Welkom bij mijn JavaScript-portfolio!");
console.log("JavaScript is een programmeertaal die wordt gebruikt om dynamische content toe te voegen aan webpagina's.");

// Hoe het in combinatie gaat met Node.js
console.log("Node.js stelt JavaScript in staat om server-side te draaien en gebruik te maken van modules.");

// Console loggen en inspecteren op de website
console.log("Je kunt informatie loggen naar de console met console.log().");
console.log("Gebruik 'console.log()' om te inspecteren.");

// Caching voorbeeld
const cachedData = require('./cachedData'); // veronderstel dat cachedData een extern bestand is met gecachte gegevens
console.log("Caching voorbeeld:", cachedData);

// Variabelen voorbeeld (let, const, waarom geen var)
let variableLet = 10;
const variableConst = 20;
console.log("Let variabele:", variableLet);
console.log("Const variabele:", variableConst);

// String concatenation en interpolation voorbeelden
const firstName = "Ali";
const lastName = "Javascript";
console.log("Concatenation:", firstName + " " + lastName);
console.log("Interpolation:", `${firstName} ${lastName}`);

// String literals uitleg
console.log(`String literals gebruiken backticks en bieden meer functionaliteit dan gewone strings.`);

// Gebruik van quotes
console.log('Single quotes');
console.log("Double quotes");
console.log(`Backticks`);

// Arithmetic operators voorbeelden
console.log("Arithmetic operators:", 5 + 3, 5 - 3, 5 * 3, 5 / 3);

// parseInt & parseFloat voorbeeld
const numString = "42";
console.log("parseInt:", parseInt(numString));
console.log("parseFloat:", parseFloat(numString));

// Comparison operators voorbeeld
console.log("Comparison operators:", 5 > 3, 5 < 3, 5 === 3, 5 !== 3);

// Booleans
const isTrue = true;
const isFalse = false;
console.log("Boolean voorbeelden:", isTrue, isFalse);

// Greater than / Less than voorbeeld
console.log("Greater than / Less than voorbeeld:", 10 > 5, 10 < 5);

// Logical operators (if else statement)
const condition = true;
if (condition) {
  console.log("Condition is true");
} else {
  console.log("Condition is false");
}

// Voorbeeld arrays
const myArray = [1, 2, 3, 4, 5];
console.log("Array voorbeeld:", myArray);

// Pop and push voorbeeld
myArray.pop();
console.log("After pop:", myArray);
myArray.push(6);
console.log("After push:", myArray);

// JavaScript loops
console.log("For loop:");
for (let i = 0; i < 5; i++) {
  console.log(i);
}

console.log("While loop:");
let j = 0;
while (j < 5) {
  console.log(j);
  j++;
}

console.log("Do...while loop:");
let k = 0;
do {
  console.log(k);
  k++;
} while (k < 5);

console.log("For...in loop:");
for (const index in myArray) {
  console.log(index, myArray[index]);
}

console.log("For...of loop:");
for (const element of myArray) {
  console.log(element);
}

// Switch voorbeeld
const fruit = "apple";
switch (fruit) {
  case "apple":
    console.log("It's an apple");
    break;
  case "banana":
    console.log("It's a banana");
    break;
  default:
    console.log("Unknown fruit");
}

// Remainder voorbeeld
console.log("Remainder voorbeeld:", 10 % 3);

// Function met parameter en scope voorbeeld
function greet(name) {
  console.log(`Hello, ${name}!`);
}
greet("Ali");

// Voorbeeld includes()
const fruits = ["apple", "banana", "orange"];
console.log("Array includes:", fruits.includes("banana"));

// Uitleg hoisting
console.log("Hoisting voorbeeld:", hoistedVariable); // undefined
var hoistedVariable = "I am hoisted";

// Uitleg verschil tussen global en lokale variabelen
let globalVar = "I'm global";

function localScope() {
  let localVar = "I'm local";
  console.log(globalVar); // accessible
  console.log(localVar); // accessible
}

localScope();
// console.log(localVar); // Uncommenting this line will result in an error

// Wat doet "return" en in welke voorbeelden?
function addNumbers(a, b) {
  return a + b;
}
console.log("Return voorbeeld:", addNumbers(5, 3));

// Bonus: JavaScript in combinatie met HTML5, CSS, Bootstrap
// (querySelector, querySelectorAll, element attributes)
const myElement = document.querySelector("#myElement"); // Assuming there is an HTML element with the id "myElement"
console.log("Element by ID:", myElement);

const elementsByClass = document.querySelectorAll(".myClass"); // Assuming there are elements with the class "myClass"
console.log("Elements by Class:", elementsByClass);

const attributeValue = myElement.getAttribute("data-myattribute"); // Assuming the element has a data-myattribute attribute
console.log("Attribute value:", attributeValue);
