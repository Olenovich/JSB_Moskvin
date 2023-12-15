function reverseArray(arr) {
  return arr.reverse();
}

const originalArray = [1, 2, 3, 4, 5];
const reversedArray = reverseArray(originalArray);

console.log(reversedArray); // [5, 4, 3, 2, 1]

function uniqueValues(arr1, arr2) {
  const combinedArray = arr1.concat(arr2);
  return Array.from(new Set(combinedArray));
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
const uniqueValuesArray = uniqueValues(array1, array2);

console.log(uniqueValuesArray); // [1, 2, 3, 4, 5, 6, 7]

function calculateAverageGrade(students) {
  const totalGrades = students.reduce((acc, student) => acc + student.grade, 0);
  const averageGrade = totalGrades / students.length;
  return averageGrade.toFixed(1); // Округлення до одного знаку після коми
}

const students = [
  { name: "Alice", age: 20, grade: 4.5 },
  { name: "Bob", age: 21, grade: 3.9 },
  { name: "Charlie", age: 19, grade: 4.8 }
];

console.log(calculateAverageGrade(students)); // 4.4
