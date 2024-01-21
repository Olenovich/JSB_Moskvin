// fibonacciv
function* fibonacci(limit) {
  let a = 0, b = 1;

  while (a < limit) {
    yield a;
    [a, b] = [b, a + b];
  }
}

const fibGen = fibonacci(10);

console.log(fibGen.next().value); // Виведе 0
console.log(fibGen.next().value); // Виведе 1
console.log(fibGen.next().value); // Виведе 1
console.log(fibGen.next().value); // Виведе 2
console.log(fibGen.next().value); // Виведе 3
console.log(fibGen.next().value); // Виведе 5
console.log(fibGen.next().value); // Виведе 8

// flatten
function* flatten(arr) {
  for (const item of arr) {
    if (Array.isArray(item)) {
      yield* flatten(item);
    } else {
      yield item;
    }
  }
}

const nestedArr = [1, [2, 3], [4, 5, [6, 7]]];
const flattenGen = flatten(nestedArr);

console.log([...flattenGen]);
// [1, 2, 3, 4, 5, 6, 7]

// asyncGenerator
async function* asyncGenerator(promises) {
  for (const promise of promises) {
    try {
      yield await promise;
    } catch (error) {
      yield Promise.reject(error);
    }
  }
}

// Приклад:
const promises = [
  new Promise((resolve) => setTimeout(() => resolve(1), 1000)),
  new Promise((resolve) => setTimeout(() => resolve(2), 500)),
  new Promise((resolve) => setTimeout(() => resolve(3), 1500)),
];

(async () => {
  for await (const result of asyncGenerator(promises)) {
    console.log(result);
  }
})();
