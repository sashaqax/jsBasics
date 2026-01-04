// проверям пароль..



function validatePassword(password, repeatPassword) {
    if (password !== repeatPassword) {
        return "Passwords do not match";
    }

    if (password.length < 8) {
        return "Password too short";
    }

    if (!/\d/.test(password)) {
        return "Password must contain a number";
    }

    if (!/[a-zA-Z]/.test(password)) {
        return "Password must contain a letter";
    }

    return "Password is valid";
}


console.log(validatePassword("test1234678", "test1234678"));


// оценнки студента:

function analyzeGrades(grades) {
    const sum = grades.reduce((acc, grade) => acc + grade, 0);
    const average = sum / grades.length;

    if (average < 3) return "Failed";
    if (average <= 4) return "Passed";
    return "Excellent";
}

console.log(analyzeGrades([4, 5, 5]));


// Анализ заказов интернет магазина ..


const orders = [
    { id: 1, price: 255, isPaid: true },
    { id: 2, price: 1000, isPaid: false },
    { id: 3, price: 100, isPaid: true },
    { id: 4, price: 550, isPaid: true }
];

function analyzeOrders(orders) {
    let totalSum = 0;
    let paidSum = 0;
    const paidOrderIds = [];

    for (const order of orders) {
        totalSum += order.price;

        if (order.isPaid) {
            paidSum += order.price;
            paidOrderIds.push(order.id);
        }
    }

    return {
        paidOrderIds,
        totalSum,
        paidSum
    };
}

console.log(analyzeOrders(orders));


// Результаты тестирования результатов ()


const testResults = [
    { name: "Login test", passed: true },
    { name: "Checkout test", passed: false },
    { name: "Profile test", passed: true }
];



function analyzeTests(results) {
    let passed = 0;
    let failed = 0;

    for (const test of results) {
        test.passed ? passed++ : failed++;
    }

    return {
        passed,
        failed,
        status: failed > 0 ? "Build failed" : "Build passed"
    };
}

console.log(analyzeTests(testResults));


// Калькулятор с историей операций....!



const operations = [
    { operation: "+", value: 10 },
    { operation: "-", value: 3 },
    { operation: "+", value: 5 }
];




function calculate(operations) {
    let result = 0;

    for (const { operation, value } of operations) {
        if (operation === "+") result += value;
        if (operation === "-") result -= value;
    }

    return result;
}



console.log(calculate(operations));




//vsc чуть помогает, да..