function showTextAfterDelay(text, delay) {
    setTimeout(() => {
        console.log(text);
    }, delay);
}

//test

showTextAfterDelay("Hello after 5 seconds", 5000);
