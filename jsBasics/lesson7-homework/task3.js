

function divide(numerator, denominator) {
    if (typeof numerator !== "number" || typeof denominator !== "number") {
        throw new Error("Both arguments must be numbers");
    }

    if (denominator === 0) {
        throw new Error("Division by zero is not allowed");
    }

    return numerator / denominator;
}





// call....


try {
    console.log(divide(10, 2));
} catch (error) {
    console.error(error.message);
} finally {
    console.log("Work is over");
}




try {
    console.log(divide(10, 0));
} catch (error) {
    console.error(error.message);
} finally {
    console.log("Work is over");
}

try {
    console.log(divide(10, "a"));
} catch (error) {
    console.error(error.message);
} finally {
    console.log("Work is over");
}