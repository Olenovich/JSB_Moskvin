// logArguments

function logArguments(fn) {
  return function (...args) {
    console.log("Arguments:", args);
    return fn(...args);
  };
}

// Приклад
function sum(a, b) {
  return a + b;
}

const loggedSum = logArguments(sum);
loggedSum(3, 5);

// validate

function validate(fn, validator) {
  return function (...args) {
    if (!validator(...args)) {
      throw new Error("Arguments validation failed");
    }
    return fn(...args);
  };
}

// Приклад
function isNumbers(...args) {
  return args.every(arg => typeof arg === 'number');
}

function add(a, b) {
  return a + b;
}

const validatedAdd = validate(add, isNumbers);
validatedAdd(3, 5);
validatedAdd(2, 'test');

// retry

function retry(fn, maxAttempts) {
  return function (...args) {
    let lastError = null;
    for (let i = 0; i < maxAttempts; i++) {
      try {
        return fn(...args);
      } catch (error) {
        lastError = error;
      }
    }
    throw lastError || new Error('Function did not succeed after maximum attempts');
  };
}

// Приклад використання
function mightFail() {
  const random = Math.random();
  if (random < 0.8) {
    throw new Error("Failed");
  }
  return "Success";
}

const retriedFunction = retry(mightFail, 3);
console.log(retriedFunction()); // Поверне "Success" або викине помилку після 3 спроб
