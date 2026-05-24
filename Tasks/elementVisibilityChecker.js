function validateElement(isPresent, isDisplayed, isEnabled) {

    let status = "";
    let action = "";

    if (isPresent === true) {

        if (isDisplayed === true && isEnabled === true) {
            status = "READY";
            action = "Safe to interact with the element.";
        }
        else if (isDisplayed === true && isEnabled === false) {
            status = "DISABLED";
            action = "Element is visible but disabled. Wait for enable state or check preconditions.";
        }
        else if (isDisplayed === false) {
            status = "HIDDEN";
            action = "Element exists but is hidden. Scroll or wait until visible.";
        }

    }
    else {
        status = "NOT FOUND";
        action = "Element not found. Fail test and capture logs/screenshots.";
    }

    let severity = (isPresent === false)
        ? "CRITICAL"
        : (isDisplayed === false || isEnabled === false)
            ? "WARNING"
            : "OK";

    console.log("Status:", status);
    console.log("Severity:", severity);
    console.log("Action:", action);
}


// Function Call
validateElement(true, true, false);