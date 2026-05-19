// ============================================
// Chapter 2: Understanding var, let, and const
// ============================================

console.log("===== 1. VAR EXAMPLES =====\n");

// VAR is function-scoped (not block-scoped)
// VAR can be re-declared
// VAR can be updated
// VAR declarations are hoisted (moved to top of scope)

var name = "Alice";
console.log("Initial name:", name); // Alice

var name = "Bob"; // ✅ Re-declaration allowed with var
console.log("After re-declaration:", name); // Bob

name = "Charlie"; // ✅ Updating allowed
console.log("After update:", name); // Charlie

// VAR in Blocks
if (true) {
    var age = 25; // var ignores block scope!
}
console.log("Age outside block:", age); // 25 (accessible!)

// VAR in Functions
function testVar() {
    var city = "New York";
    console.log("Inside function:", city); // New York
}
testVar();
// console.log(city); // ❌ Error! city is function-scoped

// Hoisting with var
console.log("Hoisted var:", hoistedVar); // undefined (hoisted but not initialized)
var hoistedVar = "I am hoisted";
console.log("After assignment:", hoistedVar);


console.log("\n===== 2. LET EXAMPLES =====\n");

// LET is block-scoped
// LET cannot be re-declared in same scope
// LET can be updated
// LET is NOT hoisted

let country = "USA";
console.log("Initial country:", country); // USA

// let country = "UK"; // ❌ Error! Cannot re-declare

country = "UK"; // ✅ Updating allowed
console.log("After update:", country); // UK

// LET in Blocks
if (true) {
    let score = 100;
    console.log("Score inside block:", score); // 100
}
// console.log(score); // ❌ Error! score is block-scoped

// LET in Functions
function testLet() {
    let language = "JavaScript";
    console.log("Inside function:", language); // JavaScript
}
testLet();
// console.log(language); // ❌ Error!

// LET in Loops
for (let i = 0; i < 3; i++) {
    console.log("Loop iteration:", i); // 0, 1, 2
}
// console.log(i); // ❌ Error! i is block-scoped

// Nested blocks
let outer = "Outside";
if (true) {
    let outer = "Inside"; // ✅ Different block, allowed
    console.log("Inner outer:", outer); // Inside
}
console.log("Outer outer:", outer); // Outside


console.log("\n===== 3. CONST EXAMPLES =====\n");

// CONST is block-scoped
// CONST cannot be re-declared
// CONST cannot be updated
// CONST must be initialized when declared

const PI = 3.14159;
console.log("PI value:", PI);

// PI = 3.14; // ❌ Error! Cannot reassign const
// const PI; // ❌ Error! Must initialize immediately

// CONST with Objects (Important!)
const person = { name: "John", age: 30 };
console.log("Person:", person);

// person = {}; // ❌ Error! Cannot reassign the reference

person.age = 31; // ✅ Allowed! Can modify properties
person.city = "Boston"; // ✅ Allowed! Can add properties
console.log("Modified person:", person);

// CONST with Arrays (Important!)
const numbers = [1, 2, 3];
console.log("Numbers:", numbers);

// numbers = []; // ❌ Error! Cannot reassign

numbers.push(4); // ✅ Allowed! Can modify array
console.log("After push:", numbers);

// CONST in Blocks
if (true) {
    const SECRET = "my-secret-key";
    console.log("Secret inside block:", SECRET);
}
// console.log(SECRET); // ❌ Error! block-scoped


console.log("\n===== 4. FUNCTIONS & SCOPE =====\n");

// Function Declaration
function greet(name) {
    var greeting = "Hello " + name;
    let farewell = "Goodbye " + name;
    console.log(greeting);
    console.log(farewell);
}
greet("World");

// Function Expression
const multiply = function(a, b) {
    return a * b;
};
console.log("Multiply 5 x 3:", multiply(5, 3));

// Arrow Function
const square = (x) => x * x;
console.log("Square of 4:", square(4));

// Scope Chain
var globalVar = "I am global";
function outerFunction() {
    let outerVar = "I am outer";
    
    function innerFunction() {
        const innerVar = "I am inner";
        console.log("Access global:", globalVar); // ✅
        console.log("Access outer:", outerVar);   // ✅
        console.log("Access inner:", innerVar);   // ✅
    }
    innerFunction();
}
outerFunction();

// Closure example
function createCounter() {
    let count = 0; // private variable
    return {
        increment: function() {
            count++;
            return count;
        },
        decrement: function() {
            count--;
            return count;
        },
        getCount: function() {
            return count;
        }
    };
}
const counter = createCounter();
console.log("Count:", counter.increment()); // 1
console.log("Count:", counter.increment()); // 2
console.log("Count:", counter.decrement()); // 1


console.log("\n===== 5. BLOCKS & SCOPE COMPARISON =====\n");

// Block with var
{
    var blockVar = "I am var in block";
    let blockLet = "I am let in block";
    const blockConst = "I am const in block";
}
console.log("Var outside block:", blockVar);    // ✅ Accessible
// console.log(blockLet);   // ❌ Error!
// console.log(blockConst); // ❌ Error!

// Nested Blocks
{
    let a = 1;
    {
        let a = 2; // Different variable!
        console.log("Nested a:", a); // 2
    }
    console.log("Outer a:", a); // 1
}

// Shadowing
var x = 10;
{
    let x = 20; // Shadows outer x
    console.log("Shadowed x:", x); // 20
}
console.log("Original x:", x); // 10


console.log("\n===== 6. LOOPS COMPARISON =====\n");

// FOR Loop with var (Problem!)
console.log("--- var in for loop ---");
for (var i = 0; i < 3; i++) {
    console.log("Inside loop i:", i);
}
console.log("Outside loop i:", i); // 3 (leaked!)

// FOR Loop with let (Better!)
console.log("--- let in for loop ---");
for (let j = 0; j < 3; j++) {
    console.log("Inside loop j:", j);
}
// console.log(j); // ❌ Error! j is not defined

// var with setTimeout (Classic problem!)
console.log("--- var + setTimeout problem ---");
for (var k = 0; k < 3; k++) {
    setTimeout(() => {
        console.log("var timeout k:", k); // 3, 3, 3 (all same!)
    }, 100);
}

// let with setTimeout (Fixed!)
console.log("--- let + setTimeout fix ---");
for (let m = 0; m < 3; m++) {
    setTimeout(() => {
        console.log("let timeout m:", m); // 0, 1, 2 (correct!)
    }, 100);
}

// FOR...OF Loop (ES6)
console.log("--- for...of loop ---");
const fruits = ["Apple", "Banana", "Orange"];
for (const fruit of fruits) {
    console.log("Fruit:", fruit);
}

// FOR...IN Loop (Object keys)
console.log("--- for...in loop ---");
const car = { brand: "Toyota", model: "Camry", year: 2023 };
for (const key in car) {
    console.log(`${key}: ${car[key]}`);
}

// WHILE Loop
console.log("--- while loop ---");
let countdown = 3;
while (countdown > 0) {
    console.log("Countdown:", countdown);
    countdown--;
}

// DO...WHILE Loop
console.log("--- do...while loop ---");
let num = 0;
do {
    console.log("Do while num:", num);
    num++;
} while (num < 3);


console.log("\n===== 7. BEST PRACTICES =====\n");

/*
1. Use const by default
2. Use let when you need to reassign
3. Avoid var in modern JavaScript
4. const objects/arrays can be mutated (but not reassigned)
5. Declare variables at the top of their scope
6. Use descriptive names
*/

// ✅ Good Practice
const MAX_SIZE = 100;
const userList = [];
let currentIndex = 0;

// ❌ Bad Practice
// var x, y, z;
// don't use one-letter names in real code

console.log("=== End of Chapter 2 ===");
