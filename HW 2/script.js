function fizzBuzz(num) {
    if (num % 3 === 0 && num % 5 === 0) {
        console.log('FizzBuzz');
    } else if (num % 3 === 0) {
        console.log('Fizz');
    } else if (num % 5 === 0) {
        console.log('Buzz');
    } else {
        console.log(num);
    }
}

// Приклад виклику функції з числом 15
fizzBuzz(15);

function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        console.log(`${year} є високосним роком`);
    } else {
        console.log(`${year} не є високосним роком`);
    }
}

// Приклад виклику функції з роком 2024
isLeapYear(2024);

function pluralizeYears(age) {
    let yearString = 'рік';
    if (age !== 1) {
        yearString = 'років';
    }
    console.log(`Вам ${age} ${yearString}`);
}

// Приклад виклику функції з віком 5
pluralizeYears(42);
