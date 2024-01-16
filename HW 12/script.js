// randomDelayPrint
function randomDelayPrint(message) {
  for (const char of message) {
    const delay = Math.random() * 1000; 
    setTimeout(() => {
      console.log(char);
    }, delay);
  }
}

// Виклик функції
randomDelayPrint("Hello");

// debounce
function debounce(callback, delay) {
  let timerId;

  return function (...args) {
    clearTimeout(timerId);

    timerId = setTimeout(() => {
      callback(...args);
    }, delay);
  };
}

const expensiveOperation = () => console.log("Виконую складну операцію...");
const debouncedExpensiveOperation = debounce(expensiveOperation, 1000);

debouncedExpensiveOperation();
debouncedExpensiveOperation();
debouncedExpensiveOperation();

// intervalRace
function intervalRace(functions, interval) {
  const results = [];
  let index = 0;

  function runNextFunction() {
    if (index < functions.length) {
      const result = functions[index]();
      results.push(result);
      index++;
      setTimeout(runNextFunction, interval);
    }
  }

  runNextFunction();

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(results);
    }, functions.length * interval);
  });
}

// Приклад використання
const func1 = () => "F1";
const func2 = () => "F2";
const func3 = () => "F3";

const functionsArray = [func1, func2, func3];

intervalRace(functionsArray, 1000).then((results) => {
  console.log(results);
});
