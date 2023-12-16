// summarize(num)
function summarize(num) {
  return function (arg = 1) {
    return arg + num;
  };
}

// Приклад
const addFive = summarize(5);
console.log(addFive(3));
console.log(addFive());

// counter(startValue, step)
function counter(startValue, step) {
  let count = startValue;

  function increment() {
    count += step;
    return count;
  }

  function decrement() {
    count -= step;
    return count;
  }

  function reset() {
    count = startValue;
    return count;
  }

  return {
    increment,
    decrement,
    reset,
    getCurrentValue: () => count,
  };
}

// Приклад 
const myCounter = counter(0, 2);
console.log(myCounter.increment()); // 2
console.log(myCounter.increment()); // 4
console.log(myCounter.decrement()); // 2
console.log(myCounter.reset()); // 0

// sequence(fn1, fn2, ...)
function sequence(...functions) {
  return function (...args) {
    return functions.reduce((acc, fn) => fn(acc), ...args);
  };
}

// Приклад 
function addTwo(x) {
  return x + 2;
}

function multiplyByThree(x) {
  return x * 3;
}

const seq = sequence(addTwo, multiplyByThree);
console.log(seq(5)); // Поверне 21 ((5 + 2) * 3)
