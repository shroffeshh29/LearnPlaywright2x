let browser = ["chrome", "firefox", "safari", "opera", "edge"]
for (let i = 0; i < browser.length; i++) {
    console.log(browser[i]);
    if (browser[i] === "opera") {
        console.log("Opera is removed")
        break
    }
}