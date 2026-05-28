let responseTimes = [120, 450, 700, 300, 900, 250, 650];

let min = responseTimes[0];
let max = responseTimes[0];
let sum = 0;
let breachCount = 0;
let index = 0;

while (index < responseTimes.length) {
    let currentTime = responseTimes[index];
    if (currentTime < min) {
        min = currentTime;
    }
    else if (currentTime > max) {
        max = currentTime;
    }
    sum += currentTime;
    if (currentTime > 500) {
        breachCount++;
    }

    index++;
}

let average = sum / responseTimes.length;
let status = breachCount > 0 ? "SLA breached" : "SLA has not breached";

console.log("Report/n");
console.log("Maximum Response time " + max);
console.log("Minimum Response time " + min);
console.log("It has been breached for " + breachCount + " times");
console.log("Status is " + status)