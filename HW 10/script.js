// Обчислення чисел Фібоначчі за допомогою рекурсії
function fibonacci(n) {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

const fibNumber = 8;
console.log(`Число Фібоначчі на позиції ${fibNumber}: ${fibonacci(fibNumber)}`);

// Пошук числових паліндромів
function isPalindrome(num) {
  const reversed = parseInt(num.toString().split('').reverse().join(''));
  return num === reversed;
}

function findPalindrome(num) {
  let steps = 0;
  while (!isPalindrome(num)) {
    const reversed = parseInt(num.toString().split('').reverse().join(''));
    num += reversed;
    steps++;
    if (steps > 1000) {
      return { result: null, steps: steps };
    }
  }
  return { result: num, steps: steps };
}

const startingNumber = 196; // Змініть це число для перевірки
console.log(findPalindrome(startingNumber));

// Генерація всіх можливих перестановок унікальних елементів масиву
function permutations(arr) {
  if (arr.length === 1) {
    return [arr];
  }

  const result = [];

  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];
    const remaining = arr.slice(0, i).concat(arr.slice(i + 1));
    const innerPermutations = permutations(remaining);
    for (let j = 0; j < innerPermutations.length; j++) {
      result.push([current].concat(innerPermutations[j]));
    }
  }

  return result;
}

const uniqueArray = [1, 2, 3]; // Змініть масив для отримання його перестановок
console.log(permutations(uniqueArray));
