function isPrime(num) {
    if (num <= 1) {
        console.log(`Число ${num} не є простим числом`);
        return;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            console.log(`Число ${num} не є простим числом`);
            return;
        }
    }
    console.log(`Число ${num} є простим числом`);
}

// Приклад виклику функції з числом 83
isPrime(83);

function findPerfectNumbers(N) {
    for (let number = 2; number <= N; number++) {
        let sum = 1;
        for (let i = 2; i * i <= number; i++) {
            if (number % i === 0) {
                sum += i;
                if (i * i !== number) {
                    sum += number / i;
                }
            }
        }
        if (sum === number) {
            console.log(`Число ${number} є досконалим числом`);
        }
    }
}

// Приклад виклику функції з числом 500
findPerfectNumbers(500);

function drawTree(height) {
    for (let i = 1; i <= height; i++) {
        let spaces = ' '.repeat(height - i);
        let stars = '*'.repeat(2 * i - 1);
        console.log(spaces + stars + spaces);
    }
}

// Приклад виклику функції з висотою 4
drawTree(4);
