
const testCases = [
    {
        name: "Strict Equality Test",
        expected: 10,
        actual: 10,
        comparison: "strictEqual"
    },
    {
        name: "Loose Equality Test",
        expected: 5,
        actual: "5",
        comparison: "looseEqual"
    },
    {
        name: "Type Check Test",
        expected: "number",
        actual: 100,
        comparison: "typeCheck"
    },
    {
        name: "Truthy Test",
        expected: true,
        actual: "hello",
        comparison: "truthy"
    },
    {
        name: "Less Than Test",
        expected: 50,
        actual: 30,
        comparison: "lessThan"
    },
    {
        name: "Failure Test",
        expected: 20,
        actual: 40,
        comparison: "strictEqual"
    }
];

// const -> total tests
const totalTests = testCases.length;

// var -> global counters
var passed = 0;
var failed = 0;
var errors = 0;

// let -> loop variables
let results = [];


for (let i = 0; i < totalTests; i++) {

    let test = testCases[i];

    // nullish operator ??
    let testName = test.name ?? "Unnamed Test";

    let status;

    try {

        // typeof check
        if (typeof test.comparison !== "string") {
            throw "Invalid comparison type";
        }

        // switch statement
        switch (test.comparison) {

            case "strictEqual":
                status = (test.actual === test.expected);
                break;

            case "looseEqual":
                status = (test.actual == test.expected);
                break;

            case "typeCheck":
                status = (typeof test.actual === test.expected);
                break;

            case "truthy":
                status = (!!test.actual === true);
                break;

            case "lessThan":
                status = (test.actual < test.expected);
                break;

            default:
                throw "Unknown comparison";
        }

        // ternary operator
        let finalResult = status ? "PASS" : "FAIL";

        // if else
        if (finalResult === "PASS") {
            passed++;
        } else {
            failed++;
        }

        // logical operators && ||
        if (
            finalResult === "FAIL" &&
            (test.actual !== test.expected || test.comparison === "strictEqual")
        ) {
            console.log(`Issue Found in: ${testName}`);
        }

        results.push({
            name: testName,
            result: finalResult
        });

    } catch (err) {

        errors++;

        results.push({
            name: testName,
            result: "ERROR"
        });

        console.log(`Error in ${testName}: ${err}`);
    }
}


let consecutivePasses = 0;
let startIndex = 0;

while (
    startIndex < results.length &&
    results[startIndex].result === "PASS"
) {
    consecutivePasses++;
    startIndex++;
}



let firstFailure = "No failures";
let index = 0;

do {

    if (results[index].result === "FAIL") {
        firstFailure = results[index].name;
        break;
    }

    index++;

} while (index < results.length);

// ===============================
// FINAL REPORT
// ===============================

console.log("\n===== TEST REPORT =====");

for (let i = 0; i < results.length; i++) {
    console.log(
        `${i + 1}. ${results[i].name} --> ${results[i].result}`
    );
}

console.log("\n===== SUMMARY =====");

console.log(`Total Tests: ${totalTests}`);
console.log(`Passed: ${passed}`);
console.log(`Failed: ${failed}`);
console.log(`Errors: ${errors}`);

console.log(
    `Consecutive Passes From Start: ${consecutivePasses}`
);

console.log(`First Failure: ${firstFailure}`);