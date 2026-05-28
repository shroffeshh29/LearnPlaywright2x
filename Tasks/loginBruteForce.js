const correctPassword = "1234";
const correctUsername = "admin";
const MAX_ATTEMPTS = 3;


const attempts = [
    { username: "admin", password: "1111" },
    { username: "user", password: "1234" },
    { username: "admin", password: "0000" },
    { username: "admin", password: "1234" }
];

var failedAttempts = 0;
let index = 0;
do {
    let currentAttempt = attempts[index];
    console.log(`Attempt ${index + 1}`);
    if (
        currentAttempt.username === correctUsername &&
        currentAttempt.password === correctPassword
    ) {
        console.log("Login Successful");
        failedAttempts = 0;
        break;
    } else {
        failedAttempts++;
        console.log("Login Failed");
    }

    if (failedAttempts >= MAX_ATTEMPTS) {
        console.log("Account locked due to the maximum failed attempts");
        break;
    }

    index++;

} while (index < attempts.length)