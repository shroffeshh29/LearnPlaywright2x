// Write a program that classifies a triangle based on its side lengths. Given three input values representing the lengths of the sides, determine if the triangle is equilateral (all sides are equal), isosceles (exactly two sides are equal), or scalene (no sides are equal). Use an if-else statement to classify the triangle.

let a = 10, b = 20, c = 30;
if (a === b && b === c && a === c) {
    console.log("It is an equilateral triangle")
}
else if (a === b && b === c && a !== c) {
    console.log("It is an isosceles triangle")
}
else {
    console.log("It is a scalene triangles")
}