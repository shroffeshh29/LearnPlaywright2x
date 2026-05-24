function solution(results) {
    let pass = 0;
    let fail = 0;
    let skip = 0;

    for (let i = 0; i < results.length; i++) {
        if (results[i] === "pass") {
            pass++;
        }
        else if (results[i] === "fail") {
            fail++;
        }
        else if (results[i] = "skip") {
            skip++;
        }
    }

    const total = results.length;
    const passRate = total === 0 ? "0%" : Math.floor(pass / total) * 100 + "%"
    let verdict = '';
    if (fail === 0) {
        verdict = "ready for release";
    }
    else if (fail <= 2) {
        "review"
    }
    else {
        "block release"
    }

    return `Total : ${total},Pass: ${pass} , Fail: ${fail} , skip: ${skip} and passRate is ${passRate}`
}

console.log(solution(["pass", "pass", "fail", "pass", "skip", "pass", "fail", "pass"]))