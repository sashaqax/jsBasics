function countdown(num) {
    console.log(num);

    if (num <= 0) {
        return;
    }

    countdown(num - 1);
}

// запуск
countdown(5);