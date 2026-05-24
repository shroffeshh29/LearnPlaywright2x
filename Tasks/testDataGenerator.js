
var totalUsersGenerated = 0;

function generateTestUsers(count) {

    const roles = ["admin", "editor", "viewer", "tester", "manager"];

    for (let i = 1; i <= count; i++) {

        // Generate ID
        let userId = "USR-" + String(i).padStart(4, "0");

        // Generate role using modulo
        let role = roles[(i - 1) % roles.length];

        // Every 3rd user inactive
        let status = (i % 3 === 0) ? "INACTIVE" : "ACTIVE";

        // Print user data
        console.log(
            `${userId} | TestUser_${i} | testuser${i}@testingacademy.com | ${role} | ${status}`
        );

        totalUsersGenerated++;
    }

    console.log("\nTotal Users Generated:", totalUsersGenerated);
}


// Generate 8 users
generateTestUsers(8);