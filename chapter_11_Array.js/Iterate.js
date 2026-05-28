let tests = ["login", "logout", "checkout"];

for (test of tests) {
    console.log(test)
}

tests.forEach((test, index) => {
    console.log(test, index)

})


let students = ["A", "B", "C"]
for (let student in students) {
    console.log(student + students[student])
}