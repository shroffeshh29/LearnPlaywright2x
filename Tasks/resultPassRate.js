function generateTestReport(testResults) {

    let passCount = 0;
    let failCount = 0;
    let skipCount = 0;
    for (let i = 0; i < testResults.length; i++) {

        if (testResults[i] === "pass") {
            passCount++;
        }
        else if (testResults[i] === "fail") {
            failCount++;
        }
        else if (testResults[i] === "skip") {
            skipCount++;
        }
    }

    let totalTests = testResults.length;

    // Pass rate
    let passRate = ((passCount / totalTests) * 100).toFixed(2);

    // Verdict
    let verdict = "";

    if (failCount === 0) {
        verdict = "Ready for Release";
    }
    else if (failCount <= 2) {
        verdict = "Needs Review";
    }
    else {
        verdict = "Block Release";
    }

    // Print report
    console.log("===== TEST REPORT =====");
    console.log("Total Tests :", totalTests);
    console.log("Passed      :", passCount);
    console.log("Failed      :", failCount);
    console.log("Skipped     :", skipCount);
    console.log("Pass Rate   :", passRate + "%");
    console.log("Verdict     :", verdict);
}


generateTestReport([
    "pass",
    "fail",
    "pass",
    "skip",
    "pass",
    "fail",
    "pass"
]);