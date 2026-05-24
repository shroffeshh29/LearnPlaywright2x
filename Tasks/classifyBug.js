function classifyBug(title, frequency, impact) {

    let severity = "";
    if (frequency === "always") {

        if (impact === "blocker") {
            severity = "P0 - Critical: Stop release immediately";
        }
        else if (impact === "major") {
            severity = "P1 - High Priority";
        }
        else {
            severity = "P2 - Medium Priority";
        }

    }
    else if (frequency === "often") {

        if (impact === "blocker") {
            severity = "P1 - High Priority";
        }
        else if (impact === "major") {
            severity = "P2 - Medium Priority";
        }
        else {
            severity = "P3 - Low Priority";
        }

    }
    else if (frequency === "rarely") {

        if (impact === "blocker") {
            severity = "P2 - Medium Priority";
        }
        else if (impact === "major") {
            severity = "P3 - Low Priority";
        }
        else {
            severity = "P4 - Very Low Priority";
        }

    }
    console.log("Bug Title:", title);
    console.log("Frequency:", frequency);
    console.log("Impact:", impact);
    console.log("Severity:", severity);
}

classifyBug(
    "Checkout page crashes on applying coupon",
    "always",
    "blocker"
);