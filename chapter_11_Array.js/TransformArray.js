let scores = [20, 89, 67, 45, 81];

let grades = scores.map(s => s > 70 ? "Pass" : "Fail");
console.log(grades)

let passing = scores.filter(s => s > 70);
console.log(passing)

let total = scores.reduce((a, b) => a + b, 0)
console.log(total)